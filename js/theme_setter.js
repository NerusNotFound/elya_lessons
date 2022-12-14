{
theme_setter();

function theme_setter(){
	document.head.appendChild(create_link());
	
	const header = document.createElement('header');
	header.classList.add('center');

	const names = ['Classic', 'Donut', 'B&W'];
	const themes_names = ['theme_classic', 'theme_donat', 'theme_black-white'];
	const div = document.createElement('div');

	for (let i = 0; i < names.length; ++i) {
		const theme = document.createElement('div');
		theme.textContent = names[i];
		theme.classList.add(themes_names[i], 'center', 'theme');
		theme.onclick = () => {
			localStorage.setItem('theme_name', themes_names[i]);
			location.reload();
		};

		div.appendChild(theme);
	}

	header.appendChild(div);
	document.body.appendChild(header);
};

function create_link() {
	const link = document.createElement('link');
	link.rel = "stylesheet";
	link.href = "css/themes.css";

	return link;
}
}