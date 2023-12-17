# Driver Monitoring System
The Driver Monitoring System is a simple system designed to monitor and generate alerts based on driving events. It consists of a rule engine that evaluates events against predefined conditions to generate alerts.
## Features
- Monitoring of driving events such as timestamp, driving safety status, vehicle ID, and location type.
- Rule engine to generate alerts based on predefined conditions.
- MongoDB models for events, alerts, and location threshold mappings.
- The rule engine runs automatically every five minutes to generate alerts based on given conditions using setInterval.
## Prerequisites:
- **Node.js**: It provides the runtime environment for executing JavaScript on the server side. You can download and install Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download/).
- **MongoDB**: The API uses MongoDB as its database system. You need to install MongoDB on your machine. You can download and install MongoDB from the official website: [MongoDB Downloads](https://www.mongodb.com/try/download/community).
- **npm (Node Package Manager)**: npm is used to manage the dependencies (libraries, frameworks, etc.) required by the API. Users don't need to install npm separately, it comes bundled with Node.js.
## Installation:
- Clone the repository: [Repository link](https://github.com/GLakshmiPrasanna/Driver-Monitoring-System)
<br>`git clone https://github.com/GLakshmiPrasanna/Driver-Monitoring-System.git`
- Move to the directory where the project is cloned using ‘cd’ command
- Install dependencies using command
<br>`npm install`
- Configure the database connection by editing the index.js file with your MongoDB connection details.
## Running the Application:
- Start the server using command:
<br>`npm start`
- The server will run on http://localhost:3000 by default. (Port number can be changed in index.js file).

## API Endpoints:
- ### Post an event
  - **Endpoint:** POST /event
  - **Description:** Post driving events to the system using a POST request. The request body should include details such as timestamp, driving safety status, vehicle ID, and location type.
  - **Request Body:** JSON object representing the driving event (is_driving_safe, vehicle_id, location_type). Timestamp is is added automatically when post request is send.
    And location types are 'highway','city_center','commercial','residential'.
  ```
  Ex:
   {
    "is_driving_safe": "false",
    "vehicle_id": "ABC123",
    "location_type": "highway"
   }
  ```
  - **Response:** Displays the event that is added (in json format). 
- ### Retrieve an alert message
  - **Endpoint:** GET /alert/:alert_id
  - **Description:** Retrieves details of a specific alert using its ID. You can obtain alert IDs from the /alerts endpoint.
  - **Response:** If alert with given alert_id is present in database, it displays that particular alert message in json format. If it is not found, then it displays a message "Alert not found";
- ### Retrieve all alert messages
  - **Endpoint:** GET /alerts
  - **Description:** Retrieves details of all alert messages in the database.
  - **Response:** Displays all alert messages in json format.
- ### Retrieve all event messages
  - **Endpoint:** GET /events
  - **Description:** Retrieves details of all events in the database.
  - **Response:** Displays all driving events in json format.
## Additional Notes:
- Ensure that MongoDB is running and accessible before starting the application.
- Postman can be used to test(i.e.,to post and get the data) the API using the provided endpoints. Any of your preferred API testing tool can also be used to interact with the endpoints and observe the system's behavior.
