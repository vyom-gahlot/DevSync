# DevSync v1 — Real-Time Code Collaboration Platform

DevSync is a real-time collaborative coding platform that enables multiple users to join a shared room and edit code simultaneously, with instant synchronization powered by WebSockets.

---

## Features

### Authentication

* Secure login and signup system
* JWT-based authentication and authorization
* Protected routes (frontend and backend)
* Token validation for socket connections

### Real-Time Collaboration

* Live multi-user code editing
* Room-based collaboration (create and join rooms)
* User presence tracking (join and leave events)
* Conflict handling via real-time synchronization

### Communication

* Real-time chat inside rooms
* Socket-based message broadcasting
* Room-specific messaging

### Code Editor

* Monaco Editor integration (VS Code-like experience)
* Syntax highlighting
* Smooth editing experience

### Performance

* Low-latency communication using WebSockets
* Event-driven architecture
* Fast and responsive UI

---

## Tech Stack

### Frontend

* React
* Monaco Editor
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication

### Database

* MongoDB

---

## Project Structure

```
devsync/
│
├── client/        # React frontend
├── server/        # Backend (Express + Socket.IO)
├── socket/        # Socket handlers
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/vyom-gahlot/DevSync
cd devsync
```

---

### 2. Setup Backend

```
cd server
npm install
```

Create a `.env` file:

```
PORT=3000
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3. Setup Frontend

```
cd client
npm install
```

Create a `.env` file:

```
VITE_BACKEND_URL=http://localhost:3000
```

Run frontend:

```
npm run dev
```

---

## Socket Events

### Client → Server

* `join-room`
* `code-change`
* `send-message`

### Server → Client

* `receive-code`
* `receive-message`
* `user-joined`
* `user-left`

---

## Deployment

### Frontend

* Vercel

### Backend

* Render or Railway

### Important Notes

* Replace all `localhost` URLs with deployed backend URL
* Configure CORS properly
* Store JWT secrets securely using environment variables
* Ensure authentication works across domains

---

## Known Limitations (v1)

* No code persistence across sessions
* Limited autocomplete (no language server integration)
* Not horizontally scalable (single server Socket.IO)

---

## Author

Built by Vyom Pratap Singh Gahlot
