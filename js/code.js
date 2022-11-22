location.href = 'html/closed/closed.html';
// main();

function main(){
	const today = new Date();
	const week_day_now = today.getDay() - 1;
	const hours_now = today.getHours();
	const minute_now = today.getMinutes();
	
	// const week_day_now = 0;
	// const hours_now = 13;
	// const minute_now = 10;

	console.log(today.getDate(), today.getMonth(), today.getFullYear());
	
	visit_counter(today.getDate(), today.getMonth());

	if (week_day_now >= 5) {
		no_less(document.querySelector('.lessons'));
		return;
	}

	console.log(`Time: ${hours_now}:${minute_now}`);

	const today_list = lessons[week_day_now];

	const lessons_elem = document.querySelector('.lessons');
	let turn = false;
	let have_less = false;

	for (let i = 0; i < today_list.length; ++i) {

		const list = today_list[i];
		const start = list.get_start();
		const finish = list.get_finish();

		if (hours_now > finish.get_hour() || hours_now == finish.get_hour() && minute_now >= finish.get_min()) { continue; }
		// create info block
		have_less = true;
		const less_elem = document.createElement('div');
		less_elem.classList.add('less_elem');
		
		if (lesson_right_now(hours_now, minute_now, start, finish)) {
			// lesson in right now
			turn = true;
			less_elem.classList.add('right_now');
			less_elem.classList.add('center');
			let block = document.createElement('div');
			create_block(block, list);
			less_elem.appendChild(block);
		} else {
			// show others lessons
			create_block(less_elem, list);
		}
		
		lessons_elem.appendChild(less_elem);
	}

	let first_less_started = check_first_less_started(today_list[0], hours_now, minute_now);

	if (!first_less_started) {
		turn = true;
	}

	if (!turn && have_less) {
		turn_show(lessons_elem);
		turn = !turn;
	}

	if (!have_less && !turn) {
		no_less(lessons_elem);
	}
}

function lesson_right_now(hours_now, minute_now, start, finish) {
	return (hours_now == start.get_hour() && minute_now >= start.get_min() || 
					hours_now >= finish.get_hour() && minute_now <= finish.get_min());
}

function check_first_less_started(less, H, M) {
	let less_start_h = less.get_start().get_hour();
	let less_start_m = less.get_start().get_min();

	if (H < less_start_h || H == less_start_h && M < less_start_m) {
		return false;
	}

	return true;
}

function no_less(less_elem) {
	const turn = document.createElement('div');
	turn.textContent = 'Դաս չկա';
	turn.classList.add('center');
	turn.classList.add('less_elem');
	turn.classList.add('no_less');
	less_elem.prepend(turn);
}

function turn_show(lessons_elem) {
	const turn = document.createElement('div');
	turn.textContent = 'Ընդմիջում';
	turn.classList.add('center');
	turn.classList.add('less_elem');
	turn.classList.add('turn');
	lessons_elem.prepend(turn);
}

function create_block(less_elem, list) {
	less_elem.appendChild(inner_p(list.less_name, ['item']));
	less_elem.appendChild(inner_p(`Դասախոս։ ${list.teacher}`, ['parag']));
	less_elem.appendChild(inner_p(`Լսարան։ ${list.lessons_number} (${list.less_char})`, ['parag']));

	const start_min = min_00(list.start_at.get_min());
	const finish_min = min_00(list.finish_at.get_min());

	less_elem.appendChild(inner_p(list.start_at.get_hour() + ":" + start_min + ' - ' +  list.finish_at.get_hour() + ":" + finish_min, ['parag']));
}

function min_00(min) {
	return min < 10 ? ('0' + min) : min;
}

function inner_p(text, classes = null) {
	const p = document.createElement('p');
	p.innerText = text;

	if (classes != null) {
		for (let i = 0; i < classes.length; ++i) {
			p.classList.add(classes[i]);
		}
	}

	return p;
}

function test(t1, t2) {
	if (t1 == t2) {
		console.log('%cTEST DONE', 'color: green;');
		return;
	}
	
	console.log('%cTEST FAIL', 'color: red;');
}

function check_working_range(day, month, year){
	const limit_year = 2023;
	const limit_month = 10
	const limit_day = 29;
	
	if (year != limit_year) {
		if (month < limit_month) {
			if (day < limit_day) {
				return true;
			}
		}
	}
	
	location.href = 'html/closed/closed.html';
}