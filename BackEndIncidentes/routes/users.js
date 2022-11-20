// const { firebase, admin } = require('../fbConfig')

// exports.login = (req, res) => {
//     firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
//     .then(function () {
//          firebase.auth().currentUser.getIdToken(true).then(function          (idToken){
//                 res.send(idToken)
//                 res.end()
//              }).catch(function (error) {
//                  //Me falta tratar el error
//                  console.log("No tengo token")
//              });
//     }).catch(function (error) {
          
//                  //Me falta tratar el error
//           console.log("No autenticó");
//     });
//     }

//     exports.isAuth = (req, res) => {
//       var user = firebase.auth().currentUser;
//       if (user) {
//           user.getIdToken(true).then(function (idToken) {
//               res.send(idToken)
//               res.end()
//           }).catch(function (error) {
//             console.log("Me falta este error 1");
//             //Me falta tratar el error
//           });
//       } else {
//           //Handle error
//           console.log("Me falta este error 2");
//                  //Me falta tratar el error
//       }
//   }
  
//   exports.userBasedFunc = (req, res) =>{
//       //Trae datos de usuario
//       console.log(req.user)
//   }
