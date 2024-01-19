## this is my Todo list created in vue

If you wish to review this coding project set up instructions are specific as app requires to set up a fake fetch api to
allow the app to have access to our db json where it writes and keeps track of our tasks. This is done to ensure the app
can keep track of theses values at all times even after page reloads. If server is not running app can not make fetch
requests to update text file.

server module should already be included in package json so all needs to be done is make sure

$ npm install

is ran in the root

afterwards the command to start the fake api server is

$ json-server --watch db.json --port 5000

followed by

$ npm run dev

top start the server. Once both the api server and vue server run app should be functional.
