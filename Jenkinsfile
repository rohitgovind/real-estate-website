pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rohitgovind/real-estate-website.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('server') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step placeholder — coming next'
            }
        }
    }
}
