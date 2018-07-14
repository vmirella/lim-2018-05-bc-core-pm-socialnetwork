// Initialize Firebase
let config = {
	apiKey: "AIzaSyCrbUbq0oD49Yzk_eryDiJoseqOC6vUIcg",
	authDomain: "pet-health-social-network.firebaseapp.com",
	databaseURL: "https://pet-health-social-network.firebaseio.com",
	projectId: "pet-health-social-network",
	storageBucket: "pet-health-social-network.appspot.com",
	messagingSenderId: "838633128523"
};
firebase.initializeApp(config);

const email = document.getElementById('email');
const pass = document.getElementById('pass');
const buttonLogin = document.getElementById('button-login');
const names = document.getElementById('names');
const lastnames = document.getElementById('lastnames');
const emailRegister = document.getElementById('emailRegister');
const passRegister = document.getElementById('passRegister');
const buttonRegister = document.getElementById('buttonRegister');
const buttonLogOut = document.getElementById('logOut');
const linkLogin = document.getElementById('linkLogin');
const loginFacebook = document.getElementById('loginFacebook');


buttonLogin.addEventListener('click', () => {
	firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
		.then((result) => {
			alert('Bienvenido');
			localStorage.setItem('email', email.value);
			location.href = 'home.html';
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

buttonRegister.addEventListener('click', () => {
	firebase.auth().createUserWithEmailAndPassword(emailRegister.value, passRegister.value)
		.then((result) => {
			alert('El usuario ha sido registrado, Ahora ya puede ingresar');
			linkLogin.click();
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			if (errorCode === 'auth/email-already-in-use') {
				alert('El correo ya se encuentra registrado.');
			} 
			else if (errorCode === 'auth/weak-password') {
				alert('La contraseña es demasiado debil.');
			}
			else if (errorCode === 'auth/invalid-email') {
				alert('El correo es invalido.');
			}
		});	
});


let provider = new firebase.auth.FacebookAuthProvider();

loginFacebook.addEventListener('click', () => {
	firebase.auth().signInWithPopup(provider).then(function(result) {
		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
		   const token = result.credential.accessToken;
		   // The signed-in user info.
		   const user = result.user;
		   // ...
		 }).catch(function(error) {
		   // Handle Errors here.
		   const errorCode = error.code;
		   const errorMessage = error.message;
		   // The email of the user's account used.
		   const email = error.email;
		   // The firebase.auth.AuthCredential type that was used.
		   const credential = error.credential;
		   // ...
		 });
	   
});

window.onload = () =>{
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {	location.href = 'home.html';} 
	  });
}

