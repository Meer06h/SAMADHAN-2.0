# Express.js Students API

This is a simple Express.js API that returns a list of students and allows you to add new students.

## Features

- **GET /students**: Returns a JSON list of students.
- **POST /students**: Adds a new student (send `{ "name": "StudentName" }` in the request body).

## Setup

1. **Install dependencies**  
   Open terminal in the project folder and run:
   ```
   npm install
   ```

2. **Run the server**  
   ```
   node meer/app.js
   ```

3. **API Endpoints**
   - **GET** `http://localhost:3000/students`
   - **POST** `http://localhost:3000/students`  
     Body example:
     ```json
     {
       "name": "New Student"
     }
     ```

## Requirements

- Node.js v18 or higher

## Example Response

```json
[
  { "id": 1, "name": "Meer" },
  { "id": 2,