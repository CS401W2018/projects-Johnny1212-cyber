document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value; 
    const age = parseInt(document.getElementById('age').value, 10);

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
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));

    console.log("Form Data:", formData);
});
