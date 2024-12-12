# Api Skill Assessment



---

# Problem 1: Simple Weather Query
### Objective: Demonstrate the ability to consume an external REST API.

## Scenario:
Your team is developing a dashboard that displays the current weather for a city. Use the OpenWeather API to fetch the current weather for a user-specified city.

## Task:

Write a script or application that accepts a city name as input.
Query the OpenWeather API for the current weather information (temperature, humidity, and a brief weather description).
Format the data into a readable JSON response to be displayed on the console or in a simple UI.

## Considerations:

Include error handling for invalid city names or network issues.
Use an API key securely (environment variables are preferred).

---

# Problem 2: Create a Local API
### Objective: Demonstrate the ability to design and build a REST API.

## Scenario:
Your team needs a local API to manage a list of employees for a small application. Build a REST API that supports basic CRUD operations.

## Task:

Create a REST API with the following endpoints:
POST /employees: Add a new employee (accepts name, email, and position).
GET /employees: Retrieve the list of all employees.
GET /employees/{id}: Retrieve details of a single employee by ID.
PUT /employees/{id}: Update the details of an employee.
DELETE /employees/{id}: Remove an employee by ID.
Store employee data in memory (a simple list or dictionary is sufficient).

## Considerations:

Ensure proper HTTP status codes for responses.
Add validation for required fields in POST and PUT requests.
Document the API with example requests and responses.

---

# Problem 3: Integrate Payment Information
### Objective: Demonstrate integration skills with an external API and handling structured data.

## Scenario:
Your company uses Stripe for processing payments. A client has requested a summary of all charges made in the last 30 days. Use the Stripe API to fetch and summarize this information.

## Task:

Use the Stripe API to retrieve a list of all charges from the last 30 days.
Summarize the charges by:
Total number of transactions.
Total amount charged (in the account’s default currency).
A list of charges, each with amount, currency, description, and status.
Return the summarized data as a JSON response.

## Considerations:

Use a test environment (Stripe provides a test mode).
Include error handling for failed API calls or authentication issues.
Provide instructions for setting up the test environment if necessary.
