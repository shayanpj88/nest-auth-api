import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { RegisterUserInput } from './dto/register-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login-response';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Adjust path if needed

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async register(@Args('input') input: RegisterUserInput): Promise<User> {
    return this.userService.register(input);
  }

  @Mutation(() => LoginResponse)
  async login(@Args('input') input: LoginUserInput): Promise<LoginResponse> {
    return this.userService.login(input);
  }

  @Query(() => User, { nullable: true })
  @UseGuards(JwtAuthGuard)
  async me(@Context() context): Promise<User | null> {
    const userId = context.req.user?.userId;
    return this.userService.findById(userId);
  }
}
