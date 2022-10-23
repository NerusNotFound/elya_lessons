const visiting_days = JSON.parse(localStorage.getItem('visiting_days'));

for (days of visiting_days) {
	const visiting_count = JSON.parse(localStorage.getItem(`visiting_${days}`));
	const [day, month] = days.split('_');
	
	show_visiting(day, month, visiting_count);
}

function show_visiting(day, month, count) {
	const div = document.createElement('div')
				div.classList.add('stat');
	
	const d = document.createElement('p')
				d.classList.add('stat_day');
				d.innerText = day;

	const m = document.createElement('p')
				m.classList.add('stat__month');
				m.innerText = month;

	const y = document.createElement('p')
				y.classList.add('stat__count');
				y.innerText = count;

	div.appendChild(d);
	div.appendChild(m);
	div.appendChild(y);

	document.querySelector('main').appendChild(div);
}
