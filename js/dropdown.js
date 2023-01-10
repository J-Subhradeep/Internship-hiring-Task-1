let sidebar = document.getElementById("dd");

var menuItems = ["Home", "About", "Pages", "Blog", "Contact"];

const closeDropDown = () => {
	sidebar.className = "dropdownbarclose";
	sidebar.innerHTML = "";
	document.getElementById("icon").innerHTML = "";
	document
		.getElementById("icon")
		.insertAdjacentHTML(
			"afterbegin",
			`<i class="fa-solid fa-bars" id="bar" onclick="openDropDown()"></i>`
		);
};
const openDropDown = () => {
	sidebar.className = "dropdownbar";
	// <i class="fa-solid fa-xmark-large"></i>
	document.getElementById("icon").innerHTML = "";
	document
		.getElementById("icon")
		.insertAdjacentHTML(
			"afterbegin",
			`<i class="fa-solid fa-xmark" onclick="closeDropDown()" id="bar"></i>`
		);
	if (sidebar) {
		menuItems.map((value) => {
			sidebar.insertAdjacentHTML(
				"afterbegin",
				`<div class="dropdown-menu-item">${value}</div>`
			);
		});
		document.getElementById("dd").insertAdjacentHTML(
			"beforeend",
			`<div class="menu-item-search-icon" id="search-input">
			<input type="text" class="search" placeholder="Search Here..." />
			<i class="fa-solid fa-magnifying-glass"></i>
		</div>`
		);
	}
};
