pipeline {
    agent any

    environment {
        registry = "bbacem/jenkins-example"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'node index.js'
            }
        }

        stage('Dockerize') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Publish') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh "docker rmi ${registry}:$BUILD_NUMBER"
            }
        }
    }
}
