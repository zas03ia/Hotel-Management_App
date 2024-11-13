
# Hotel Management App

This is a simple hotel management application built using **Node.js** and **TypeScript**. It provides an API to manage hotels, including creating, updating, and retrieving hotel data, as well as handling image uploads.

## Features
- Create, read, and update hotel information
- Upload and manage hotel images
- Handle hotel metadata such as rooms, amenities, host information, and more

## Technologies Used
- **Express** for building the API
- **TypeScript** for static typing and development
- **Jest** for testing
- **Multer** for handling file uploads

## Prerequisites
Ensure that the following tools are installed on your system:
- **Node.js** (version 14 or above)
- **npm** (Node package manager)
- **TypeScript**

## Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/hotel-management-app.git](https://github.com/zas03ia/Hotel-Management_App.git
cd hotel-management-app
```

### 2. Install Dependencies
Install the project dependencies using npm:

```bash
npm install
```

### 3. Running the Application

#### Development Mode
To start the server in development mode with hot reloading, use the following command:

```bash
npm run dev
```

This will use **Nodemon** to watch for file changes and automatically restart the server.

#### Production Mode
To build and run the application in production mode:

1. Build the TypeScript files:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

The server will be running on `http://localhost:3000` by default.

### 5. Running Tests

To run the tests using **Jest**, use the following command:

```bash
npm test
```

This will execute the test cases in the `tests` directory.

### 6. File Uploads

The app allows uploading images using the `POST /images` endpoint. Images should be sent in a `multipart/form-data` format with the field name `images`. The request body should also contain a `hotelId`.

For example, to upload images, use the following endpoint:

```
POST /images
```

### 7. API Endpoints

Here are the main API endpoints available:

#### Create a Hotel

```http
POST /hotel
```

Body (JSON):
```json
{
  "title": "Hotel Name",
  "description": "Hotel description",
  "rooms": [],
  "guestCount": 100,
  "bedroomCount": 50,
  "bathroomCount": 25,
  "amenities": ["Wi-Fi", "Pool", "Spa"],
  "hostInformation": "Host details",
  "address": "Hotel address",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

#### Get Hotel by ID

```http
GET /hotel/:id
```

#### Update Hotel

```http
PUT /hotel/:id
```

Body (JSON):  
Update hotel information (optional fields).

#### Upload Images

```http
POST /images
```

### 8. File Structure

- `src/`: Source code for the application
- `controllers/`: Contains controller files for handling requests
- `middlewares/`: Contains middleware for file uploads and others
- `models/`: Contains model files (e.g., Hotel model)
- `services/`: Contains logic for services such as image uploads
- `tests/`: Unit tests for the application
- `utils/`: Utility functions like file handling and slug generation

