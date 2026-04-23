pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/isaikrishna15/devops_ci-cd.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install || true'
            }
        }

        stage('Run App') {
            steps {
                sh '''
                pkill node || true
                nohup node app.js > app.log 2>&1 &
                '''
            }
        }
    }
}
