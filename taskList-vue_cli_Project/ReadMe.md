## This is my Todo List Created in Vue

If you wish to review this coding project setup instructions are specific as the app requires setting up a fake fetch API to
allow the app to have access to our db JSON where it writes and keeps track of our tasks. This is done to ensure the app
can keep track of these values at all times even after the page reloads. If the server is not running app can not make fetch
requests to update the text file.

Fundamentals this app helped me understand: `Vue structure, Vue props, Prop drilling, Emit passing, v-show`

server module should already be included in the package JSON so all that needs to be done is to make sure

$ `npm install`

is ran in the root

afterwards, the command to start the fake api server is

$ `json-server --watch db.json --port 5000`

followed by

$ `npm run dev`

top start the server. Once both the api server and vue server run app should be functional.
