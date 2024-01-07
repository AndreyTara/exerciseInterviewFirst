export function fillMenu(classNameDom) {
	classNameDom.addEventListener("click", (e) => {
		const prevСlassNameActiveLink = classNameDom.querySelector('.is-active');
		if (e.target.id === e.currentTarget.id) {
			return;
		}
		if (prevСlassNameActiveLink) {
			prevСlassNameActiveLink.classList.remove("is-active");
		}
		const linkId = e.target.dataset.id;
		const nextActiveLink = classNameDom.querySelector(`#${linkId}`);
		nextActiveLink.classList.add("is-active");
	});
}