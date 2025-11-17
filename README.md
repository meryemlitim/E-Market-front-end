🛒 E-Market Frontend – ReactJS Authentication & Product Listing

A modern and responsive ReactJS frontend for the E-Market platform.
This project connects to the backend API built in Sprint 2 and provides real authentication, product browsing, and a clean UI based on a Figma design.

📸 Screenshots / Figma

Figma Design : https://www.figma.com/design/vc4df97Iopo1lt8PU6AUyZ/Untitled?node-id=0-1&t=6wyEpIAAVIm6lNeh-1

🚀 Features
🔐 Authentication

Register (POST /users)

Login with JWT (POST /auth/login)

Persist token in localStorage

Protected routes using an AuthContext

Logout + session cleanup

🛍 Products

Fetch products from API

Product listing page

Product details page

🎨 UI/UX

Responsive design

Components:

Product Card

Header & Footer

Login/Register form

Loader & Error UI

Built from your Figma mockup

🏗 Tech Stack
Domain	Tools
Framework	React 18 + Vite
Routing	React Router v6
HTTP Client	Axios
State / Auth	Context API + custom hooks
Styling	TailwindCSS (or your styling choice)
Design	Figma
Version Control	Git + GitHub
📁 Project Structure
src/
├── components/
├── pages/
├── services/
├── context/
├── assets/
├── App.jsx
└── main.jsx

⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/<your-username>/emarket-frontend.git
cd emarket-frontend

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file
VITE_API_URL=http://localhost:5000/api/v1


Or copy the example:

cp .env.example .env

4️⃣ Run the app
npm run dev

🌐 Environment Variables
Variable	Description
VITE_API_URL	Base URL of the backend API

Example:

VITE_API_URL=http://localhost:5000/api/v1

🔌 API Endpoints Used
Auth

POST /users – Register

POST /auth/login – Login (returns JWT)

GET /users/me – Get logged-in user

Products

GET /products – List all products

GET /products/:id – Get product details

🛣 Available Routes
Route	Page	Description
/	Home	Product listing
/products/:id	Product Details	Detailed product view
/login	Login	JWT authentication
/register	Register	Create new account
/logout	Logout	Clear session & redirect


👩‍💻 Author

Meryem Litim
