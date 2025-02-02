# A number fun fact API

This is a simple Express.js API that returns a JSON response funfact about a number

## Features

- Uses `dotenv` to manage environment variables.
- Enables CORS for cross-origin requests.
- Serves a single route that returns a JSON response with metadata.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Bensonate98/hng12-stage1.git

2. Navigate to the project directory:

   ```sh
   cd hng12-stage1

3. Install dependencies:

   ```sh
   npm install

4. Create a .env file in the root directory and define the following variable:

   ```sh
   PORT=8080

5. Start server with:

   ```sh
   npm run dev

The server will run on http://localhost:8080

## API Documentation

Base URL: https://ben-stage1.vercel.app/api/classify-number

Endpoints: 

GET https://ben-stage1.vercel.app/api/classify-number?number=371

Description: Returns a JSON response with facts about the number

Request:
This endpoint requires a number query parameter

Response:

Status Code: 200 OK

Response Body:

 ```sh
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
}






