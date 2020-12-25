function check(){

   var mess = document.getElementById('message').value;
   var userKey = firebase.database().ref("users/").push().key; // random key 
       firebase.database().ref("users/"+ userKey ).set({
         message: mess,
          key: userKey
       });
 
      }