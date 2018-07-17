const dataRegisterUser = {
	id: null,
	userName: '',
	email: '',
	picture: ''
}
//Esta funcion guarda en la tabla users los datos del usuario
window.registerUserProfile = (dataUser) => {
	dataRegisterUser.id = dataUser.id;
	dataRegisterUser.userName = dataUser.username;
	dataRegisterUser.email = dataUser.email;
	dataRegisterUser.picture = dataUser.picture;
	firebase.database().ref('users/' + dataUser.id).set({
		username: dataUser.username,
		email: dataUser.email,
		picture: dataUser.picture
	}, (error) => {
		return 0;
	});

	return dataRegisterUser;
}

window.createPost = () => {
	//Generar idPost
	firebase.database().ref('posts/' + userId + '/' + idPost).set({
		title: title,
		date: date,
		image: image,
		text: text,
		category: category,// salud,alimentacion, adopcion, entretenimiento
		state: state,// publico o privado

	}, (error) => {
		return 0;
	});
}

window.editPost = () => {
	
}

window.deletePost = () => {
	
}
