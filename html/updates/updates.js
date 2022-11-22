/*
<div class="update__post">
	<h2 class="update__post_header">News header</h2>
	<p class="update__post_text">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, dolorem?
	</p>
</div>
*/

let updates = [];

class Post{
	_header = "(no header)";
	_text = "(no text)";

	constructor(header = null, text = null) {
		if (!(header ?? text)) {
			return;
		}
		
		this._header = header;
		this._text = text;
		
		updates.push(this);
	}

	show() {
		const update_elem = document.querySelector('.updates');

		const update__post = document.createElement('div'); 
					update__post.classList.add('update__post');

		const update__post_header = document.createElement('h2'); 
					update__post_header.classList.add('update__post_header');
					update__post_header.innerText = this._header;

		const update__post_text = document.createElement('p'); 
					update__post_text.classList.add('update__post_text');
					update__post_text.innerHTML = this._text;

		
		update__post.appendChild(update__post_header);
		update__post.appendChild(update__post_text);
		update_elem.appendChild(update__post);
	}
}

new Post('', '');
new Post('23.10.2022', '- Ստատիստիկայի էջ<br>- Bug fix');
new Post('19.10.2022', '- Init updates page');

// show updates
for (let i = 0; i < updates.length; ++i) {
	updates[i].show();
}

{
	const update_elem = document.querySelector('.updates');
	const cyrcle = document.createElement('div');
	cyrcle.classList.add('end');
	update_elem.appendChild(cyrcle);
}
