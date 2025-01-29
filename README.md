# API Gateway Example

## Project Objective

This project was created as part of an API skill assessment with a 48-hour time limit. The goal was not to build a single, purpose-driven application, but to showcase skills in RESTful API design, external API integration, and handling structured data.

The project combines implementation of three distinct challenges into a single API Gateway:

1. Simple Weather Query
   - Fetches weather data from the OpenWeather API based on a user-specified city.
   - Implements basic error handling for network failures and invalid input.
2. Employee Management Local API
   - Implements a CRUD-based REST API to manage a list of employees.
   - Includes endpoints for adding, retrieving, updating, and deleting employees with proper validation.
3. Payment Summary with Stripe API
   - Retrieves and summarizes payment charge data from the Stripe API for the past 30 days.
   - Outputs totals, transaction counts, and charge details.

## Overview

My approach was to create an MVP to complete all objectives at the most basic level based on the [requirements](https://github.com/JonathanCrider/api-gateway-example/blob/main/docs/INSTRUCTIONS.md). There are many things I would change given more time, but I was limited in time and wanted to complete each objective. I have left this project in its original completed state to illustrate what was accomplished within the time limit.

Completing the requirements required learning at least 4 new (to me) technologies or platforms:

- [OpenWeather API](https://openweathermap.org/api)
- [SQLite](https://www.sqlite.org/index.html)
- [Stripe](https://docs.stripe.com/api)
- [OpenAPI](https://swagger.io/specification/)

I enjoyed this challenge! I love to learn new technologies and am able usually able to get up and running fairly quickly. I did run into several issues while figuring out some of the new stuff, but I was able to get a working API Gateway going by the deadline.

Part of the requirements also included a brief [SQL Test](https://github.com/JonathanCrider/api-gateway-example/blob/main/docs/SQLtest.md).

## Next Steps

I plan to fork this project, refine it by addressing areas I didn't have time to complete, and deploy it. Additionally, I’ll continue experimenting and learning new tools to enhance the project further with things like better authentication, a user interface, and a test suite. This process will allow me to expand my skill set and deepen my understanding of the technologies involved.

# Project setup

## Development Environment

To set up the development environment, you'll need to install the following tools:

1. **Node.js**  
   Node.js is a JavaScript runtime that allows you to execute JavaScript code server-side. You'll need it to run the server for this project.  
   - [Download and Install Node.js](https://nodejs.org/)  
   - [Node.js Documentation](https://nodejs.org/en/docs/)  

2. **NPM (Node Package Manager)**  
   NPM comes bundled with Node.js and is used to manage dependencies for your project. To verify if NPM is installed, run:  

   ```bash
   npm --version
   ```  

   - [NPM Documentation](https://docs.npmjs.com/)  

3. **SQLite**  
   SQLite is a lightweight, serverless database engine used in this project.
   - [Download SQLite](https://www.sqlite.org/download.html)  
   - [SQLite Documentation](https://www.sqlite.org/docs.html)  

## Download and run the project

```bash
git clone https://github.com/JonathanCrider/api-gateway-example.git
cd api-gateway-example
```

Be sure to create a `.env` file and include the following variables:

```bash
touch .env
```

```env
PORT=3001
OPENWEATHER_API_KEY=
STRIPE_SECRET_API_KEY=
X_API_KEY=
```

Install the dependencies and start the server locally:

```bash
npm i
npm run start:dev
```

## API Documentation

API documentation for this project was published using [OpenAPI](https://swagger.io/specification/)

They are also published at [https://jonathancrider.com/api-docs.html](https://jonathancrider.com/api-docs.html)

To deploy locally, you can open your browser once the server is running to see the docs at the following URL (if your `.env` port is set to 3001):

[http://localhost:3001/docs](http://localhost:3001/docs)

## API Package

Download the JSON and import into [Insomnia](https://insomnia.rest/):

[Insomnia JSON](https://github.com/JonathanCrider/api-gateway-example/blob/main/docs/Insomnia-api-skill-assessment.json)
