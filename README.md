# Student Hub – Full Stack CRUD Application

A simple full-stack CRUD application to manage students using:

- Spring Boot (Backend)
- React.js (Frontend)

## Project Structure

```
student-hub-api/          --> Spring Boot Backend
student-hub-frontend/     --> React Frontend
```

## Features

- View all students
- Add a new student
- Delete a student
- Responsive and clean UI with a blue and white theme

## Backend – Spring Boot Setup

1. Open a terminal inside `student-hub-api/`
2. Make sure PostgreSQL is running and update `application.properties` with your database credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/student
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. Build and run the backend:

Using Maven:
```bash
./mvnw spring-boot:run
```

Or using a built JAR:
```bash
java -jar target/student-hub-api-0.0.1-SNAPSHOT.jar --server.port=8080
```

Ensure the backend is accessible at `http://localhost:8081`

## Frontend – React Setup

1. Open a terminal inside `student-hub-frontend/`
2. Install dependencies:
```bash
npm install
```
3. Start the React app:
```bash
npm start
```
4. Visit `http://localhost:3000` in your browser

## API Endpoints

- `GET    /api/v1/student`         - Get all students
- `POST   /api/v1/student`         - Add new student
- `DELETE /api/v1/student/{id}`    - Delete a student by ID

## Notes

- CORS must be enabled in the Spring Boot backend to allow requests from the React frontend.
- The backend and frontend must run on different ports (e.g., 8081 and 3000).

## License

This project is for educational purposes only.