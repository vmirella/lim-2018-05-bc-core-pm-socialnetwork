// Initialize Firebase
var config = {
    apiKey: "AIzaSyBC6hYyncHRa4zRqpV1xHLE9uH_FIobzjg",
    authDomain: "socialnetwork-d9247.firebaseapp.com",
    databaseURL: "https://socialnetwork-d9247.firebaseio.com",
    projectId: "socialnetwork-d9247",
    storageBucket: "socialnetwork-d9247.appspot.com",
    messagingSenderId: "114124006078"
  };
  firebase.initializeApp(config);

const email = document.getElementById('email');
const pass = document.getElementById('pass');
const buttonLogin = document.getElementById('button-login');
const sigInWithFacebookBtn = document.getElementById('sigInWithFacebook');

buttonLogin.addEventListener('click', () => {

	firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
		.then((result) => {
			alert('Bienvenido');
			//redireccionar a la pagina de inicio
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Contraseña incorrecta.');
			} 
			else {
				alert('Usuario o contraseña incorrecto');
			}
		});
	
});

var provider = new firebase.auth.FacebookAuthProvider();


sigInWithFacebookBtn.addEventListener('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
	 // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		buttonLogin.style.display ='none';
		// ...
	  }).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	  });
	

  });

 

  
  