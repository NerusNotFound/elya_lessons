const update_now = 2;
const updates_counter = JSON.parse(localStorage.getItem('update'));
// <button class="updates_btn">New update!</button>
const update_btn = document.createElement('button');
			update_btn.classList.add('updates_btn');
			update_btn.textContent = 'New update!';

if (update_now > updates_counter) {
	//show link
	console.log('news');
	document.body.prepend(update_btn);
	update_btn.onclick = () => {
		localStorage.setItem('update', update_now);
		location.href = '../html/updates/updates.html';
	}
}else{
	console.log('no news');
}

