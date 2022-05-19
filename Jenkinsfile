node {
    TESTCAFE_DOCKER_PATH = 'Dockerfile'
}


pipeline {
  agent { 
                 dockerfile {
                        filename "${TESTCAFE_DOCKER_PATH}"
                        args  '--net=host -e DISPLAY=":0"'
                         args '--entrypoint=\'\''
                        reuseNode true
                } 
  }
 environment {
  HOME = '.'
 }
 stages {
  stage('Clone scm') {
   steps {
    checkout([$class: 'GitSCM', branches: [
      [name: '*/master']
     ],
     userRemoteConfigs: [
      [url: 'https://github.com/kendo1234/testcafeexamples.git']
     ]
    ])
   }
  }

   stage('Configuration') {
   steps {
     sh 'npm i --verbose'
     sh 'npm run clean' 
   }
  }

  stage('Run TestCafe') {
   steps {
    sh "npm run e2e:headless" 
   }
  }
 }
}