pipeline {
    agent any

    stages {
        stage('Build') {
           
            
            steps {
                // Builds the Docker image from the Dockerfile
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Test') {
           
            
            steps {
               
                // Execute the tests of your application
                sh 'docker build -t my-node-app-test-1 -f dockerfiletest .'
                sh 'docker run -d --name test my-node-app-test-1 npm test'
                 sh 'docker stop  test'
                sh 'docker rm  test'
            }
        }
         stage('Docker login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhubsqointeam', 
                                                  passwordVariable: 'DOCKER_PASSWORD', 
                                                  usernameVariable: 'DOCKER_USERNAME')]) {
                    script {
                        
                       sh " docker login -u '${DOCKER_USERNAME}' -p '${DOCKER_PASSWORD}' "
                    }
                }
            }
        }

        stage('Deploy') {
           
           
            steps {
                // Deploy your application (this step depends on your deployment environment)
                
                sh '''
                docker tag my-node-app:latest  sqointeam/repository-sqoin:my-node-app-latest
               
               
                docker push sqointeam/repository-sqoin:my-node-app-latest
                docker stop  my-node-app-test
                docker rm  my-node-app-test
                docker run -p 3000:3000 -d --name my-node-app-test sqointeam/repository-sqoin:my-node-app-latest
                '''
            }
        
        }
         stage('Cleanup') {
            steps {
                // // Add cleaning steps here
              
              
                sh 'docker rmi  my-node-app'

            }
    }
}
}