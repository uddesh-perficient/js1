function fetch() {
    var email = document.getElementById('Email_id').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var age = document.getElementById('age').value;
    document.getElementById('emailid').innerHTML = email;
    document.getElementById('firstname').innerHTML= first_name.charAt(0).toUpperCase() + first_name.slice(1);
    document.getElementById('lastname').innerHTML= last_name.charAt(0).toUpperCase() + last_name.slice(1);
    if (age == '') {
        alert("Please enter your age");
    }
    else if (age > 10) {
        alert("You are a genuis");
    }
    else {
        alert("You are a kid");   
    }
}

