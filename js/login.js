// Plugin options and our code
$("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
		
		//create firebase reference
		var dbRef = new Firebase("https://popping-inferno-4049.firebaseio.com/");
		var contactsRef = dbRef.child('contacts');
		
		//save contact
		$(document).ready(function(){
			$("#submit").click(function(event){
			  event.preventDefault();
			  if( document.querySelector('#name').value != '' || document.querySelector('#email').value != '' ){
				contactsRef
				  .push({
					name: document.querySelector('#name').value,
					email: document.querySelector('#email').value,
					password: document.querySelector('#password').value,
				  });
				  window.location.href = "login.html";
			  } else {
				alert('Please fill atlease name or email!');
			  }
			});
			
			$("#login").click(function(event){
				event.preventDefault();
				var listUsers = null;
				if(document.querySelector('#namelogin').value == "admin" && document.querySelector('#passwordlogin').value == "admin")
					{
						window.location.href = "edit.html";
					}
				contactsRef.on("value", function(snap) {
					console.log(snap);
				  listUsers = snap.val();
				  snap.forEach(function(childSnap){
					if(document.querySelector('#namelogin').value == childSnap.val().name && document.querySelector('#passwordlogin').value == childSnap.val().password)
					{
						window.location.href = "edit.html";
					}
				  });
				});
			});
		});
});