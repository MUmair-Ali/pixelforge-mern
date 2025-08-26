PixelForge is a MERN Stack Web Application where I provide services related to Web Development, Application Development, UI/UX Design, and IT Solutions.
It is built with a modern and scalable architecture that includes authentication, validations, optimizations, and reusable components to deliver a production-ready experience.

🚀 Tech Stack
Frontend

React.js

React Router DOM for navigation

Lazy Loading & Suspense for optimization

Context API for global state management

Axios for API requests

Hooks: useEffect, useReducer, useState, useMemo, useCallback, React.memo

Component-based conditional rendering

Backend

Node.js + Express.js

Express Router for routes & endpoints

Middleware system

Error Middleware for consistent error handling

Validator Middleware with Zod for schema validation

JWT Authentication (stored in Local Storage)

Password encryption & verification using Bcrypt

Database

MongoDB with Mongoose

Schema-based structure

Efficient querying and data modeling

Validation & Security

Zod → Input validation (Email, Password, User Data)

JWT Tokens → Secure authentication flow

Bcrypt → Strong password hashing & verification

🔑 Features

📝 User Authentication (Sign Up / Login with JWT)

🔐 Secure Password Management (Bcrypt encryption & verification)

📦 Schema-based Models using Mongoose

✅ Data Validation with Zod & Validator Middleware

⚡ Optimized Frontend with Lazy Loading, Memoization, and Suspense

🎨 UI/UX Focused Design with modern React patterns

🌍 Reusable Component-Based Architecture

🔄 Global State Management using Context API

🛠 Error Handling Middleware for robust backend

⚙️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/pixelforge.git
cd pixelforge


Install dependencies for backend

cd backend
npm install


Install dependencies for frontend

cd frontend
npm install


Setup environment variables
Create .env file inside backend/ and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the backend

cd backend
npm run dev


Run the frontend

cd frontend
npm start

📡 API Endpoints
Auth Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login and get JWT token

User Routes

GET /api/user/profile → Get user profile (Protected)

PUT /api/user/update → Update profile (Protected)

🔮 Future Improvements

Add role-based access control (Admin/User)

Implement refresh tokens for extended authentication

Improve UI/UX with animations and transitions

Deploy on Netlify (Frontend) + Render/Heroku (Backend)

👨‍💻 Author

Muhammad Umair Ali

MERN Stack Developer | UI/UX Enthusiast

📧 Email: coolumi915@gmail.com

🌐 Portfolio: coming soon

💼 LinkedIn: to be added