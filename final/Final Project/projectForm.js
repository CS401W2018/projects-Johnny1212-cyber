document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('myForm');

    if (!form) {
        console.error("Form with ID 'myForm' not found!");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert("Form Submitted");

        const fullnameEl = document.getElementById('fullname');
        const emailEl = document.getElementById('email');
        const passwordEl = document.getElementById('password');
        const ageEl = document.getElementById('age');

        if (!fullnameEl || !emailEl || !passwordEl || !ageEl) {
            alert("One or more input fields are missing from the form.");
            return;
        }

        const fullname = fullnameEl.value.trim();
        const email = emailEl.value.trim();
        const password = passwordEl.value;
        const age = parseInt(ageEl.value, 10);

        if (!fullname || !email) {
            alert("You need to provide a name and email.");
            return;
        }

        if (!age || age < 18) {
            alert("You need to be at least 18 years old.");
            return;
        }

        const formData = {
            name: fullname,
            email: email,
            password: password,
            age: age
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "projectSubmit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById("message").innerHTML = response.message;
                    document.getElementById("myForm").innerHTML = "";
                } catch (err) {
                    console.error("Failed to parse server response:", err);
                }
            } else if (xhr.readyState === 4) {
                alert('Error submitting form.');
            }
        };

        xhr.send(JSON.stringify(formData));
        console.log("Form Data:", formData);
    });
});
