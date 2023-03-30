# Generative Math

## It is a web application built with NextJS, Tailwind, OpenAI, MongoDB & Auth0 to generate code and responses to mathematical statements.

## Instructions for use

1. The user enters the application by logging in through **Auth0**.
2. The user will have a main screen to input a given problem (`context`).
3. The system will generate a request to the **text-davinci-003** model, and the result will be saved as a record in **MongoDB**. Subsequently, this record is retrieved to display the problem solution in an appreciable way.
4. CURRENTLY: Work on the project continues to improve the GUI & deploy the project, as well as migrating from **LLMs models**.