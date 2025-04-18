Bookkeeping Service
Overview
This repository contains the code for a Bookkeeping Service API. The application allows users to manage books, libraries, and user details with specific roles, such as authors and borrowers. The system is designed to track which user (author or borrower) owns, writes, or borrows a book, and which library holds it.

Models
Books: A book is associated with an author (a user) and a library. It can also be borrowed by a borrower (another user).

Users: There are two types of users:

Author: A user who writes books.

Borrower: A user who borrows books from libraries.

Libraries: A library holds books and allows borrowers to borrow them.

Features
User management: You can create and manage authors and borrowers.

Book management: Books can be added, linked to authors, and borrowed by borrowers.

Library management: Libraries hold books and manage their availability.

Setup Instructions
Follow these instructions to set up the project on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (version 14 or above)

npm or yarn

MongoDB (or use a cloud instance like MongoDB Atlas)

Install Dependencies
bash
Copy
Edit
# Clone the repository
git clone https://github.com/6394981696/bookkeeping.git

# Navigate to the project folder
cd bookkeeping

# Install the required dependencies
npm install
Environment Configuration
Create a .env file in the root directory and add the following environment variables:

bash
Copy
Edit
MONGO_URI=your-mongo-db-uri
PORT=5000
Replace your-mongo-db-uri with the actual URI of your MongoDB database (for local or cloud MongoDB instance).

Running the Application Locally
Once you've set up the environment variables, run the application using the following command:

bash
Copy
Edit
# Start the server
npm start
The application should now be running locally at http://localhost:5000.

API Endpoints
Here are the API endpoints for interacting with the application:

POST /api/users: Create a new user (Author or Borrower)

GET /api/users: List all users

GET /api/books: List all books

POST /api/books: Add a new book

GET /api/libraries: List all libraries

POST /api/libraries: Add a new library

POST /api/borrow: Borrow a book

POST /api/return: Return a borrowed book

Postman Collection
To interact with the API, you can import the following Postman collection:

Postman Collection Import URL: [Insert your Postman collection import URL here]

Hosted Application
The application is deployed on Vercel. You can interact with the API at the following endpoint:

API Base URL: https://bookkeeping-one.vercel.app/api/

Additional Instructions
If you face any issues or need further assistance, feel free to open an issue in this repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.

