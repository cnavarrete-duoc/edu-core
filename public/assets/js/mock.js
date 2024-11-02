const createMockUsers = () => {
	const roles = [
		{
			roleId: 1,
			roleName: 'Administrador',
		},
		{
			roleId: 2,
			roleName: 'Profesor',
		},
		{
			roleId: 3,
			roleName: 'Estudiante',
		},
	];

	const users = [
		{
			userId: 1,
			name: 'John',
			lastname: 'Doe',
			email: 'admin@educore.cl',
			password: 'admin123',
			photo: 'https://mighty.tools/mockmind-api/content/human/65.jpg',
			roleId: 1,
			courses: [],
		},
		{
			userId: 2,
			name: 'Marie',
			lastname: 'Curie',
			email: 'marie.curie@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/44.jpg',
			password: 'prof123',
			roleId: 2,
			courses: [1],
		},
		{
			userId: 3,
			name: 'Galileo',
			lastname: 'Galilei',
			email: 'galileo.galilei@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/57.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 4,
			name: 'Ada',
			lastname: 'Lovelace',
			email: 'ada.lovelace@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 5,
			name: 'Albert',
			lastname: 'Einstein',
			email: 'albert.einstein@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/60.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 6,
			name: 'Charlotte',
			lastname: 'Cooper',
			email: 'charlotte.cooper@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/49.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 7,
			name: 'Isaac',
			lastname: 'Newton',
			email: 'isaac.newton@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/75.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 8,
			name: 'Leonardo',
			lastname: 'da Vinci',
			email: 'leonardo.davinci@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/41.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 9,
			name: 'Nikola',
			lastname: 'Tesla',
			email: 'nikola.tesla@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/39.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 10,
			name: 'Stephen',
			lastname: 'Hawking',
			email: 'stephen.hawking@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/61.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 11,
			name: 'Richard',
			lastname: 'Feynman',
			email: 'richard.feynman@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/59.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 12,
			name: 'Carl',
			lastname: 'Sagan',
			email: 'carl.sagan@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/4.jpg',
			password: 'stud123',
			roleId: 3,
			courses: [1, 2, 3],
		},
		{
			userId: 13,
			name: 'Buster',
			lastname: 'Keaton',
			email: 'buster.keaton@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/73.jpg',
			password: 'prof123',
			roleId: 2,
			courses: [2],
		},
		{
			userId: 14,
			name: 'Lucille',
			lastname: 'Ball',
			email: 'lucille.ball@educore.cl',
			photo: 'https://mighty.tools/mockmind-api/content/human/9.jpg',
			password: 'prof123',
			roleId: 2,
			courses: [3],
		},
	];

	const courses = [
		{
			courseId: 1,
			courseName: 'Matemáticas',
		},
		{
			courseId: 2,
			courseName: 'Historia',
		},
		{
			courseId: 3,
			courseName: 'Ciencias',
		},
		{
			courseId: 4,
			courseName: 'Lenguaje',
		},
	];

	sessionStorage.setItem('users', JSON.stringify(users));
	sessionStorage.setItem('roles', JSON.stringify(roles));
	sessionStorage.setItem('courses', JSON.stringify(courses));
};

createMockUsers();
