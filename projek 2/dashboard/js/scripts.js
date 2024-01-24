/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});



function validateLogin() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    // Check if both email and password fields have data
    if (email === '' || password === '') {
      alert('Tolong isi Password terlebih dahuu!!!');
      return;
    }
  
    // Contoh validasi sederhana, sesuaikan dengan logika validasi di sisi server
    if (email === 'contoh@email.com' && password === 'password123') {
      window.location.href = "index.html";
      
      // Redirect atau lakukan tindakan lain setelah login berhasil
    } else {
      alert('Login gagal. Periksa kembali email dan password Anda.');
    }
  }

  function validateForm() {
    // Basic validation example
    var firstName = document.getElementById('inputFirstName').value;
    var lastName = document.getElementById('inputLastName').value;
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var confirmPassword = document.getElementById('inputPasswordConfirm').value;

    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields must be filled out');
    } else if (password !== confirmPassword) {
      window.location.href = "index.html";
    } else {
        // Form is valid, you can submit the form or perform other actions
        document.getElementById('registrationForm').submit();
    }
}