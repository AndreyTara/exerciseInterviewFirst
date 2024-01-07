// import { headerList} from './const.js'
// import { fillMenu } from './fillMenu.js'
// fillMenu(headerList);

import {
	startArray,
	elNumbers,
	mainCostumersTbody,
	entriesValue,
	pushPaginationValue
} from './const.js'
import { getData } from './getData.js'
import { pushPageTable } from './pushTab.js'
import { pushPageEntreis } from './pushEntries.js'
import { pushPagination } from './pushPagination.js'

function main() {
	let currentPage = 1; //start for '1'
	const customers = getData(startArray, elNumbers);

	pushPageTable(customers, mainCostumersTbody, currentPage);
	pushPageEntreis(customers, entriesValue, currentPage);


	// function pushPagination(arrData, pushPaginationValue, currentPage) {
	// 	const [
	// 		firstLink,
	// 		stepLink,
	// 		paginationListDOM
	// 	] = pushPaginationValue
	// 	paginationListDOM.innerHTML = '';
	// 	let [fragmentTbodyTr, styleIsActive] = '';
	// 	const lastLink = Math.ceil(arrData.length / 8);
	// 	let indexLink = [0, 0, 0, 0, 0, 0];
	// 	let indexPoint = [0, 0, 0, 0, 0, 0];
	// 	if (lastLink < 7) {
	// 		indexLink = [1, 2, 3, 4, 5, 6];
	// 		indexPoint = [0, 0, 0, 0, 0, 0];
	// 	} else if (currentPage <= stepLink) {
	// 		indexLink = [firstLink, firstLink + 1, firstLink + 2, firstLink + 3, firstLink + 4, lastLink];
	// 		indexPoint = [0, 0, 0, 0, firstLink + 4, 0];
	// 	} else if (currentPage >= lastLink - stepLink) {
	// 		indexLink = [firstLink, lastLink - 4, lastLink - 3, lastLink - 2, lastLink - 1, lastLink]
	// 		indexPoint = [0, lastLink - 4, 0, 0, 0, 0];
	// 	} else if ((currentPage <= lastLink - stepLink) & (currentPage > stepLink)) {
	// 		indexLink = [firstLink, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, lastLink]
	// 		indexPoint = [0, currentPage - 2, 0, 0, 0, currentPage + 2, 0];
	// 	}

	// 	for (let i = 1; i < lastLink + 1; i++) {
	// 		let currentIndexId = indexLink[i - 1];
	// 		if (typeof (indexLink[i - 1]) === 'number') {
	// 			let currentValue = currentIndexId;
	// 			let currentStyle = 'main-costumers-link'

	// 			if (indexLink[i - 1] === indexPoint[i - 1]) {
	// 				currentValue = '...'; //...&#8230;
	// 				currentStyle = '';
	// 			} else {
	// 				currentValue = currentIndexId;
	// 				currentStyle = 'main-costumers-link';
	// 			}

	// 			if (currentPage === currentIndexId) {
	// 				styleIsActive = 'is-active';
	// 			}

	// 			fragmentTbodyTr = `<li class=".main-costumers-item" > 
	// 			<a class="${currentStyle} ${styleIsActive}" id='link-${currentIndexId}' href=""> 
	// 			${currentValue} 	</a> </li>`
	// 			paginationListDOM.innerHTML += fragmentTbodyTr;
	// 			styleIsActive = '';
	// 		}
	// 	}
	// }



	pushPagination(customers, pushPaginationValue, currentPage);


	const paginationListDOM = document.querySelector('.main-costumers-paganation-list');
	const paginationContainerDOM = document.querySelector(".main-costumers-pagination-container");

	function offsetButton(
		customers,
		paginationContainerDOM,
		entriesValue,
		mainCostumersTbody,
		paginationListDOM,
		pushPaginationValue
	) {
		paginationContainerDOM.addEventListener('click', (e) => {
			e.preventDefault()
			let nextSlideIndexId;
			const pushSlideIndexId = +e.target.id.split('-')[1];
			let itemPrev = paginationListDOM.querySelector('.is-active');
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
			} else if (e.target.id === 'link') {
				// захист від помилок тик до контейнеру
				return;
			} else if (e.target.id === 'nextBtnSlide') {
				// жмаканя на 'next'
				nextSlideIndexId = prevSlideIndexId + 1;
				if (nextSlideIndexId > maxSlideIndexId) {
					nextSlideIndexId = maxSlideIndexId;
					return;
				}
				itemNext = paginationListDOM.querySelector('#link-' + `${nextSlideIndexId}`);
				itemNext.classList.add("is-active");
				itemPrev.classList.remove("is-active");

			} else if (e.target.id === 'prevBtnSlide') {
				// жмаканя на 'prev'
				nextSlideIndexId = prevSlideIndexId - 1;
				if (nextSlideIndexId < 1) {
					nextSlideIndexId = 1;
					return;
				}
				itemNext = paginationListDOM.querySelector('#link-' + `${nextSlideIndexId}`);
				itemNext.classList.add("is-active");
				itemPrev.classList.remove("is-active");
			} else if (typeof (pushSlideIndexId) === 'number') {
				// жмаканя на 'number'
				nextSlideIndexId = pushSlideIndexId;
				itemNext = paginationListDOM.querySelector('#link-' + `${nextSlideIndexId}`);
				itemNext.classList.add("is-active");
				itemPrev.classList.remove("is-active");
			}

			pushPageEntreis(customers, entriesValue, nextSlideIndexId);
			pushPageTable(customers, mainCostumersTbody, nextSlideIndexId);
			pushPagination(customers, pushPaginationValue, nextSlideIndexId)
		})
	}

	offsetButton(
		customers,
		paginationContainerDOM,
		entriesValue,
		mainCostumersTbody,
		paginationListDOM,
		pushPaginationValue
	);
}

main()