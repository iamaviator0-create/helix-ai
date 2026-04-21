# Helix AI - Full-Stack AI Application

Helix AI is a modern full-stack application featuring the custom Helix-AI-23M model with a responsive React frontend and Express.js backend.

## Features
- 🤖 Custom AI Model Integration (Helix-AI-23M)
- 💬 Real-time Chat Interface with Smooth Animations
- 🎨 Material-UI Design System
- 📱 Fully Responsive (Mobile & Desktop)
- 🚀 FastAPI/Flask Model Server
- 🔧 Easy Configuration & Deployment

## Project Structure
```
helix-ai/
├── backend/           # Express.js API Server
├── frontend/          # React Application
├── model/             # Python Model Integration
└── docs/              # Documentation
```

## Quick Start

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Model Server Setup
```bash
cd model
pip install -r requirements.txt
python run_helix.py
```

## API Endpoints
- `POST /query` - Query the AI model
- `POST /train` - Train the model
- `GET /status` - Check server status

## Technology Stack
- **Backend**: Node.js, Express.js
- **Frontend**: React, Material-UI, Axios
- **AI Model**: PyTorch, Hugging Face Transformers
- **Server**: Flask/FastAPI

## Environment Variables
See `.env.example` for required environment variables.

## License
MIT