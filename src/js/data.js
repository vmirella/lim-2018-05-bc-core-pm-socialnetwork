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
