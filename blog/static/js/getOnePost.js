const btn = document.getElementById('get-post');
const div = document.getElementById('posts-div');
let count = 0;

btn.addEventListener('click', function () {
	let url = 'http://127.0.0.1:8000/api/list/';

	if (count >= 23) {
		count = 24;
		btn.disabled = true;
	} else {
		count++;
	}

	fetch(url)
		.then((resp) => resp.json())
		.then((datas) => {
			data = datas[count];
			let htmlString = `<h3>${data.title}</h3><p>${data.content}</p>`;
			div.innerHTML += htmlString;
		});
});
