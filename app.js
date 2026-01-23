document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stop actual submit

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Form submitted! (For now, check console)");
});
