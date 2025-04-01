document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert("Form Submitted");

    const fullname = document.getElementById('fname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value; 
    const dob = document.getElementById('dob').value;

    
    if (!fullname || !email) {
        alert("You need to provide a name and email.");
        return;
    }

    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    
    const formData = {
        name: fullname,
        email: email,
        password: password,
        dob: dob
    };

    const xhr = new XMLHttpRequest();
    xhr.open("Get", "projectSubmit.json", true);
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
