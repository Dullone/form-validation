$(document).ready(function() {
	$("#form").validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			"confirm-email": {
				required: true,
				equalTo: "#email",
			},
			password: {
				required: true,
				minlength: 6,
			},
			"confirm-password" : {
				required: true,
				minlength: 6,
				equalTo: "#password",
			},
			zipcode: {
				minlength: 5,
				number: true,
			},

		},
		messages: {
			email: {
				required: "Please enter an email.",
			},
			"confirm-email": {
				required: "Please re-enter your email",
				equalTo: "Must match your email.",
			},
			password: {
				required: "Please enter a password.",
			},
			"confirm-password": {
				required: "Please re-enter your password.",
				equalTo: "Must match your password.",
			},
			zipcode: {
				number: "Please enter only numbers.",
			},
		}
	})
});