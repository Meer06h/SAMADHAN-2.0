# SAMADHAN 2.0/Day 04 - Node.js Intro

## What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side.

## Project Overview
This project demonstrates:
- Creating a basic Node.js HTTP server
- Setting up API endpoints
- Serving static files (HTML, CSS)
- Frontend-backend integration

## How to Run

- Node.js installed on your system

### Steps
1. **Open terminal/command prompt**
2. **Navigate to project directory**
3. **Start the server**
   ```bash
   node server.js
   ```
   4. **Open your browser**
   - Go to: `http://localhost:3000`
   - You should see a beautiful page with a "Get Msg" button

5. **Test the API**
   - Click the "Get Msg" button
   - It should display "Hello, World!"

## API Endpoints

### GET `/api`
- **Response**: `{"message": "Hello, World!"}`
- **Content-Type**: `application/json`
- **Description**: Returns a simple JSON message

## Features
- ✅ **Simple Node.js HTTP server**
- ✅ **API endpoint returning JSON**
- ✅ **Static file serving (HTML, CSS)**
- ✅ **Beautiful UI with gradient background**
- ✅ **Frontend-backend integration**
- ✅ **Click button to fetch from API**

## Learning Objectives Completed
- ✅ What is Node.js?
- ✅ Creating first Node server with http
- ✅ API returning "Hello, World!"
- ✅ Serving static files
- ✅ Frontend integration

## Troubleshooting

### Port 3000 already in use
If you get "address already in use" error:
```bash
taskkill /f /im node.exe
```
Then run `node server.js` again.

### Files not loading
Make sure all 3 files are in the same directory:
- `server.js`
- `index.html`
- `style.css`

## Project Structure
```
SAMADHAN 2.0/Day 04
├── server.js       # Node.js HTTP server
├── index.html      # Frontend with API integration
├── style.css       # Styling for the frontend
└── README.md       # This file
```

---
**Created for Node.js Intro - Day 4**
