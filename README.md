# CraftCV 🚀

CraftCV is a premium, AI-powered Resume Builder and Enhancer designed to help job seekers create, optimize, and export modern professional resumes. Powered by Google Gemini AI, CraftCV offers real-time content suggestions, resume parsing, and beautiful customizable templates.

---

## ✨ Features

- **AI-Powered Resume Optimization**: Automatically enhance your professional summary, experience bullet points, and skills with Google Gemini AI.
- **Smart PDF Text Extraction**: Import text directly from your existing resume PDF.
- **Customizable Templates**: Choose from beautiful, professionally designed templates.
- **Color Customization**: Instantly personalize template accents using an interactive color picker.
- **Real-Time Preview**: Edit fields and watch your resume update instantly side-by-side.
- **Secure Authentication**: Built-in login and sign-up with encrypted user credentials and JWT-based session security.
- **Cloud Media Uploads**: Fast and secure image handling via ImageKit integration.
- **PDF Generation & Export**: Generate clean, ready-to-print resumes.

---

## 🛠️ Tech Stack

### Client (Frontend)
- **Framework**: React 19 + Vite
- **State Management**: Redux Toolkit & React-Redux
- **Styling**: Tailwind CSS v4.0
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Toast Notifications**: React Hot Toast

### Server (Backend)
- **Runtime**: Node.js & Express
- **Database**: MongoDB (via Mongoose)
- **AI API**: Google Gemini (via OpenAI Node compatibility layer)
- **Image Management**: ImageKit NodeJS SDK
- **File Parsing**: PDF.js (`pdfjs-dist`) & Multer

---

## ⚙️ Getting Started

Follow the instructions below to set up CraftCV locally on your system.

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB database (local or MongoDB Atlas cluster)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/45NitinVerma/CraftCV.git
   cd CraftCV
   ```

2. **Backend Setup**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file inside the `server` directory and configure the environment variables:
     ```env
     PORT=3000
     MONGODB_URI=your_mongodb_connection_uri
     JWT_SECRET=your_jwt_secret_key

     IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
     IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
     IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

     OPENAI_API_KEY=your_gemini_api_key
     OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
     OPENAI_MODEL=gemini-2.5-pro

     CORS_ORIGIN=http://localhost:5173
     ```
   - Start the backend server in development mode:
     ```bash
     npm run server
     ```

3. **Frontend Setup**
   - Open a new terminal and navigate to the `client` directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file inside the `client` directory and set the backend API endpoint:
     ```env
     VITE_BASE_URL=http://localhost:3000
     ```
   - Start the frontend dev server:
     ```bash
     npm run dev
     ```

---

## 📂 Project Structure

```
CraftCV/
├── client/                 # React frontend
│   ├── src/
│   │   ├── app/            # Redux store & features
│   │   ├── components/     # Reusable UI components & form sections
│   │   ├── configs/        # Axios configuration
│   │   ├── pages/          # App pages (Dashboard, Home, CraftCV editor)
│   │   └── main.jsx        # App entry point
│   ├── index.html          # HTML entry point
│   └── package.json
│
├── server/                 # Express backend
│   ├── config/             # DB and core configurations
│   ├── controllers/        # Request handling logic
│   ├── middlewares/        # Authentication & file upload middleware
│   ├── models/             # Mongoose schemas (User, Resume)
│   ├── routes/             # Express routes (AI, Resume, User)
│   ├── server.js           # Server entry point
│   └── package.json
└── README.md
```

---

## 📄 License
This project is licensed under the ISC License.
