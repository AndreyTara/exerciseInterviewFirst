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

const quantityNumber = 50;
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
		const randomObj = {
			id: i,
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

const customers = getMoucheData(startArray, quantityNumber);


function addFillLinkMenu(classNameList) {
	classNameList.addEventListener("click", (e) => {
		const prevСlassNameActiveLink = classNameList.querySelector('.is-active');
		if (e.target.id === e.currentTarget.id) {
			return;
		}
		if (prevСlassNameActiveLink) {
			prevСlassNameActiveLink.classList.remove("is-active");
		}
		const linkId = e.target.dataset.id;
		const nextActiveLink = classNameList.querySelector(`#${linkId}`);
		nextActiveLink.classList.add("is-active");
	});
}

const headerList = document.querySelector(".header-list");
addFillLinkMenu(headerList);


// const ++++++++++++++++++++++


let currentSlideTable = 1; //start for '1'

const mainCostumersTbody = document.querySelector(".main-costumers-tbody");

function pushListTable(arrayCuctomers, mainCostumersTbody, currentSlideTable) {
	mainCostumersTbody.innerHTML = '';
	const firstIndex = currentSlideTable * 8 - 8;
	const lastIndex = currentSlideTable * 8;
	arrayCuctomers.map((customer, index) => {
		if ((index >= firstIndex) & (index < lastIndex)) {
			let stateStatusT = customer.statusT === "Active" ? "is-active" : "is-inactive";
			const fragmentTbodyTr =
				`<tr class="main-costumers-tbody-tr">
			 <td class="main-costumers-td">${customer.costomerName}</td>
			 <td class="main-costumers-td">${customer.company}</td>
			 <td class="main-costumers-td">${customer.phoneNumber}</td>
			 <td class="main-costumers-td">${customer.email}</td>
			 <td class="main-costumers-td">${customer.id} ${customer.country}</td>
			 <td class="main-costumers-td"> 
					 <button class="main-costumers-btn ${stateStatusT}" > ${customer.statusT}</button>
			 </td> 
		 </tr>`
			mainCostumersTbody.innerHTML += fragmentTbodyTr;
		}
	})
}
pushListTable(customers, mainCostumersTbody, currentSlideTable);


const mainCostumersEntries = document.querySelector(".main-costumers-entries");
// area change Entreis Table
function pushCountEntreisTable(customers, mainCostumersEntries, currentSlideTable) {
	const firstNumberEntries = mainCostumersEntries.querySelector(".first");
	const lastNumberEntries = mainCostumersEntries.querySelector(".last");
	const totalNumberEntries = mainCostumersEntries.querySelector(".total");
	const totalCountElement = customers.length;
	totalNumberEntries.textContent = totalCountElement;
	const firstCountElement = currentSlideTable * 8 - 7;
	firstNumberEntries.textContent = firstCountElement;
	const lastCountElement = currentSlideTable * 8;
	if (totalCountElement >= lastCountElement) {
		lastNumberEntries.textContent = lastCountElement;
	} else {
		lastNumberEntries.textContent = totalCountElement;
	}
}
pushCountEntreisTable(customers, mainCostumersEntries, currentSlideTable);


function pushScrollButtonSlide(customers, mainCostumersButtonCountSlide, currentSlideTable) {
	const totalCountButton = Math.ceil(customers.length / 8);
	mainCostumersButtonCountSlide.innerHTML = '';
	let styleIsActive = '';
	for (let i = 1; i < totalCountButton + 1; i++) {
		if (currentSlideTable === i) {
			styleIsActive = 'is-active';
		}
		let fragmentTbodyTr = `<button class="count-button ${styleIsActive}" type="button"  id='id-${i}'>${i}</button>`
		styleIsActive = '';
		mainCostumersButtonCountSlide.innerHTML += fragmentTbodyTr;
	}
}


const mainCostumersButtonCountSlide = document.querySelector('.main-costumers-button-count-slide');
pushScrollButtonSlide(customers, mainCostumersButtonCountSlide, currentSlideTable)


const mainCostumersButtonNavSlide = document.querySelector(".main-costumers-button-nav-slide");

function offsetButton(customers, mainCostumersButtonNavSlide, mainCostumersButtonCountSlide, mainCostumersEntries, mainCostumersTbody) {
	mainCostumersButtonNavSlide.addEventListener('click', (e) => {
		let nextSlideIndexId = 0;
		const pushSlideIndexId = +e.target.id.split('-')[1];
		let itemPrev = mainCostumersButtonCountSlide.querySelector('.is-active');
		let prevSlideIndexId = +itemPrev.id.split('-')[1];
		let itemNext = {};
		let maxSlideIndexId = Math.ceil(customers.length / 8);
		if (e.target.id === itemPrev.id) {
			return;
		}
		if (e.target.id === 'arrowButtonContainer') {
			// захист від помилок тик до контейнеру
			return;
		} else if (e.target.id === 'scrollButtonContainer') {
			// захист від помилок тик до контейнеру
			return;
		} else if (e.target.id === 'scrollButtonPoints') {
			// захист від помилок тик до контейнеру
			return;
		} else if (e.target.id === 'nextBtnSlide') {
			// жмаканя на 'next'
			nextSlideIndexId = prevSlideIndexId + 1;
			if (nextSlideIndexId > maxSlideIndexId) {
				nextSlideIndexId = maxSlideIndexId;
				return;
			}
			itemNext = mainCostumersButtonCountSlide.querySelector('#id-' + `${nextSlideIndexId}`);
			itemNext.classList.add("is-active");
			itemPrev.classList.remove("is-active");

		} else if (e.target.id === 'prevBtnSlide') {
			// жмаканя на 'prev'
			nextSlideIndexId = prevSlideIndexId - 1;
			if (nextSlideIndexId < 1) {
				nextSlideIndexId = 1;
				return;
			}
			itemNext = mainCostumersButtonCountSlide.querySelector('#id-' + `${nextSlideIndexId}`);
			itemNext.classList.add("is-active");
			itemPrev.classList.remove("is-active");
		} else if (typeof (pushSlideIndexId) === 'number') {
			// жмаканя на 'number'
			nextSlideIndexId = pushSlideIndexId;
			itemNext = mainCostumersButtonCountSlide.querySelector('#id-' + `${nextSlideIndexId}`);
			itemNext.classList.add("is-active");
			itemPrev.classList.remove("is-active");
		}

		pushCountEntreisTable(customers, mainCostumersEntries, nextSlideIndexId);
		pushListTable(customers, mainCostumersTbody, nextSlideIndexId);

	})
}

offsetButton(customers, mainCostumersButtonNavSlide, mainCostumersButtonCountSlide, mainCostumersEntries, mainCostumersTbody);
