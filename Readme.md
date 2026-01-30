 SDPL Week 1 — Prospects Toggle

This is a small full-stack practice project that connects a basic frontend to a Node.js backend without using any frameworks.

The idea is simple:
Click a button → fetch prospects from the server → show them on the page → hide them again.

---

Tech Used

  Frontend: HTML, CSS, Vanilla JavaScript
  Backend: Node.js using the built-in `http` module (no Express)
  Data Storage: Local JSON file (`prospects.json`)

---

 Project Structure

```
sdpl-week1-prospects/
  backend/
    server.js
    prospects.json
    package.json
  frontend/
    index.html
    app.js
    styles.css
  README.md
```

 What each folder does

  backend/  → Runs the Node server and provides API data
  frontend/  → Contains browser files (UI and JavaScript logic)
  prospects.json  → Works like a small local database
  server.js  → Handles API requests and sends responses
  app.js  → Handles button clicks and fetch requests

---

 How to Run the Project

 Step 1 — Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm start
```

You should see:

```
Server running at http://localhost:5000
```

To test the API directly, open this in your browser:

```
http://localhost:5000/api/prospects
```

You should see JSON data.

---

 Step 2 — Start the Frontend

1. Open the project folder in  VS Code 
2. Go to the `frontend` folder
3. Right-click on `index.html`
4. Choose  "Open with Live Server" 

Your browser will open something like:

```
http://127.0.0.1:5500/frontend/index.html
```

---

 What You Should Test

 Normal Working Flow

 The page loads with a  "Show prospects"  button
 Click  Show prospects 

   Button text changes to  Loading... 
   A list of prospects appears
   A title appears above the list
   Button text changes to  Hide prospects 
 Click  Hide prospects 

   The list disappears
   The title hides
   Button text goes back to  Show prospects 

---

 Error Handling Test

 Stop the backend server
 Click  Show prospects 
 You should see this message:

> "Could not load prospects. Please try again later."

---

 API Endpoint

 GET `/api/prospects`

This endpoint returns a list of prospects from `prospects.json`.

Example response:

```json
[
  {
    "firstName": "Ana",
    "lastName": "Ionescu",
    "email": "ana@example.com",
    "phone": "+40 700 000 001",
    "address": "Bucharest"
  }
]
```

---

 Common Problems and Fixes

 CORS Error in Browser

If you see  “Blocked by CORS policy” , your server is missing CORS headers.

Make sure `server.js` includes:

```js
res.setHeader('Access-Control-Allow-Origin', '');
res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```

Also make sure `OPTIONS` requests return status  204 .

---

 “Failed to fetch”

Usually means the backend is not running.

Fix:

```bash
cd backend
npm start
```

Confirm it is running on port  5000 .

---

 404 Not Found

This means the frontend is calling the wrong URL.

In `app.js`, make sure you have:

```js
fetch('http://localhost:5000/api/prospects')
```

---

 JSON Parse Error

Your `prospects.json` file may be invalid.

Check that:

 It starts with `[` and ends with `]`
 There are no trailing commas
 The format is valid JSON (use an online validator if needed)

---

 What This Project Demonstrates

By completing this project, you practiced:

 How a frontend talks to a backend
 Making API calls using `fetch()`
 Handling loading, success, and error states in UI
 Creating a basic Node.js HTTP server
 Reading data from a file and returning it as JSON

---

 Week 1 Homework Completed ✅ 
