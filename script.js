   $(document).ready(function() {
     $("#submitForm").click(function () {
        //...............email Validation..............
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email = $("#email").val();
        if (email === "") {
          $("#emailError").html("Please enter your email address.");
        } else if (!emailRegex.test(email)) {
          $("#emailError").html("Please enter valid email address.");
        } else {
          $("#emailError").html("");
        }
        // ...........................name Vlaidation..........................

        var name = $("#fname").val();
        var charRegex = /^[a-zA-Z]*$/;
        if (name === "") {
          $("#nameError").html("Please enter your name.");
        } else if (!charRegex.test(name)) {
          $("#nameError").html("Please enter valid name.");
        } else {
          $("#nameError").html("");
        }
        // ................phone Validation.......................
        var phoneRegex = /^\+\d{1,3}-\d{9,10}$/;
        var phone = $("#phone").val();
        if (phone === "") {
          $("#phoneError").html("Please enter your contact details.");
        } else if (!phoneRegex.test(phone)) {
          $("#phoneError").html("Please enter valid phone number.");
        } else {
          $("#phoneError").html("");
        }
        // .................password validation.......................
        var passwordRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,36}$/;
        var password = $("#password").val();
        if (password === "") {
          $("#passwordError").html("Please enter your password");
        } else if (!passwordRegex.test(password)) {
          $("#passwordError").html("Please enter valid password.");
        } else {
          $("#passwordError").html("");
        }

        if (
          $("#passwordError").text() === "" &&
          $("#phoneError").text() === "" &&
          $("#nameError").text() === "" &&
          $("#emailError").text() === ""
        ) {
          $("#success").html("Successfully registered.");
          $("#success").css("display", "flex");
        }else{
          $("#success").css("display", "none");
        }
      });
      $(".toggle-password").click(function () {  
        var passwordInput = $($(this).siblings(".password-input"));
        var icon = $(this);
        if (passwordInput.attr("type") == "password") {
          passwordInput.attr("type", "text");
          icon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
          passwordInput.attr("type", "password");
          icon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
      });
    });