pipeline {
    agent any

    stages {
        stage('Build') {
           
            
            steps {
                // Construit l'image Docker à partir du Dockerfile
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Test') {
           
            
            steps {
               
                // Exécute les tests de votre application
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
                // Déploie votre application (cette étape dépend de votre environnement de déploiement)
                
                sh '''
                docker tag my-node-app:latest  sqointeam/repository-sqoin:my-node-app-latest
               
               
                docker push sqointeam/repository-sqoin:my-node-app-latest
                docker stop  my-node-app-test
                docker rm  my-node-app-test
                docker run -p 3013:3013 -d --name my-node-app-test sqointeam/repository-sqoin:my-node-app-latest
                '''
            }
        
        }
         stage('Cleanup') {
            steps {
                // Ajoutez les étapes de nettoyage ici
              
              
                sh 'docker rmi  my-node-app'

            }
    }
}
}