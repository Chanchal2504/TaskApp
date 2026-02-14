📝 Task Manager Application

A full-stack Task Management application built with:

Backend: Java 17, Spring Boot, Spring Security, JWT, JPA, PostgreSQL
Frontend: React, Axios, React Router
Authentication: JWT-based authentication
Database: PostgreSQL

🚀 Features

User Registration
User Login (JWT Authentication)
Create Tasks
View Only Your Tasks
Delete Tasks
Secure API Endpoints

Responsive UI

📦 Project Structure
TaskApp/
 ├── TaskApp/ (Spring Boot)
 └── taskapp-frontend/ (React)

⚙️ Backend Setup (Spring Boot)
1️⃣ Prerequisites

Make sure you have installed:
Java 17+
Maven
PostgreSQL

2️⃣ Database Setup (PostgreSQL)

Create a database:

CREATE DATABASE TaskDB;

SET Environment Variables(Run in terminal, Only valid for current terminal[new Terminal,again env variables])
$env:DB_USERNAME="your_db_username_here" \n
$env:DB_PASSWORD="your_db_password_here" \n
$env:JWT_SECRET_KEY="your_jwt_key_here" \n
$env:DB_URL="jdbc:postgresql://localhost:5432/TaskDB"

4️⃣ Run Backend

From TaskApp (springBoot) root folder:

mvn clean install
mvn spring-boot:run


Backend will start at:

http://localhost:8080

🔐 Authentication Flow

Register user
Login → Receive JWT token
Token stored in browser localStorage
All protected endpoints require:
Authorization: Bearer <token>

🌐 Frontend Setup (React)
1️⃣ Install Dependencies

Inside taskapp-frontend folder:

npm install

2️⃣ Start Frontend
npm run dev

App runs at:

http://localhost:5173


🔒 Security Architecture

JWT stored in localStorage
Token validated via filter
Tasks linked to logged-in user
Users can only access their own tasks
Delete restricted to task owner

📌 API Endpoints
🔑 Auth
Method	Endpoint	Description
POST	/api/v1/auth/register	Register new user
POST	/api/v1/auth/login	Login user
📋 Tasks (Protected)
Method	Endpoint	Description
GET	/api/v1/tasks	Get user tasks
POST	/api/v1/tasks	Create task
DELETE	/api/v1/tasks/{id}	Delete task

🏁 Final Run Order

Start PostgreSQL
Run backend
Run frontend
Register user
Login
Manage tasks

📚 Technologies Used
Backend:
Spring Boot
Spring Security
JWT
JPA / Hibernate
PostgreSQL

Frontend:
React
Axios
React Router
Context API

👨‍💻 Author

Task Manager Full-Stack Project
Built for learning and practice.
