pipeline {
  agent any

  environment {
    NODE_VERSION = '20.8.0'
  }

  stages {
    stage('Checkout') {
      steps {
        script {
          checkout scm
        }
      }
    }

    stage('Build') {
      steps {
        script {
          tool name: 'Node.js', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
          env.PATH = "${tool 'Node.js'}/bin:${env.PATH}"
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          sh 'npm test'
        }
      }
    }

    stage('Deploy') {
      when {
        expression { env.BRANCH_NAME == 'main' }
      }
      steps {
        script {
          echo 'Deploying to hosting service...'
        }
      }
    }
  }

  post {
    always {
    }
  }
}
