// Initialize Firebase
var config = {
	apiKey: "AIzaSyD25eue2yTbXemiuIxpsgNsbTq3XD4YR1Y",
	authDomain: "api-project-235325722491.firebaseapp.com",
	databaseURL: "https://api-project-235325722491.firebaseio.com",
	projectId: "api-project-235325722491",
	storageBucket: "api-project-235325722491.appspot.com",
	messagingSenderId: "235325722491"
};
firebase.initializeApp(config);

const email = document.getElementById('email');
const pass = document.getElementById('pass');
const buttonLogin = document.getElementById('button-login');

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
