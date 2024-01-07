export function getData(basicArray, quantityOfElements) {
	const currentArray = [];
	const costomerName = [];
	const company = [];
	const phoneNumber = [];
	const email = [];
	const country = [];
	const statusT = [];

	basicArray.forEach((elem) => {
		costomerName.push(elem.costomerName);
		company.push(elem.company);
		phoneNumber.push(elem.phoneNumber);
		email.push(elem.email);
		country.push(elem.country);
		statusT.push(elem.statusT);
	})

	for (let i = 0; i < quantityOfElements; i++) {
		let randomIndex = Math.floor(Math.random() * basicArray.length);
		const randomObj = {
			id: i + 1,
			costomerName: costomerName[randomIndex],
			company: company[randomIndex],
			phoneNumber: phoneNumber[randomIndex],
			email: email[randomIndex],
			country: country[randomIndex],
			statusT: statusT[randomIndex]
		};
		currentArray.push(randomObj);
	}
	return currentArray;
}

// async function getData() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await response.json();
// 	return data;
// }
