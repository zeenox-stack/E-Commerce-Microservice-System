# 🎉 E-commerce Microservices Project 🛍️
---
This project is a practice exercise to demonstrate my understanding of Node.js, Express.js, and microservices architecture 🤯. It consists of three microservices: User Service 👥, Product Service 📦, and Order Service 📝.

## 👥 User Service
---
This service is responsible for managing user information and authentication 🔒. It is built using Node.js and Express.js 🚀. The service has two API endpoints:

### API Endpoints

#### GET /users

Returns a list of all users stored in the service 📝.

#### POST /users

Adds a new user to the service 👥. The request body should contain the following fields:
- `name`: The name of the user 👋.
- `email`: The email address of the user 📧.

### Technologies Used

* Node.js
* Express.js

## 📦 Product Service
---
This service is responsible for managing product information 📝. It is built using Node.js and Express.js 🚀. The service has a single API endpoint:

### API Endpoints

#### GET /products

Returns a list of all products stored in the service 📝. The response will include the following fields for each product:
- `id`: The id of the product 🔢.
- `name`: The name of the product 📝.
- `price`: The price of the product 💸.
- `image`: The image url of the product 📷.
- `description`: The description of the product 📄.

### Technologies Used

* Node.js
* Express.js

## 📝 Order Service
---
This service is responsible for managing orders and interacting with a product catalog to retrieve product information 📦. It is built using Node.js and Express.js 🚀. The service has a single API endpoint:

### API Endpoints

#### POST /orders/add

Adds a new order to the service 🛍️. The request body should contain the following fields:
- `productIds`: An array of product ids to be ordered 🔢.

### Technologies Used

* Node.js
* Express.js

## License
---
This project is licensed under the MIT License 📝. See the [LICENSE](LICENSE) file for details.