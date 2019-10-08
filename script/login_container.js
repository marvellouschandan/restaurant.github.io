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
 
function showPassword(){
 	var x = document.getElementById("password");

 	if(x.type ==="password")
 	{
 		x.type = "text";
 		document.getElementById("eye").setAttribute("class","fas fa-eye-slash");
 	}
 	else{
 	 	x.type = "password";
 	 	document.getElementById("eye").setAttribute("class","fas fa-eye");
 	}
}

function showmePassword(){
 	var x = document.getElementById("signUpPassword");

 	if(x.type ==="password")
 	{
 		x.type = "text";
 		document.getElementById("myeye").setAttribute("class","fas fa-eye-slash");
 	}
 	else{
 	 	x.type = "password";
 	 	document.getElementById("myeye").setAttribute("class","fas fa-eye");
 	}
}