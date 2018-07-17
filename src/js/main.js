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

const buttonLogOut = document.getElementById('logOut');

buttonLogOut.addEventListener('click',()=>{
  firebase.auth().signOut();
  location.href = 'index.html';
})

window.onload = () =>{
	const message = document.getElementById('message');
	const emailMessage = localStorage.getItem('email');
<<<<<<< HEAD
	message.innerHTML = emailMessage;

	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {location.href = 'index.html';} 
	});
=======
>>>>>>> 2641965a04d7d2a7364012b75f8e00b045aadbeb
}