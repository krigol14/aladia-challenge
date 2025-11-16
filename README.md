# Aladia Challenge API

A NestJS microservices application demonstrating user authentication with JWT tokens, featuring a gateway service and authentication microservice architecture.

## Features

- **Microservices Architecture**: Gateway (HTTP) and Authentication (TCP) services
- **JWT Authentication**: Secure token-based authentication
- **Password Security**: Bcrypt hashing with salt rounds
- **RESTful API**: HTTP endpoints for user management
- **API Documentation**: Swagger/OpenAPI integration
- **Structured Logging**: Pino logger for production-ready logging
- **Input Validation**: Class-validator for request validation
- **Type Safety**: Full TypeScript implementation
- **Monorepo**: NPM workspaces for code organization

## Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), Passport.js
- **Logging**: Pino
- **API Documentation**: Swagger/OpenAPI
- **Language**: TypeScript
- **Containerization**: Docker (MongoDB)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker and Docker Compose (for MongoDB)

## Project Structure

```
aladia-challenge/
├── apps/
│   ├── gateway/              # HTTP REST API service (port 3000)
│   └── authentication/       # TCP microservice (port 3001)
├── common/                   # Shared DTOs, interfaces, constants
├── config/                   # Centralized configuration
├── package.json              # Root package with workspaces
└── docker-compose.yml        # MongoDB container configuration
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd aladia-challenge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

```bash
docker compose up -d
```

### 4. Build libraries

```bash
npm run build:libs
```

### 5. Start the services

**Terminal 1 - Authentication Service:**
```bash
npm run start:authentication:dev
```

**Terminal 2 - Gateway Service:**
```bash
npm run start:gateway:dev
```

The Gateway will be available at `http://localhost:3000`
Swagger documentation at `http://localhost:3000/api`

## API Endpoints

### Authentication

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe",
  "password": "password123"
}
```

**Response:** `201 Created`
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Users (Protected)

#### Get All Users
```http
GET /auth/users
Authorization: Bearer <accessToken>
```

**Response:** `200 OK`
```json
[
  {
    "id": "user-id",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## Environment Variables

Create a `.env` file in the root directory (optional - defaults provided):

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/aladia-challenge
AUTHENTICATION_SERVICE_HOST=localhost
AUTHENTICATION_SERVICE_PORT=3001
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

## Architecture

The application follows a microservices architecture:

```
Client → Gateway (HTTP:3000) → Authentication Service (TCP:3001) → MongoDB
```

- **Gateway Service**: Handles HTTP requests, validates JWT tokens, forwards to Authentication service via TCP
- **Authentication Service**: Handles business logic, password hashing, JWT token generation, database operations
- **Communication**: TCP protocol for inter-service communication (faster than HTTP)
- **Database**: MongoDB for user data persistence

## Available Scripts

```bash
# Development
npm run start:gateway:dev          # Start gateway service
npm run start:authentication:dev   # Start authentication service

# Build
npm run build:libs                  # Build shared libraries
npm run build                       # Build all projects

# Code Quality
npm run lint                        # Run ESLint
npm run format                      # Format code with Prettier
```

## Testing

### Using Postman

Import the provided Postman collection (`Aladia_Challenge_API.postman_collection.json`) to test all endpoints.

### Using Swagger

Navigate to `http://localhost:3000/api` for interactive API documentation.

1. Click "Authorize" button
2. Enter JWT token from login response
3. Test protected endpoints directly

## Security Features

- **Password Hashing**: Bcrypt with 10 salt rounds
- **JWT Tokens**: Signed tokens with expiration
- **Input Validation**: Request validation using class-validator
- **Protected Routes**: JWT guard for authenticated endpoints
- **Password Exclusion**: Passwords excluded from API responses

## Documentation

- **API Documentation**: Available at `/api` endpoint (Swagger UI)
- **Architecture Details**: See `ARCHITECTURE_EXPLANATION.md` (if available)
- **Module Configuration**: See `NESTJS_MODULE_CONFIGURATION.md` (if available)

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK`: Successful request
- `201 Created`: Resource created successfully
- `400 Bad Request`: Validation error
- `401 Unauthorized`: Invalid credentials or missing token
- `409 Conflict`: Resource already exists (e.g., duplicate email)

## License

This project is part of a coding challenge.

## Author

Kristian Golemi

---

**Note**: Make sure MongoDB is running before starting the services. The Gateway service will attempt to connect to the Authentication service with retry logic, so order of startup doesn't matter.
