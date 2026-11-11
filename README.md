
# REST API CRUD Application

A simple REST API application built using Node.js and Express.js to manage items through HTTP requests. This project demonstrates basic REST API development and CRUD operations.

## 🚀 Features

- Retrieve all items using GET requests.
- Add new items using POST requests.
- Delete existing items using DELETE requests.
- Handle JSON request and response data.
- Serve static frontend files using Express.
- Handle API routes using Express Router methods.

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- REST API
- JSON
- HTML and CSS (Frontend)

## 📂 Project Structure

```text
REST-API-CRUD/
│
├── server.js
├── index.html
├── package.json
└── README.md
```

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Retrieve all items |
| POST | /api/items | Add a new item |
| DELETE | /api/items/:id | Delete an item by ID |

## 💻 Installation and Setup

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd REST-API-CRUD
```

3. Install dependencies:

```bash
npm install express
```

4. Start the server:

```bash
node server.js
```

5. Open your browser:

```text
http://localhost:3000
```

## 🧪 API Testing

You can test the API endpoints using Postman.

Example POST request:

```json
{
  "name": "Java",
  "description": "Programming Language"
}
```

URL:
`http://localhost:3000/api/items`

## 🎯 Learning Outcomes

- Understanding REST API architecture.
- Working with HTTP methods.
- Creating backend routes using Express.js.
- Handling JSON data.
- Testing API endpoints using Postman.
- Understanding basic CRUD operations.

## 👩‍💻 Author

Dhanasri Aila

Computer Science and Engineering Undergraduate
