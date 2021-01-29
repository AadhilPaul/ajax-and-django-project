const title = document.getElementById('title');
const author = document.getElementById('author');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');
const form = document.getElementById('form')

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === name + '=') {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}
var csrftoken = getCookie('csrftoken');


form.addEventListener('submit', function() {
    
    let url = 'http://127.0.0.1:8000/api/post/';
    titleValue = title.value;
    authorValue = author.value;
    contentValue = content.value;

    fetch(url, {
        method: "POST",
        headers: {
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify({"title": titleValue, "content": contentValue, "author": authorValue})
    }).then(function(response) {
    })
})

