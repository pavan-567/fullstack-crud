pipeline {
    agent any
    environment {
        JAVA_HOME = "G:\\Program Files\\Java\\Jdk-17"
        PATH = "${JAVA_HOME}\\bin;C:\\Program Files\\nodejs;${env.PATH}"
    }
    stages {
        stage('Run Fullstack') {
            steps {
                echo "Starting Fullstack Application..."
                bat '"G:\\Coding\\Road to 15 LPA\\Jenkins\\Full Stack\\fullstack_scripts\\run_full_stack_bg.bat"'
            }
        }
    }
    post {
        success {
            echo 'Fullstack applications started successfully!'
        }
        failure {
            echo 'Pipeline failed! Check backend.log and frontend.log for errors.'
        }
    }
}
