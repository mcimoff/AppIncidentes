require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;
const uri = "mongodb+srv://santiagomertens:proyectoincidentes@gestorinc.iyarl.mongodb.net/?retryWrites=true&w=majority&appName=GestorInc";
//const uri = "mongodb+srv://admin1:tp3@cluster0.opcwte2.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoclient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
        instance = await client.connect();   
     }
     return instance;
}

module.exports = {getConnection};