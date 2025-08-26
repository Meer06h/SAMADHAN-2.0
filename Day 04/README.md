# SAMADHAN 2.0/Day 04 - Node.js Intro

## What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side.

## Project Overview
This project demonstrates:
- Creating a basic Node.js HTTP server
- Setting up API endpoints
- Serving static files (HTML, CSS)
- Frontend-backend integration

## Files Structure

### 1. **server.js** - Node.js Server
```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, World!' }));
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

### 2. **index.html** - Frontend
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 4 - Node.js</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="box">
    <h1>Day 4 - Node.js</h1>
    <button onclick="getMsg()">Get Msg</button>
    <p id="out"></p>
  </div>

  <script>
    function getMsg() {
      fetch('/api')
        .then(res => res.json())
        .then(data => {
          document.getElementById('out').innerText = data.message;
        });
    }
  </script>
</body>
</html>
```

### 3. **style.css** - Styling
```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #74ebd5, #9face6);
  font-family: sans-serif;
}

.box {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #6c63ff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background: #4e4acb;
}

#out {
  margin-top: 15px;
  font-weight: bold;
}
```

## How to Run

### Prerequisites
- Node.js installed on your system

### Steps
1. **Open terminal/command prompt**
2. **Navigate to project directory**
   ```bash
   cd "C:\Users\Mehar\Desktop\SAMADHAN 2.0"
   ```

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
