//import admin from "../firebaseService";
const admin = require('../firebaseService');

//admin.auth().verifyIdToken();

const getAuthToken = ( req, res, next) => {
   

   if(req.headers.authorization && req.headers.authorization.split(" ")[0]=== "Bearer"){
      req.authToken = req.headers.authorization.split(" ")[1];
      
   } else {
      req.authToken = null;
   }

   next(); 

}

const checkIfAuthenticated = (req, res, next) =>{
   getAuthToken(req, res, async() => {
      try{
         const {token} = req;
         const userInfo = await admin.auth().verifyIdToken(token);
         req.authId = userInfo.uid;
         console.log("pasé por acá")
         return next(); 
   
      }catch(e){
         return res.status(401).send({error: "No posee autorización"})
      }
   })
   
}

module.exports =  checkIfAuthenticated ;