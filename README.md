## **BFHL Dev Challenge - Full Stack Application**

This project is a full-stack application developed as part of the **Bajaj Finserv Health Dev Challenge (Qualifier 1)**. The application includes both a **backend** REST API and a **frontend** interface, fulfilling the requirements outlined in the challenge.

### **Table of Contents**
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Frontend Features](#frontend-features)
- [Deployment](#deployment)
- [License](#license)

---

## **Project Overview**

This project consists of:
- A **REST API** (Node.js + Express) that accepts JSON requests, processes the input, and returns structured data such as numbers, alphabets, the highest lowercase alphabet, and file details.
- A **frontend application** (React.js) that accepts user input in JSON format, interacts with the backend, and displays the response based on the user’s selection.

---

## **Technologies Used**

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Axios
- **Deployment**: Heroku (Backend), Netlify/Vercel (Frontend)

---

## **Backend Setup**

### **Prerequisites**
- **Node.js** (>=14.x)
- **NPM** (Node Package Manager)

### **Steps to Set Up the Backend**:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bfhl-dev-challenge.git
   cd bfhl-dev-challenge/backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the backend server locally:
   ```bash
   npm start
   ```

4. By default, the backend will be running at `http://localhost:3000`.

### **Backend API Endpoints**

- **POST** `/bfhl`: Accepts a JSON object with an array of data (numbers and alphabets) and an optional base64-encoded file string.
  - **Request Example**:
    ```json
    {
      "data": ["A", "1", "334", "b", "C", "2", "z"],
      "file_b64": "BASE64_STRING_HERE"
    }
    ```
  - **Response Example**:
    ```json
    {
      "is_success": true,
      "user_id": "john_doe_17091999",
      "email": "john@xyz.com",
      "roll_number": "ABCD123",
      "numbers": ["1", "334", "2"],
      "alphabets": ["A", "b", "C", "z"],
      "highest_lowercase_alphabet": ["z"],
      "file_valid": true,
      "file_mime_type": "image/png",
      "file_size_kb": "400"
    }
    ```

- **GET** `/bfhl`: Returns a hardcoded operation code.
  - **Response Example**:
    ```json
    {
      "operation_code": 1
    }
    ```

---

## **Frontend Setup**

### **Prerequisites**
- **Node.js** (>=14.x)
- **NPM** (Node Package Manager)

### **Steps to Set Up the Frontend**:

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

4. By default, the frontend will be running at `http://localhost:3000`.

### **Frontend Features**

- A **text input field** that accepts JSON input.
- A **submit button** that triggers a POST request to the backend.
- A **dropdown menu** that allows users to select which part of the response they want to display (numbers, alphabets, highest lowercase alphabet).
- The response is rendered based on the selected options from the dropdown.

---

## **Deployment**

### **Backend Deployment**:

1. Deploy the backend to a platform such as **Heroku**, **Vercel**, or **Firebase**.
2. Make sure to update the API base URL in the frontend app to the deployed backend URL.

### **Frontend Deployment**:

1. Deploy the frontend to platforms like **Netlify** or **Vercel**.
2. Update the backend API URL in the frontend code to point to the deployed backend.

---

## **Example Requests & Responses**

### **Example POST Request**:
```json
{
  "data": ["M", "1", "334", "4", "B", "Z", "a"],
  "file_b64": "BASE64_STRING_HERE"
}
```

### **Example POST Response**:
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "numbers": ["1", "334", "4"],
  "alphabets": ["M", "B", "Z", "a"],
  "highest_lowercase_alphabet": ["a"],
  "file_valid": true,
  "file_mime_type": "image/png",
  "file_size_kb": "400"
}
```

### **Example GET Request**:
- URL: `/bfhl`
- Response:
  ```json
  {
    "operation_code": 1
  }
  ```

---

## **License**

This project is open-sourced and available under the [MIT License](LICENSE).

---
