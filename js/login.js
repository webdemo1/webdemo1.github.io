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
		var aboutusRef = dbRef.child('aboutus');
		var servicesRef = dbRef.child('services');
		var visionRef = dbRef.child('vision');
					aboutusRef.on("value", function(snap) {
							event.preventDefault();
				snap.forEach(function(childSnap){
					if(childSnap.val().content != ''){
						$("#aboutuscontent").html(childSnap.val().content);
					}
				});
			});
			
			servicesRef.on("value", function(snap) {
				event.preventDefault();
				snap.forEach(function(childSnap){
					console.log(childSnap.val());
					$("#servicescontent").html(childSnap.val().content);
					$("#servicesimg1").attr('src', childSnap.val().img1);
					$("#servicesimg2").attr('src', childSnap.val().img2);
					$("#servicesimg3").attr('src', childSnap.val().img3);
					$("#servicesimg4").attr('src', childSnap.val().img4);
					$("#servicesimg5").attr('src', childSnap.val().img5);
					$("#servicesimg6").attr('src', childSnap.val().img6);
					$("#servicesimg7").attr('src', childSnap.val().img7);
					$("#servicesimg8").attr('src', childSnap.val().img8);
					$("#servicesimg9").attr('src', childSnap.val().img9);
				});
			});
			
			visionRef.on("value", function(snap) {
				event.preventDefault();
				snap.forEach(function(childSnap){
					console.log(childSnap.val());
					$("#visioncontent1").html(childSnap.val().content1);
					$("#visioncontent2").html(childSnap.val().content2);
					$("#visionimg1").attr('src', childSnap.val().img1);
					$("#visionimg2").attr('src', childSnap.val().img2);
					$("#visionimg3").attr('src', childSnap.val().img3);

				});
			});
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
				  alert("Register Done!");
			  } else {
				alert('Please fill atlease name or email!');
			  }
			});
			
			$("#login").click(function(event){
				event.preventDefault();
				contactsRef.on("value", function(snap) {
				  snap.forEach(function(childSnap){
					if(document.querySelector('#namelogin').value == childSnap.val().name && document.querySelector('#passwordlogin').value == childSnap.val().password)
					{
						window.location.href = "edit.html";
					}
				  });
				});
			});
			
			/* Edit js */
			$("textarea").jqte();
			$("#aboutusbutton").click(function(){
				event.preventDefault();
				aboutusRef
				  .push({
					content: $("#aboutusadmin").val(),
				  });
				  
				  alert("Update Done!");
			});
			
			$("#servicesbutton").click(function(){
				event.preventDefault();
				console.log($("#servicesadmin").val());
				$("#aboutuscontent").html($("#servicesadmin").val());
				servicesRef
				  .push({
					content: $("#servicesadmin").val(),
					img1: $("#servicesimg1admin").val(),
					img2: $("#servicesimg2admin").val(),
					img3: $("#servicesimg3admin").val(),
					img4: $("#servicesimg4admin").val(),
					img5: $("#servicesimg5admin").val(),
					img6: $("#servicesimg6admin").val(),
					img7: $("#servicesimg7admin").val(),
					img8: $("#servicesimg8admin").val(),
					img9: $("#servicesimg9admin").val(),
				  });
				  alert("Update Done!");
			});
			
			$("#visionbutton").click(function(){
				event.preventDefault();
				console.log($("#visioncontent1admin").val());
				$("#aboutuscontent").html($("#aboutusadmin").val());
				visionRef
				  .push({
					content1: $("#visioncontent1admin").val(),
					content2: $("#visioncontent2admin").val(),
					img1: $("#visionimg1admin").val(),
					img2: $("#visionimg2admin").val(),
					img3: $("#visionimg3admin").val(),
				  });
				  alert("Update Done!");
			});
		});
});