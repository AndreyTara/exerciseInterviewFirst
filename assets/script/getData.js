
function getRandomSourceData() {

	const startArray = [
		{
			id: 1,
			costomerName: "Jane Cooper",
			company: "Microsoft",
			phoneNumber: '(225) 555-0118',
			email: "jane@microsoft.com",
			country: 'United States',
			statusT: 'Active'
		},
		{
			id: 2,
			costomerName: "Floud Mails",
			company: "Yahoo",
			phoneNumber: '(205) 555-0110',
			email: "floyd@yahoo.com",
			country: 'Kiribati',
			statusT: 'Inactive'
		},
		{
			id: 3,
			costomerName: "Ronald Richards",
			company: "Adobe",
			phoneNumber: '(302) 555-0107',
			email: "ronald@adobe.com",
			country: 'Israel',
			statusT: 'Inactive'
		},
		{
			id: 4,
			costomerName: "Marvin McKinney",
			company: "Tesla",
			phoneNumber: '(252) 555-0126',
			email: "marvin@tesla.com",
			country: 'Iran',
			statusT: 'Active'
		},
		{
			id: 5,
			costomerName: "Jerome Bell",
			company: "Google",
			phoneNumber: '(629) 555-0129',
			email: "jerome@google.com",
			country: 'Réunion',
			statusT: 'Active'
		},
		{
			id: 6,
			costomerName: "Kathryn Murphy",
			company: "Microsoft",
			phoneNumber: '(406) 555-0120',
			email: "kathryn@microsoft.com",
			country: 'Curaçao',
			statusT: 'Active'
		},
		{
			id: 7,
			costomerName: "Jacob Jones",
			company: "Yahoo",
			phoneNumber: '(208) 555-0112',
			email: "jacob@yahoo.com",
			country: 'Brazil',
			statusT: 'Active'
		},
		{
			id: 8,
			costomerName: "Kristin Watson",
			company: "Facebook",
			phoneNumber: '(704) 555-0127',
			email: "kristin@facebook.com",
			country: 'Åland Islands',
			statusT: 'Inactive'
		}
	]

	const randomData = startArray.reduce((acc, elem) => {
		acc.costomerName.push(elem.costomerName);
		acc.company.push(elem.company);
		acc.phoneNumber.push(elem.phoneNumber);
		acc.email.push(elem.email);
		acc.country.push(elem.country);
		acc.status.push(elem.status);
		return acc;
	}, {
		costomerName: [],
		company: [],
		phoneNumber: [],
		email: [],
		country: [],
		status: []
	})
	return randomData;
}

function getRandomObj(randomData) {
	const randomObj = Object.keys(randomData).reduce((acc, key) => {
		let randomIndex = Math.floor(Math.random() * randomData[key].length);
		acc[key] = randomData[key][randomIndex];
		return acc;
	}, {})

	return randomObj;
}

export function getRandomMockUserData(quantityOfElements = 320) {
	// я свідмо роблю перестановки стартового массиву з макету, щоб побачити як себе поводить таблиця з данними різної щирирни
	const randomData = getRandomSourceData();

	const currentArray = Array(quantityOfElements).fill(0).reduce((acc, _, index) => {
		const randomObj = getRandomObj(randomData);
		randomObj.id = index + 1;
		acc.push(randomObj);
		return acc;
	}, []);
	return currentArray;
}

// async function getData() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await response.json();
// 	return data;
// }
