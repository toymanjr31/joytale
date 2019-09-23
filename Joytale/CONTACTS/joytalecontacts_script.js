var warning = document.getElementById('warning_submit');

var input_name = document.getElementById('input_name');
var input_email = document.getElementById('input_email');
var input_subject = document.getElementById('input_subject');

var button_submit = document.getElementById('button_submit');
button_submit.disabled = true;
button_submit.style.backgroundColor = "grey"
button_submit.style.color = "white"

button_submit.addEventListener('click', check_message);
input_name.addEventListener('input', check_message);
input_email.addEventListener('input', check_message);
input_subject.addEventListener('input', check_message);

function check_message(){
	var m = "Input ";

	if (input_name.value.length == '' || input_email.value.length == '' || input_subject.value == ''){

		if (input_name.value.length == ''){
			warning.innerHTML = m + " name";
		}

		else if (input_email.value.length == ''){
			warning.innerHTML = m + " email";
		}

		else if (input_subject.value == ''){
			warning.innerHTML = m + " subject";
		}
	}

	else {
		button_submit.disabled = false;
		button_submit.style.backgroundColor = "black"
		
		warning.innerHTML = "";
		
	}
}
