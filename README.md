# Ticket Master App

## About the App

This Ticket Management App is a user-friendly platform designed to handle and display 'tickets' or tasks in an organized manner. Built using Next.js, it leverages the power of React for the frontend, providing an interactive and responsive user interface. The backend is powered by `json-server`, offering a simple yet effective way to simulate a RESTful API for managing ticket data.

## Key Features

- **View Tickets**: Displays all the open tickets in a card format.
- **Create Tickets**: Allows users to create new tickets.
- **Delete Tickets**: Users can delete tickets as needed.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/rithvikgrandhi/NEXTJS-Ticket-Master/]
   cd NEXTJS-Ticket-Master
   ```

2. **Install dependencies:**

   Inside the project directory, run:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Next.js App:**

   To start the Next.js server, run:

   ```bash
   npm run dev
   # or
   npm start
   ```

   This will start the Next.js development server on [http://localhost:3000](http://localhost:3000). Navigate to this URL in your browser to view the app.

2. **Start the JSON Server:**

   Open a new terminal window and run:

   ```bash
   json-server --watch --port 4000 ./_data/db.json
   ```

   This will start the JSON server, which the Next.js app will use as a backend.

## Additional Information

- For production deployment steps, please refer to the Next.js deployment documentation.
- Ensure both the Next.js app and `json-server` are running simultaneously for the app to function properly.

---
