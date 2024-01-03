const customers = [
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
	},
	{
		id: 9,
		costomerName: "Floud Mails",
		company: "Yahoo",
		phoneNumber: '(205) 555-0110',
		email: "floyd@yahoo.com",
		country: 'Kiribati',
		statusT: 'Inactive'
	},
	{
		id: 10,
		costomerName: "Ronald Richards",
		company: "Adobe",
		phoneNumber: '(302) 555-0107',
		email: "ronald@adobe.com",
		country: 'Israel',
		statusT: 'Inactive'
	},
	{
		id: 11,
		costomerName: "Marvin McKinney",
		company: "Tesla",
		phoneNumber: '(252) 555-0126',
		email: "marvin@tesla.com",
		country: 'Iran',
		statusT: 'Active'
	},
	{
		id: 12,
		costomerName: "Jerome Bell",
		company: "Google",
		phoneNumber: '(629) 555-0129',
		email: "jerome@google.com",
		country: 'Réunion',
		statusT: 'Active'
	},
	{
		id: 13,
		costomerName: "Kathryn Murphy",
		company: "Microsoft",
		phoneNumber: '(406) 555-0120',
		email: "kathryn@microsoft.com",
		country: 'Curaçao',
		statusT: 'Active'
	},
	{
		id: 14,
		costomerName: "Jacob Jones",
		company: "Yahoo",
		phoneNumber: '(208) 555-0112',
		email: "jacob@yahoo.com",
		country: 'Brazil',
		statusT: 'Active'
	},
	{
		id: 15,
		costomerName: "Kristin Watson",
		company: "Facebook",
		phoneNumber: '(704) 555-0127',
		email: "kristin@facebook.com",
		country: 'Åland Islands',
		statusT: 'Inactive'
	},
	{
		id: 16,
		costomerName: "Jane Cooper",
		company: "Microsoft",
		phoneNumber: '(225) 555-0118',
		email: "jane@microsoft.com",
		country: 'United States',
		statusT: 'Active'
	},
	{
		id: 17,
		costomerName: "Floud Mails",
		company: "Yahoo",
		phoneNumber: '(205) 555-0110',
		email: "floyd@yahoo.com",
		country: 'Kiribati',
		statusT: 'Inactive'
	},
	{
		id: 18,
		costomerName: "Ronald Richards",
		company: "Adobe",
		phoneNumber: '(302) 555-0107',
		email: "ronald@adobe.com",
		country: 'Israel',
		statusT: 'Inactive'
	},
	{
		id: 19,
		costomerName: "Marvin McKinney",
		company: "Tesla",
		phoneNumber: '(252) 555-0126',
		email: "marvin@tesla.com",
		country: 'Iran',
		statusT: 'Active'
	},
	{
		id: 20,
		costomerName: "Jerome Bell",
		company: "Google",
		phoneNumber: '(629) 555-0129',
		email: "jerome@google.com",
		country: 'Réunion',
		statusT: 'Active'
	},
	{
		id: 21,
		costomerName: "Kathryn Murphy",
		company: "Microsoft",
		phoneNumber: '(406) 555-0120',
		email: "kathryn@microsoft.com",
		country: 'Curaçao',
		statusT: 'Active'
	},
	{
		id: 22,
		costomerName: "Jacob Jones",
		company: "Yahoo",
		phoneNumber: '(208) 555-0112',
		email: "jacob@yahoo.com",
		country: 'Brazil',
		statusT: 'Active'
	},
	{
		id: 23,
		costomerName: "Jane Cooper",
		company: "Microsoft",
		phoneNumber: '(225) 555-0118',
		email: "jane@microsoft.com",
		country: 'United States',
		statusT: 'Active'
	},
	{
		id: 24,
		costomerName: "Floud Mails",
		company: "Yahoo",
		phoneNumber: '(205) 555-0110',
		email: "floyd@yahoo.com",
		country: 'Kiribati',
		statusT: 'Inactive'
	},
	{
		id: 25,
		costomerName: "Ronald Richards",
		company: "Adobe",
		phoneNumber: '(302) 555-0107',
		email: "ronald@adobe.com",
		country: 'Israel',
		statusT: 'Inactive'
	},
	{
		id: 26,
		costomerName: "Marvin McKinney",
		company: "Tesla",
		phoneNumber: '(252) 555-0126',
		email: "marvin@tesla.com",
		country: 'Iran',
		statusT: 'Active'
	},
	{
		id: 27,
		costomerName: "Jerome Bell",
		company: "Google",
		phoneNumber: '(629) 555-0129',
		email: "jerome@google.com",
		country: 'Réunion',
		statusT: 'Active'
	},
	{
		id: 28,
		costomerName: "Kathryn Murphy",
		company: "Microsoft",
		phoneNumber: '(406) 555-0120',
		email: "kathryn@microsoft.com",
		country: 'Curaçao',
		statusT: 'Active'
	},
	{
		id: 29,
		costomerName: "Jacob Jones",
		company: "Yahoo",
		phoneNumber: '(208) 555-0112',
		email: "jacob@yahoo.com",
		country: 'Brazil',
		statusT: 'Active'
	},
	{
		id: 30,
		costomerName: "Kristin Watson",
		company: "Facebook",
		phoneNumber: '(704) 555-0127',
		email: "kristin@facebook.com",
		country: 'Åland Islands',
		statusT: 'Inactive'
	}
]

const quantityNumber = 100;
function getMoucheData(customers, quantityNumber) {
	const currentArray = [];
	const costomerName = [];
	const company = [];
	const phoneNumber = [];
	const email = [];
	const country = [];
	const statusT = [];

	customers.forEach((elem) => {
		costomerName.push(elem.costomerName);
		company.push(elem.company);
		phoneNumber.push(elem.phoneNumber);
		email.push(elem.email);
		country.push(elem.country);
		statusT.push(elem.statusT);
	})

	for (i = 0; i < quantityNumber; i++) {
		let randomIndex = Math.floor(Math.random() * customers.length);
		const randomArray = {
			id: i,
			costomerName: costomerName[randomIndex],
			company: company[randomIndex],
			phoneNumber: phoneNumber[randomIndex],
			email: email[randomIndex],
			country: country[randomIndex],
			statusT: statusT[randomIndex]
		};
		currentArray.push(randomArray);
	}
	return currentArray;
}
const array = getMoucheData(customers, quantityNumber)
console.log(array.length)