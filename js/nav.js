let menu = document.getElementsByClassName("nav-menu")[0];

var menuItems = ["Home", "About", "Pages", "Blog", "Contact"].reverse();
if (menu)
	menuItems.map((value) => {
		menu.insertAdjacentHTML(
			"afterbegin",
			`<div class="nav-menu-item">${value}</div>`
		);
	});
// menu.textContent = "";
