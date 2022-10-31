class Clock {
	hour;
	minute;

	constructor(h, m) {
		this.hour = h;
		this.minute = m;
	}

	get_hour() { return this.hour; }
	get_min() { return this.minute; }
};

class Lesson {
	start_at;
	finish_at;
	less_name;
	lessons_number;
	teacher;
	less_char;

	constructor(start_h, start_m, finish_h, finish_m, less_name, lesson_number, teacher, less_char) {
		this.start_at = new Clock(start_h, start_m);
		this.finish_at = new Clock(finish_h, finish_m);
		this.less_name =	less_name;
		this.lessons_number =	lesson_number;
		this.teacher = teacher;
		this.less_char = less_char;
	}

	get_start() {
		return this.start_at;
	}
	get_finish() {
		return this.finish_at;
	}
};

const lessons = [
	[
		// new Lesson(0, 0, 1, 1, 'Lesson', 0000, 'teacher', 'char'),
	],

	// [],
	// [],
	// [],
	// [],
];