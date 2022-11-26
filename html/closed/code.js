{
	const now = Math.floor(new Date().getTime() / 60000);
	const start_at = Math.floor(new Date('2023/04/5').getTime() / 60000);

	count(start_at - now);
}

function count(all_minutes) {
	let months= 0;
	let days = 0;
	let hours = 0;
	let minutes = 0;

	// counting
	for (let i = 0; i < all_minutes; ++i) {
		minutes += 1;
		
		if (minutes == 60) {
			++hours;
			minutes = 0;
		}

		if (hours == 24) {
			++days;
			hours = 0;
		}

		if (days == 30) {
			++months;
			days = 0;
		}
	}

	// showing
	if (months != 0) {create_time(months, 'ամիս'); }
	if (days != 0) {create_time(days, 'օր'); }
	if (hours != 0) {create_time(hours, 'ժամ'); }
	if (minutes != 0) {create_time(minutes, 'րոպե'); }
}

function create_time(time, date_name) {
	const p = document.createElement('p');
	p.classList.add('box__time_time');

	p.innerHTML = `${time} ${date_name}`;

	document.querySelector('.box__time').appendChild(p);
}