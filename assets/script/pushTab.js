

export function pushPageTable(arrData, containerElDom, page) {
	page--; //increnemt for count array for '0'
	containerElDom.innerHTML = '';
	const firstIndexElement = page * 8; //start count elenemt for '0'
	const lastIndexElement = page * 8 + 8;
	arrData.map((element, index) => {
		if ((index >= firstIndexElement) & (index < lastIndexElement)) {
			let stateStatusT = element.statusT === "Active" ? "is-active" : "is-inactive";
			const fragmentTbodyTr =
				`<tr class="main-costumers-tbody-tr">
			 <td class="main-costumers-td">${element.costomerName}</td>
			 <td class="main-costumers-td">${element.company}</td>
			 <td class="main-costumers-td">${element.phoneNumber}</td>
			 <td class="main-costumers-td">${element.email}</td>
			 <td class="main-costumers-td">${element.id} ${element.country}</td>
			 <td class="main-costumers-td"> 
					 <button class="main-costumers-btn ${stateStatusT}" > ${element.statusT}</button>
			 </td> 
		 </tr>`
			containerElDom.innerHTML += fragmentTbodyTr;
		}
	})
}

