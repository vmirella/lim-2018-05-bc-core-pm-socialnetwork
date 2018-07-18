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
const optCategory = document.getElementById('optCategory');
const optState = document.getElementById('optState');
const inputTitle = document.getElementById('inputTitle');
const contentImagen = document.getElementById('contentImagen');
const btnImagen = document.getElementById('btnImagen');
const inputContent = document.getElementById('inputContent');
const btnAddPost = document.getElementById('addPost');
const btnEditPost = document.getElementById('editPost');
const btnDeletePost = document.getElementById('deletePost');
const showPost = document.getElementById('showPost');

buttonLogOut.addEventListener('click', () => {
	firebase.auth().signOut();
	location.href = 'index.html';
})


// creando objeto que contiene la data del post

let postData = {
	uid: null,
	title: null,
	image: null,
	content: null,
	date: null,
	category: null,
	state: null,
	likes: null,
	comentary: null

};

//Contiene la data de los post 

let listPostUser = {}; //Solo post del usuario logueado
let listPostGeneral = {}; //Todos los post a mostrarse en la portada principal

//obteniendo el id del usuario actual

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		postData.uid = user.uid;

		firebase.database().ref('/user-posts/' + postData.uid).once('value').then(function(value) {
			//console.log(value.val())
			listPostUser = value.val();
		  });
		firebase.database().ref('/user-posts/').once('value').then(function(value) {
			//console.log(value.val())
			listPostGeneral = value.val();
		  });

	}
	return user
});


window.onload = () =>{

//Mostrar en la portada del --

	//console.log(listPostUser)
	//console.log(listPostGeneral)

}

let idPost='';//Guardar id post

btnAddPost.addEventListener('click', () => {

	postData.title = inputTitle.value;
	postData.image = '',
	postData.content = inputContent.value,
	postData.date = new Date().getTime();
	postData.category = optCategory.value,
	postData.state = optState.value,
	postData.likes = 0,
	postData.comentary = {};


	idPost = createPost(postData);
	alert('se registró post')


	//SOLO PRUEBA PARA VERIFICAR EL PINTADO EN HTML
	showPost.innerHTML= `estado ${postData.state}<br> Title ${postData.title} <br> category ${postData.category} `


	//Cambiar a muro principal
})


btnEditPost.addEventListener('click', () =>{
	postData.title = inputTitle.value;
	postData.image = '',
	postData.content = inputContent.value,
	postData.date = new Date().getTime();
	postData.category = optCategory.value,
	postData.state = optState.value,
	postData.likes = 0,
	postData.comentary = {};

	editPost(idPost, postData);
	alert('se editó post')

	//SOLO PRUEBA PARA VERIFICAR EL PINTADO EN HTML
	showPost.innerHTML= `estado ${postData.state}<br> Title ${postData.title} <br> category ${postData.category} `
	
})

btnDeletePost.addEventListener('click', () =>{
	deletePost(idPost, postData.uid);
	alert('se eliminó post')

	//SOLO PRUEBA PARA VERIFICAR EL PINTADO EN HTML
	showPost.innerHTML= '';
	

})

