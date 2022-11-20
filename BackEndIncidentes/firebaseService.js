const admin = require("firebase-admin");
//import * as admin from "firebase-admin";

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://gestiondeincidentes-7cfc8.firebaseio.com"
});

module.exports= {admin};