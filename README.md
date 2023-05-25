# Jenkins Example Project

This is an example Node.js project configured with Jenkins for continuous integration and deployment. The repository includes a Jenkinsfile that outlines the steps for building the application, running tests, creating a Docker image, and pushing it to Docker Hub.

## Prerequisites

To run this project, you'll need:

- Node.js
- npm (comes bundled with Node.js)
- Docker
- Jenkins with the Docker Pipeline plugin installed

## Local Setup

Follow these steps to set up the project locally:

1. Clone the repository:

   ```
   git clone https://github.com/zdbrig/jenkins-example.git
   ```
### Navigate to the project directory:


``` cd jenkins-example

cd jenkins-example 

```

### Install the project dependencies:


``` npm install 
```
### Run the application:


``` npm start 
``` 
### Running with Docker
The project includes a Dockerfile for building a Docker image of the application.

### Build the Docker image:


```docker build -t jenkins-example . 
```

### Run the Docker container:

```
docker run -p 8080:8080 jenkins-example 
```
Now the application should be accessible at http://localhost:8080.

Jenkins Pipeline
The Jenkinsfile in this repository outlines the CI/CD pipeline for this project. The pipeline includes stages for checking out the code, building the application, running tests, building a Docker image, and pushing the image to Docker Hub.

The Docker image is tagged with the Jenkins build number, allowing you to track images back to the build that created them.
