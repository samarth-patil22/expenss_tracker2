

# Expense Tracker

An **Expense Tracker** application built with the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to add, track, and categorize their expenses to better manage their finances.

---

## Features

* **Add New Expense:** Add details like name, amount, and category of an expense.
* **View Expenses:** View all added expenses in a list format.
* **Categories:** Categorize expenses for better tracking (e.g., food, transportation, entertainment).

---

## Technologies Used

* **Frontend:**

  * React
  * React Router (for page navigation)
  * Axios (for making API calls)

* **Backend:**

  * Node.js
  * Express.js

* **Database:**

  * MongoDB

* **Other:**

  * Mongoose (for MongoDB data modeling)
  * CORS (for handling cross-origin requests)

---

## Installation

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. You can check if they are installed using the following commands:

```
node -v
npm -v
```

### Clone the repository

First, clone the repository to your local machine:

```
git clone https://github.com/samarth-patil22/expense-tracker.git
cd expense-tracker
```

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root of the backend folder and add your MongoDB connection string:

   ```
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the backend server:

   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the frontend server:

   ```
   npm start
   ```

The app should now be accessible in your browser at `http://localhost:3000`.

---

## Usage

* **Add Expense:** Fill in the form with the **Name**, **Amount**, and **Category** of the expense.
* **View Expenses:** Once added, expenses will be displayed in a list format.
* **Filter by Category:** View expenses filtered by different categories such as **Food**, **Transport**, **Entertainment**, etc.

---

## Screenshots

![image](https://github.com/user-attachments/assets/8dbc422c-17c4-4729-9a35-c09bbb3c922d)

![image](https://github.com/user-attachments/assets/b68f5430-d2c3-486a-9bbc-37dd8aa22153)



---

## Contributing

We welcome contributions! Here's how you can get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

* **MERN Stack** for enabling full-stack JavaScript development.
* **MongoDB** for providing a flexible and scalable database.
* **Express.js** and **Node.js** for building the backend REST API.
* **React** for making dynamic, component-based frontend development easy.

---

