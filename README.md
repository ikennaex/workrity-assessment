## Frontend Engineer Assessment - Task Management App
This project is a task management application built with React. It uses JSON Server as a mock database to handle CRUD operations. The project is designed to demonstrate the functionality of adding, editing, and removing tasks.

**Features**
- Add a new task
- Edit an existing task
- Delete a task
- Displays a list of tasks

**Technologies Used**
- React JS
- JSON Server (for the mock database)
- Vite (for fast development)

**To Get Started**
1. Clone REPO or Download ZIP folder
2. Install Dependencies, RUN 

**npm install**

3. TO START THE MOCK DATABASE, RUN

**npx json-server -p 3500 -w data/db.json**

this is expected to open port 3500 with the application data 

4. Start the React App, RUN

**npm run dev**

5. To Run Test, RUN

**npm test**

Test added to the TaskForm Component and it checks if the Task App:

**Renders the input and button:**
This test checks if the TaskForm component correctly renders the input field (for the task title) and the button (for setting the task).

**Calls handleChange when input changes:**
This test simulates typing into the task title input and checks if the handleChange function is called correctly when the input value changes.

**Calls addNewTask when the form is submitted:**
This test simulates submitting the form and checks if the addNewTask function is called when the form is submitted.




