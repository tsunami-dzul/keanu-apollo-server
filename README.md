# Keanu backend

Keanu backend is an apollo server which uses the https://placekeanu.com/ to get the pictures of Keanu. You can provide the params: width, height, gray or young.

## Libraries used

Keanu backend uses the below technologies:

- GraphQL
- TypeScript

## How to run it

Installing the required modules:

### `npm install`

Then in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to load the Apollo server

## Docker

If you wish, you also can dockerized it:

1. Build your images:
   > docker build . -t <your username>/nodejs-graphql-docker
2. Run the image:
   > docker run -p 4000:4000 -d keanu-graphql-docker
3. Now you should be able to see execute http://localhost:4000/ on the broweser.
