function div_login_show() {
	document.getElementById('login-container').style.display = "inherit";
}


function div_login_hide(){
	document.getElementById('login-container').style.display = "none";
}

function div_signup_show() {
	div_login_hide();
	document.getElementById('signup-container').style.display = "inherit";
}

function div_signup_hide() {
	document.getElementById('signup-container').style.display = "none";
}

function div_back_button_hide(){
	div_signup_hide();
	div_login_show();
}