const form = document.querySelector('#login-form');
if (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const currentUser = login(email, password);
		if (!currentUser) {
			alert('Invalid credentials');
			return;
		}

		sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
		window.location.href = 'dashboard.html';
	});
}
