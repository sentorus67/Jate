# Text Editor Starter Code
This challenge shows the functionallity of service workers and webpack plugins.

The JATE is a tool that can function offline. Using either client side or server side. Even both conccurently.

In order to use npm must be installed three seperate times. First "npm i" occurs in the overall package. Then each to the client folder and server folder.

With those installed a dist folder must be made with the main folders "npm build".

"npm run start:dev" would then allow for the server and client to run via a localhost.

upon first launch the editer will add to the database the header for JATE. Adding any other text will automatically be saved whenever the page focus is lost.

The App can be saved using the install button on the top left. And can be opened even when the sever is not running.