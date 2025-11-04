pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rohitgovind/real-estate-website.git'
            }
        }

        stage('Build in Docker') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u root:root'
                }
            }
            steps {
                dir('client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '✅ Build completed successfully — deployment stage placeholder'
            }
        }
    }
}
