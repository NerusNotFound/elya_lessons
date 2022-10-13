class Clock {
	hour;
	minute;

	constructor(h, m) {
		this.hour = h;
		this.minute = m;
	}

	get_hour() { return this.hour; }
	get_min() { return this.minute; }
}

const lessons = [
	[
		{ start_at: new Clock(13, 10), finish_at: new Clock(13, 55), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 7113, teacher: 'Գալոլոյան Գ' },
		{ start_at: new Clock(14, 0), finish_at: new Clock(14, 45), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 7113, teacher: 'Գալոլոյան Գ' },
		{ start_at: new Clock(14, 55), finish_at: new Clock(15, 45), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 7113, teacher: 'Գալոլոյան Գ' },
		{ start_at: new Clock(15, 45), finish_at: new Clock(16, 30), less_name: 'Կառավարչական հաշվառում', lessons_number: 2431, teacher: 'Բարիկյան' },
		{ start_at: new Clock(16, 40), finish_at: new Clock(17, 25), less_name: 'Կառավարչական հաշվառում', lessons_number: 2431, teacher: 'Բարիկյան' },
		{ start_at: new Clock(17, 30), finish_at: new Clock(18, 15), less_name: 'Կառավարչական հաշվառում', lessons_number: 2431, teacher: 'Բարիկյան' },
	],

	[
		{ start_at: new Clock(9, 30), finish_at: new Clock(10, 15), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 2030, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(10, 20), finish_at: new Clock(11, 5), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 2030, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(11, 15), finish_at: new Clock(12, 0), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 3102, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(12, 5), finish_at: new Clock(12, 50), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 3102, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(13, 10), finish_at: new Clock(13, 55), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 3102, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(14, 0), finish_at: new Clock(14, 45), less_name: 'Հարկեր, վճարներ, տուրքեր ', lessons_number: 3102, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(14, 55), finish_at: new Clock(15, 40), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
		{ start_at: new Clock(15, 45), finish_at: new Clock(16, 30), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
		{ start_at: new Clock(16, 40), finish_at: new Clock(17, 25), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
	],

	[
		{ start_at: new Clock(13, 10), finish_at: new Clock(13, 55), less_name: 'Շինարարական արտադրության տեխնոլոգիա և կազմակերպում', lessons_number: 2116, teacher: 'Ղուլյան' },
		{ start_at: new Clock(14, 0), finish_at: new Clock(14, 45), less_name: 'Շինարարական արտադրության տեխնոլոգիա և կազմակերպում', lessons_number: 2116, teacher: 'Ղուլյան' },
		{ start_at: new Clock(14, 55), finish_at: new Clock(15, 40), less_name: 'Շինարարական արտադրության տեխնոլոգիա և կազմակերպում', lessons_number: 2116, teacher: 'Ղուլյան' },
		{ start_at: new Clock(15, 45), finish_at: new Clock(16, 30), less_name: 'Շինարարական արտադրության տեխնոլոգիա և կազմակերպում', lessons_number: 2116, teacher: 'Ղուլյան' },
		{ start_at: new Clock(16, 40), finish_at: new Clock(17, 25), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 2418, teacher: 'Գալոյան Գ.' },
		{ start_at: new Clock(17, 30), finish_at: new Clock(18, 15), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 2418, teacher: 'Գալոյան Գ.' },
		{ start_at: new Clock(18, 25), finish_at: new Clock(19, 10), less_name: 'Գնագոյացումը շինարարության ոլորտում', lessons_number: 2418, teacher: 'Գալոյան Գ.' },
	],

	[
		{ start_at: new Clock(12, 5), finish_at: new Clock(12, 50), less_name: 'Վիճակագրության տեսության հիմունքները', lessons_number: 17302, teacher: 'Եդոյան' },
		{ start_at: new Clock(13, 10), finish_at: new Clock(13, 55), less_name: 'Վիճակագրության տեսության հիմունքները', lessons_number: 17302, teacher: 'Եդոյան' },
		{ start_at: new Clock(14, 0), finish_at: new Clock(14, 45), less_name: 'Վիճակագրության տեսության հիմունքները', lessons_number: 17302, teacher: 'Եդոյան' },
		{ start_at: new Clock(14, 55), finish_at: new Clock(15, 40), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
		{ start_at: new Clock(15, 45), finish_at: new Clock(16, 30), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
		{ start_at: new Clock(16, 40), finish_at: new Clock(17, 25), less_name: 'Մարքեթինգ', lessons_number: 2429, teacher: 'Բեգլարյան Ա.' },
	],

	[
		{ start_at: new Clock(11, 15), finish_at: new Clock(12, 0), less_name: 'Վիճակագրության տեսության հիմունքները', lessons_number: 2241, teacher: 'Եդոյան Տ.' },
		{ start_at: new Clock(12, 5), finish_at: new Clock(12, 50), less_name: 'Վիճակագրության տեսության հիմունքները', lessons_number: 2241, teacher: 'Եդոյան Տ.' },
		{ start_at: new Clock(13, 10), finish_at: new Clock(13, 55), less_name: 'Լոգիստիկա', lessons_number: 2107, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(14, 0), finish_at: new Clock(14, 45), less_name: 'Լոգիստիկա', lessons_number: 2107, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(14, 55), finish_at: new Clock(15, 40), less_name: 'Լոգիստիկա', lessons_number: 2107, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(15, 45), finish_at: new Clock(16, 30), less_name: 'Լոգիստիկա', lessons_number: 2107, teacher: 'Աղաջանյան Հ.' },
		{ start_at: new Clock(16, 40), finish_at: new Clock(17, 25), less_name: 'Լոգիստիկա', lessons_number: 2107, teacher: 'Աղաջանյան Հ.' },
	],
	];

const today = new Date();
const week_day_now = today.getDay() - 1;
const hours_now = today.getHours();
const minute_now = today.getMinutes();

console.log(`hours_now: ${hours_now}`);
console.log(`minute_now: ${minute_now}`);

const today_list = lessons[week_day_now];

const lessons_elem = document.querySelector('.lessons');
let turn = false;
let have_less = false;

for (let i = 0; i < today_list.length; ++i) {

	const list = today_list[i];
	const start = list.start_at;
	const finish = list.finish_at;
	
	if (hours_now > finish.get_hour() || hours_now == finish.get_hour() && minute_now >= finish.get_min()) { continue; }
	// create info block
	have_less = true;
	const less_elem = document.createElement('div');
	less_elem.classList.add('less_elem');
	
	if (hours_now == start.get_hour() && minute_now >= start.get_min()) {
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


function check_first_less_started(less, H, M) {
	let less_start_h = less.start_at.get_hour();
	let less_start_m = less.start_at.get_min();

	if (H < less_start_h || H == less_start_h && M < less_start_m) {
		return false;
	}

	return true;
}

function no_less(less_elem) {
	const turn = document.createElement('div');
	turn.textContent = 'Դաս չկա';
	// turn.classList.add('right_now');
	turn.classList.add('center');
	turn.classList.add('less_elem');
	turn.classList.add('no_less');
	less_elem.prepend(turn);
}

function turn_show(lessons_elem) {
	const turn = document.createElement('div');
	turn.textContent = 'Ընդմիջում';
	// turn.classList.add('right_now');
	turn.classList.add('center');
	turn.classList.add('less_elem');
	turn.classList.add('turn');
	lessons_elem.prepend(turn);
}

function create_block(less_elem, list) {
	less_elem.appendChild(inner_p(list.less_name, ['item']));
	less_elem.appendChild(inner_p('Դասախոս։ ' + list.teacher));
	less_elem.appendChild(inner_p('Լսարան։ ' + list.lessons_number));

	const start_min = min_00(list.start_at.get_min());
	const finish_min = min_00(list.finish_at.get_min());

	less_elem.appendChild(inner_p(list.start_at.get_hour() + ":" + start_min + ' - ' +  list.finish_at.get_hour() + ":" + finish_min));
}

function min_00(min) {
	if (min < 10) {
		return '0' + min
	}

	return min;
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

localStorage.setItem('update', 1);