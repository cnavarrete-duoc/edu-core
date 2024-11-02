const addUser = (user) => {
	console.info('addUser method from services.js');
	const users = JSON.parse(sessionStorage.getItem('users')) || [];
	const emailExists = users.some((u) => u.email === user.email);
	if (!emailExists) {
		users.push(user);
		sessionStorage.setItem('users', JSON.stringify(users));
		return true;
	}

	console.info(`Email ${user.email} already exists`);
	return false;
};

const getUsers = () => {
	console.info('getUsers method from services.js');
	return JSON.parse(sessionStorage.getItem('users')) || [];
};

const getRoles = () => {
	console.info('getRoles method from services.js');
	return JSON.parse(sessionStorage.getItem('roles')) || [];
};

const getCourses = () => {
	console.info('getCourses method from services.js');
	return JSON.parse(sessionStorage.getItem('courses')) || [];
};

const getCoursesByUserId = (userId) => {
	console.info('getCoursesByUserId method from services.js');
	const users = getUsers();
	const user = users.find((u) => u.userId === userId);
	const courses = JSON.parse(sessionStorage.getItem('courses')) || [];
	return courses.filter((c) => user.courses.includes(c.courseId));
};

const login = (email, password) => {
	console.info('login method from services.js');
	const users = getUsers();
	const user = users.find((u) => u.email === email && u.password === password);
	if (user) {
		return user;
	}

	console.info('Invalid credentials');
	return null;
};

const logout = () => {
	sessionStorage.removeItem('currentUser');
	window.location.href = 'index.html';
};

const isLogged = () => {
	const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
	if (currentUser) {
		console.info('User is logged in');
		window.location.href = 'dashboard.html';
	}
};

const isNotLogged = () => {
	const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
	if (!currentUser) {
		console.info('User is not logged in');
		window.location.href = 'index.html';
	}
};
