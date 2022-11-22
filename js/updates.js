class Update {
	update_now;
	updates_counter;
	update_btn;

	constructor(up_now) {
		this.update_now = up_now;
		this.updates_counter = JSON.parse(localStorage.getItem('update'));
	}
	
	update_btn_create() {
		this.update_btn = document.createElement('button');
		this.update_btn.classList.add('updates_btn');
		this.update_btn.textContent = 'New update!';
	}

	check_updates() {
		const update_now = this.update_now;
		const updates_counter = this.updates_counter;

		if (update_now > updates_counter) {
			//show link
			console.log('new updates');
			
			document.body.prepend(this.update_btn);
			this.update_btn.onclick = () => {
				localStorage.setItem('update', update_now);
				location.href = 'html/updates/updates.html';
			}
		}else{
			console.log('no updates');
		}
	}
};

const Updates = new Update(4);
Updates.update_btn_create();
Updates.check_updates();