//Esta funcion guarda en la tabla users los datos del usuario
window.registerUserProfile = (dataUser) => {
	let dataRegisterUser = {
		id: null,
		userName: '',
		email: '',
		picture: ''
	}
	firebase.database().ref('users/' + dataUser.userId).set({
		username: dataUser.username,
		email: dataUser.email,
		picture: dataUser.picture
	}, (error) => {
		return 0;
	});

	return ;
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
