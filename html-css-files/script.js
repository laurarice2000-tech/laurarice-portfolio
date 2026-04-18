function sendEmail() {
	window.location.href = "mailto:gabbykitty2000@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Laura,";
}
				
document.addEventListener("DOMContentLoaded", function() {
	const contactForm = document.getElementById("contact-form");
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (contactForm) {
		contactForm.addEventListener("submit", function(event) {
			event.preventDefault();
			let name = document.getElementById("name").value.trim();
			let email = document.getElementById("email").value.trim();
			let messageElement = document.getElementById("form-message");
					
			if (name && emailRegex.test(email)) {
				messageElement.textContent = "Form submitted successfully!";
				messageElement.classList.add("success");
				messageElement.classList.remove("error");
				setTimeout(function() {
					contactForm.reset();
				}, 2000);
				sendEmail();
			}
			else if (!name) {
				messageElement.textContent = "Please fill out the name field.";
				messageElement.classList.add("error");
				messageElement.classList.remove("success");
			}
			else {
				messageElement.textContent = "Please enter a valid email address.";
				messageElement.classList.add("error");
				messageElement.classList.remove("success");
			}
		});
	}
	
});