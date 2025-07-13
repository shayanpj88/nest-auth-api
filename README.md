Great! Here's a clean and professional `README.md` tailored for your **NestJS + GraphQL + MongoDB Auth API project**, including Docker and CI/CD setup:

---

### ✅ `README.md`

````md
# 🛡️ NestJS Auth GraphQL API

A secure, modern authentication API built with **NestJS**, **GraphQL**, **MongoDB**, and **JWT** — structured for scalability and enhanced with **Docker** and **GitHub Actions CI/CD**.

---

## 📦 Tech Stack

- **NestJS** – Modular Node.js framework
- **GraphQL (Code-first)** – Flexible API querying
- **MongoDB (via Mongoose)** – NoSQL database
- **JWT** – Stateless authentication
- **Docker** – Containerized deployment
- **GitHub Actions** – CI/CD automation

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shayanpj88/nest-auth-api.git
cd nest-auth-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/auth-db?retryWrites=true&w=majority
JWT_SECRET=your-strong-jwt-secret
```

---

## ⚙️ Scripts

| Command              | Description               |
| -------------------- | ------------------------- |
| `npm run start`      | Start in development mode |
| `npm run build`      | Compile TypeScript        |
| `npm run start:prod` | Run production build      |
| `npm run lint`       | Run ESLint                |

---

## 🧪 GraphQL Playground

Visit [http://localhost:3000/graphql](http://localhost:3000/graphql) to interact with the API.

### Example Queries

```graphql
mutation Register {
  register(input: {
    email: "test@example.com",
    password: "test123"
  }) {
    _id
    email
  }
}

mutation Login {
  login(input: {
    email: "test@example.com",
    password: "test123"
  }) {
    access_token
  }
}

query Me {
  me {
    _id
    email
  }
}
```

Include JWT as a bearer token:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

---

## 🐳 Docker

Build and run the app in Docker:

```bash
docker compose up --build
```

Update `docker-compose.yml` and `Dockerfile` for custom port/env.

---

## 🔁 CI/CD (GitHub Actions)

This repo includes a basic GitHub Actions pipeline:

* Runs `npm ci`, build
* Validates GraphQL schema
* Optional: Add tests/lint steps

Check `.github/workflows/deploy.yml`.

---

## 🧱 Project Structure

```
src/
├── user/
│   ├── dto/
│   ├── schemas/
│   ├── user.module.ts
│   ├── user.resolver.ts
│   └── user.service.ts
├── hello/                # Example resolver
├── app.module.ts
└── main.ts
```

---

## 📌 Roadmap

* [x] Register & login with JWT
* [x] Auth guard (GraphQL context)
* [x] Docker support
* [x] CI/CD (GitHub Actions)
* [ ] Refresh token support
* [ ] Role-based access control (RBAC)

---

## 🧑‍💻 Author

**Shayan Panjeh Alizadeh**
🔗 [shayanpj.ir](https://shayanpj.ir)

---

## 🛡 License

[MIT](LICENSE)

```

---

