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
                echo "Ensuring correct directory"
                cd $WORKSPACE

                echo "Restarting app with PM2 (clean way)"
                pm2 restart myapp || pm2 start app.js --name myapp

                pm2 save

                echo "Active processes:"
                pm2 list
                '''
            }
        }

    }
}