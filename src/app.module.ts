import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path';

import { HelloResolver } from './hello/hello.resolver';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    // Load environment variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Register JWT with dynamic secret using ConfigService
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const secret = config.get<string>('JWT_SECRET');
        if (!secret) {
          throw new Error('JWT_SECRET is missing in .env file');
        }

        return {
          secret,
          signOptions: { expiresIn: '1h' },
        };
      },
    }),

    // GraphQL setup with code-first approach
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    // MongoDB connection
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),

    // App modules
    UserModule,
  ],
  providers: [HelloResolver, JwtStrategy],
})
export class AppModule {}
