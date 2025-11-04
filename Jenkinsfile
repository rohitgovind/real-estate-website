pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "node:18-alpine"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning GitHub Repository..."
                git branch: 'main', url: 'https://github.com/rohitgovind/real-estate-website.git'
            }
        }

        stage('Build in Docker') {
            agent {
                docker {
                    image "${DOCKER_IMAGE}"
                    args '-u root:root'
                }
            }
            steps {
                script {
                    echo "Building Frontend (React)"
                    dir('client') {
                        sh 'npm install'
                        sh 'npm run build'
                    }

                    echo "Building Backend (Node.js)"
                    dir('server') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Post-Build') {
            steps {
                echo "✅ Build successful! Artifacts ready for deployment."
            }
        }
    }

    post {
        failure {
            echo "❌ Build failed. Please check logs."
        }
    }
}
