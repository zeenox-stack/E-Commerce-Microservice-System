# 📦 Order Service Microservice

Welcome to the **Order Service** microservice! This service is responsible for handling orders and interacting with a product catalog to retrieve product information. This service is built as a practice exercise to demonstrate my understanding of Node.js, Express.js, and microservices architecture.

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
   cd order-service
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## 📜 API Endpoints

### 🎯 GET /orders

- **Description:** Retrieve all orders stored in cookies.
- **Response:**
  - 200: Returns a JSON array of orders.
  - 500: Error message if retrieval fails.

### ➕ POST /orders/add

- **Description:** Add a new order by providing product IDs.
- **Request Body:**
  - `productIds`: Array of product IDs to be ordered.
- **Response:**
  - 201: Success message upon successful order creation.
  - 500: Error message if order creation fails.

---

## ⚙️ Configuration

- **Port:** The service runs on port `5001`.
- **CORS:** Configured to accept requests from `http://localhost:3000`.

---

## 🛠️ Development

To start the application in development mode, use:

```bash
npm start
```

The service will be available at `http://localhost:5001`.

---

## 📝 License

This project is licensed under the MIT License.

---