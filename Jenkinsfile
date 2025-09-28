pipeline {
    agent any
    environment {
        JAVA_HOME = "G:\\Program Files\\Java\\Jdk-17"
        PATH = "${JAVA_HOME}\\bin;${env.PATH}"
    }
    stages {
        stage('Run Fullstack') {
            steps {
                bat 'G:\\Coding\\Road to 15 LPA\\Jenkins\\Full Stack\\fullstack_scripts\\run_full_stack_bg.bat'
            }
        }
    }
}
