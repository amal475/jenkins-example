# Jenkins Example Project

This is an example Node.js project configured with Jenkins for continuous integration and deployment. The repository includes a Jenkinsfile that outlines the steps for building the application, running tests, creating a Docker image, and pushing it to Docker Hub.

## Prerequisites

To run this project, you'll need:

- Node.js
- npm (comes bundled with Node.js)
- Docker
- Jenkins with the Docker Pipeline plugin installed


### Run the Docker container:

```
docker run -p 8080:8080 jenkins-example 
```
Now the application should be accessible at http://localhost:8080.

Jenkins Pipeline
The Jenkinsfile in this repository outlines the CI/CD pipeline for this project. The pipeline includes stages for checking out the code, building the application, running tests, building a Docker image, and pushing the image to Docker Hub.

The Docker image is tagged with the Jenkins build number, allowing you to track images back to the build that created them.
