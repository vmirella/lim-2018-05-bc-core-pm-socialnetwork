//Esta funcion guarda en la tabla users los datos del usuario
window.registerUserProfile = (userId, names, lastnames, email, picture = '') => {
	firebase.database().ref('users/' + userId).set({
		names: names,
		lastnames: lastnames,
		email: email,
		picture: picture
	}, (error) => {
		return 0;
	});

	return 1;
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
