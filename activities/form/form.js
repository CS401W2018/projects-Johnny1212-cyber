document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    // alert("Form Submitted");
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const age = document.getElementById('age').value;
    if (!fullname || !email){
        alert("Youn need a name and email.")
        return;
    }
    if (!age || !age<18){
        alert("Youn need to be older than 18")
        return;
    }
    const formData ={
        name: fullname,
        email: email,
        password: password,
        age: age
    };

    console.log(formData);
});