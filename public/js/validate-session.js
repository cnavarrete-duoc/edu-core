const logout = () => {
	sessionStorage.removeItem('currentUser');
	window.location.href = 'index.html';
};

const validateSession = () => {
	const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
	if (currentUser) {
		console.info('User is logged in');
		window.location.href = 'dashboard.html';
	} else {
		console.info('User is not logged in');
		// logout();
	}
};

validateSession();
