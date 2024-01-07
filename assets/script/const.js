export const headerList = document.querySelector(".header-list");

export const mainCostumersTbody = document.querySelector(".main-costumers-tbody");

export const startArray = [
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
export const elNumbers = 320;

const mainCostumersEntries = document.querySelector(".main-costumers-entries");
export const firstDomEntries = mainCostumersEntries.querySelector(".first");
export const lastDomEntries = mainCostumersEntries.querySelector(".last");
export const totalDomEntries = mainCostumersEntries.querySelector(".total");

export const listDomPagination = document.querySelector('.main-costumers-pagination-list');
export const firstLinkPagination = 1;
export const stepLinkPagination = 3;

export const containerDomPagination = document.querySelector(".main-costumers-pagination-container");
