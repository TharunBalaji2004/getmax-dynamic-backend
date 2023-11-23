# GetMax Management System - Backend

REST API for handling opertaions on GetMax Frontend management system

## Table of Contents 📄

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
  
## Tech Stack 🛠️

- **Express**: Web framework for Node.js.
- **Firebase**: Interact with Firebase services.
- **Multer**: Perform file buffer operations.
- **Prisma**: ORM to communicate with MySQL Database.
- **Cors**: Cross-Origin Resource Sharing middleware for Express.
- **Body-parser**: Middleware for parsing request bodies in Express.

## Project Structure 📁

```plaintext
my-express-app/
|-- src/
|  |-- routes/
|  |-- controllers/
|  |-- service/
|  |-- utils/
|  |-- server.js
|-- prisma/
|  |-- schema.prisma
|-- .env.example
|-- package.json
```

## Getting Started 🚀

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TharunBalaji2004/getmax-dynamic-backend.git
   cd getmax-dynamic-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Follow the Firebase documentation to set up your Firebase project and obtain configuration details.

4. **Env variables file**

   - Use the .env file from senior developer and import into project files

5. **Run the application:**

   ```bash
   npm run dev #For dev mode
   npm run start  #For production
   ```

   Open your browser and visit `http://localhost:3000` to view the app.

## Usage 🌐

Provide information on how to use your Express application. Include details about API endpoints, routes, and any other relevant usage instructions.

## Contributing

If you'd like to contribute, please fork the repository and create a new branch. Pull requests are welcome!

