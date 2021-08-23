function logout(){
    firebase.auth().signOut()
    window.location="./index01.html"}

    const myModel = document.querySelectorAll('.modal')

    let ads='';
    function handleChange(src) {
      return ads = src.value ;
      }
    
    async function signup(e){
        e.preventDefault()
        
        let username = document.getElementById("Name").value;
        let email = document.getElementById("Email");
        let password = document.getElementById("Password");
        
       
        
    
          firebase.auth().createUserWithEmailAndPassword(
              email.value,
              password.value
          ).then((resp) =>{
              return firebase.firestore().collection('users').doc(resp.user.uid).set({
                  Username: username,
                  Email: email.value,
                  catogary:ads
              })
          }).then(() => {
             console.log("Hello")
          }).catch(err => {
            console.log(err);
    
             
          })
}

let login = (event) => {
    event.preventDefault()
    let username = document.getElementById("Name");
    let email = document.getElementById("Lemail1");
    let password = document.getElementById("Lpassword");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            console.log("loged In")
            window.location = "./CusDash.html"
            start();
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

}
var userUID = '';
var userName = '';
function start() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            uid = user.uid;
            userUID = user.uid;
            userName = user.displayName;
            userName = document.getElementById("login-user-name").innerHTML = user.displayName

            //   star(uid)

            // ...
        } else {
            location.href = "./index01.html"

        }
    });

}