# 📦 User Service Microservice

Welcome to the **User Service** microservice! This service is responsible for managing user information and authentication. It is built as a practice exercise to demonstrate my understanding of Node.js, Express.js, and microservices architecture.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd user-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## 📜 API Endpoints

### 🎯 GET /users

- **Description:** Retrieve all users.
- **Response:**
  - 200: Returns a JSON array of users.
  - 500: Error message if retrieval fails.

### ➕ POST /users

- **Description:** Add a new user by providing name and email.
- **Request Body:**
  - `name`: Name of the user.
  - `email`: Email address of the user.
- **Response:**
  - 201: Success message upon successful user creation.
  - 404: Error message if name or email is missing.
  - 500: Error message if user creation fails.

---

## ⚙️ Configuration

- **Port:** The service runs on port `5000`.

---

## 🛠️ Development

To start the application in development mode, use:

```bash
npm start
```

The service will be available at `http://localhost:5000`.

---

## 📝 License

This project is licensed under the ISC License.

---

