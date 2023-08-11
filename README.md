# Microservices Architecture with NestJS, RabbitMQ, and JWT Authentication

This project demonstrates a microservices architecture using NestJS, RabbitMQ, and JWT authentication. It consists of multiple microservices (Auth, Billing, Orders) interacting through RabbitMQ queues, allowing for scalable and decoupled communication.

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture Overview](#architecture-overview)
3. [Installation and Setup](#installation-and-setup)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [Authentication and Authorization](#authentication-and-authorization)
8. [Microservice Communication](#microservice-communication)
9. [Usage Examples](#usage-examples)
10. [Development and Debugging](#development-and-debugging)
11. [Flow of Operations](#flow-of-operations)
12. [Conclusion](#conclusion)

## 1. Introduction

This repository showcases the development and deployment of a microservices-based application using NestJS, RabbitMQ, and JWT authentication. The project emphasizes modularity, scalability, and secure communication between microservices.

## 2. Architecture Overview

- Three microservices (Auth, Billing, Orders)
- RabbitMQ for asynchronous inter-service communication
- Docker Compose for easy deployment and management

## 3. Installation and Setup

1. Clone the repository: `git clone https://github.com/yourusername/your-repo.git`
2. Install dependencies for each microservice: `npm install` (inside each microservice folder)
3. Configure environment variables in `.env` files

## 4. Project Structure

- `apps/auth`: Auth microservice
- `apps/billing`: Billing microservice
- `apps/orders`: Orders microservice
- `libs/common`: Common modules

## 5. Configuration

- Microservice-specific `.env` files for configuration
- `docker-compose.yml` for defining service orchestration

## 6. Running the Application

### Using Docker Compose

1. Open a terminal in the project directory.
2. Execute `docker-compose up` to start all services.

### Starting Microservices

1. Navigate to each microservice directory.
2. Run `npm run start:dev` to start the microservice in development mode.

## 7. Authentication and Authorization

- JWT tokens for user authentication
- `JwtAuthGuard` to validate tokens and protect routes

## 8. Microservice Communication

- RabbitMQ integration for asynchronous communication
- `RmqService` methods for sending and receiving messages

## 9. Usage Examples

### Creating an Order

1. Access the `createOrder` endpoint (protected by `JwtAuthGuard`)
2. JWT token extracted from cookies and passed to `OrdersService`

### Billing Microservice Interaction

- `OrdersService` interacts with `BILLING_SERVICE`
- `order_created` event emitted to trigger billing operations

## 10. Development and Debugging

- Debug container logs using `docker-compose logs <service-name>`
- Use the NestJS CLI to generate modules, services, and controllers

## 11. Flow of Operations

### Auth Microservice

1. Set up database, users module, RabbitMQ, JWT authentication.
2. Start Nest application, handle authentication and authorization.

### Billing Microservice

1. Create billing module with RabbitMQ integration.
2. Connect to RabbitMQ, start Nest application, handle billing operations.

### Orders Microservice

1. Set up orders module, define DTO for order creation.
2. Validate and handle order creation requests, emit `order_created` event to billing.

## 12. Conclusion

This project exemplifies a microservices architecture with NestJS, RabbitMQ, and JWT authentication. Developers can utilize this repository to understand, implement, and expand their own microservices-based applications.

For additional assistance or inquiries, refer to the project's documentation or reach out to the development team.
