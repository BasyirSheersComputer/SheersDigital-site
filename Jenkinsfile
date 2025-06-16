pipeline {
  agent any

  environment {
    IMAGE_NAME = 'basyir/sheersdigital-site'
    TAG = "${env.BUILD_NUMBER}"
    SSH_CRED_ID = 'vm-ssh-key'             // Jenkins SSH credential ID
    DOCKER_CRED_ID = 'dockerhub-creds'     // Jenkins DockerHub credential ID
    REMOTE_HOST = '192.168.20.215'           // Replace with your VM IP or hostname
    REMOTE_USER = 'basyir'
    CONTAINER_NAME = 'sheersdigital-site'
  }

  stages {

    stage('Checkout Source') {
      steps {
        git url: 'https://github.com/BasyirSheersComputer/SheersDigital-site.git', branch: 'main'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh """
          docker build -t $IMAGE_NAME:$TAG .
          docker tag $IMAGE_NAME:$TAG $IMAGE_NAME:latest
          """
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: DOCKER_CRED_ID,
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh """
          echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
          docker push $IMAGE_NAME:$TAG
          docker push $IMAGE_NAME:latest
          """
        }
      }
    }

    stage('Deploy to Production') {
      steps {
        sshagent([SSH_CRED_ID]) {
          sh """
          ssh -o StrictHostKeyChecking=no $REMOTE_USER@$REMOTE_HOST '
            docker pull $IMAGE_NAME:latest &&
            docker stop $CONTAINER_NAME || true &&
            docker rm $CONTAINER_NAME || true &&
            docker run -d --name $CONTAINER_NAME \\
              -p 8888:80 \\
              -p 8443:443 \\
              --restart always \\
              $IMAGE_NAME:latest
          '
          """
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deployment successful!"
    }
    failure {
      echo "❌ Deployment failed!"
    }
  }
}
