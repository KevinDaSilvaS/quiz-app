# quiz-app
A simple quiz-app developed using node js(express, mongoose, mongodb, insomnia-documenter, mocha, chai). The core of the app consist in users can creating questions and display the questions to another users to answer them

<h2>To start the project</h2>
You should create a database in mongodb based in the config url
or run the docker command :
...docker run -d --name=mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=123 -d mongo:4...