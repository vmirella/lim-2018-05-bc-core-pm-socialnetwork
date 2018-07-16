
//Esta funcion guarda en la tabla users los datos del usuario
window.registerUserProfile = (userId, names, lastnames, email, picture = '') => {
	firebase.database().ref('users/' + userId).set({
		names: names,
		lastnames: lastnames,
		email: email,
		picture: picture
	}
		, (error) => {
			return 0;
		});
	return 1;
}
//Esta funcion permite la creacion de un post
window.registrerNewPost = (postId, content) => {
	firebase.database().ref('post/' + userId).set({
		postId: name,
		content: {
			title: content.email,
			paragraph: content.paragraph,
			image: content.image
		}
	});
}
//Esta funcion permite relacionar al usuario con sus posts
window.registrerNewPost = (userId, postId) => {
	firebase.database().ref('post/' + userId).set({
		postId: name,
		content: {
			title: content.email,
			paragraph: content.paragraph,
			image: content.image
		}
	});

}


window.processDataUser = () => {

}