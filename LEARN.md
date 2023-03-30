# 📚 LEARN.md

## 🚀 Project Introduction

This project is a web application built with NextJS, Tailwind, OpenAI & Auth0 to generate code and responses to mathematical statements.

## 📝 Instructions for Use

1. **Log in:** The user enters the application by logging in through Auth0. 🔐
2. **Input problem:** The user will have a main screen to input a given problem (context). 💡
3. **Generate solution:** The system will generate a request to the text-davinci-003 model, and the result will be saved as a record in MongoDB. Subsequently, this record is retrieved to display the problem solution in an appreciable way. 🧪
4. **In development:** Work on the project continues to improve the GUI & deploy the project, as well as migrating from LLMs models. 🚧

## 💻 Technologies Used

- NextJS: A web development framework based on React for creating server-rendered React applications. ⚛️
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs. 🎨
- OpenAI: An artificial intelligence platform that enables developers to harness powerful language models to create useful applications and services. 🤖
- Auth0: An authentication and authorization service provider to simplify the implementation of secure login. 🔐
- MongoDB: A document-based NoSQL database for storing and retrieving information. 🗄️

## 🌐 Deployment

- In progress...


## 🏗️ Building the Project

Follow these steps to build and run the project locally using npm:

1. **Prerequisites:** Ensure you have the following software installed on your system:
   - [Node.js](https://nodejs.org/) (LTS version recommended)

2. **Clone the repository:** Clone the project to your local machine.

3. **Install dependencies:** Navigate to the project directory and run the following command to install the required dependencies: `npm install`

4. **Create the .env.local file:** This file is missing because it contains Access Keys to the different services used, you will need to copy the variables that are in the .env.local.sample file replacing them with your credentials.

5. **Run the development server:** Start the development server by running: `npm run dev`









