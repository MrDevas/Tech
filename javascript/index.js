$(document).ready(function () {

    // ** Responsive Nav-bar **
    $(".menu").click(function () {
        $(".nav").toggle();
    });
    $(".menu").click(function () {
        $(".btn").toggle();
    });

    // ** About Read-Toggle **
    $(".read-btn").click(function () {
        $(".btn-para").toggle();
        $(".read-btn").hide();
    });

    //  ** Faq Qus-Toggle **
    $(".faq-ans1").show();
    $(".faq-que1").click(function () {
        $(".faq-ans1").toggle();
        $(".faq-ans2").hide();
        $(".faq-ans3").hide();
        $(".faq-ans4").hide();
        $(".faq-ans5").hide();
    });
    $(".faq-que2").click(function () {
        $(".faq-ans2").toggle();
        $(".faq-ans1").hide();
        $(".faq-ans3").hide();
        $(".faq-ans4").hide();
        $(".faq-ans5").hide();
    });
    $(".faq-que3").click(function () {
        $(".faq-ans3").toggle();
        $(".faq-ans2").hide();
        $(".faq-ans1").hide();
        $(".faq-ans4").hide();
        $(".faq-ans5").hide();
    });
    $(".faq-que4").click(function () {
        $(".faq-ans4").toggle();
        $(".faq-ans2").hide();
        $(".faq-ans3").hide();
        $(".faq-ans1").hide();
        $(".faq-ans5").hide();
    });
    $(".faq-que5").click(function () {
        $(".faq-ans5").toggle();
        $(".faq-ans2").hide();
        $(".faq-ans3").hide();
        $(".faq-ans4").hide();
        $(".faq-ans1").hide();
    });
});

// ** Login-Page Logic **
const mailError = document.getElementById("mail-error");
const passError = document.getElementById("pass-error");
const submitError = document.getElementById("submit-error");

function validateName() {

    const mail = document.getElementById("input-email").value;
    const mailreg = /([a-z0-9]{3,15})+@+([a-z]{4,10})+\.+([a-z]{2,8})/;

    if (mail.length == 0) {
        mailError.innerHTML = "*** Mail is required ***";
        return false;
    }
    if (!mail.match(mailreg)) {
        mailError.innerHTML = "** Enter Valid E-mail **";
        return false;
    }
    mailError.innerHTML = '<i class="fa fa-check-circle" style="font-size:25px;color:green"></i>';
    return true;

}

function validatePass() {

    const pass = document.getElementById("input-pass").value;
    const passreg = /([a-z0-9]{6,15})/;

    if (pass.length == 0) {
        passError.innerHTML = "*** Password is required ***";
        return false;
    }
    if (!pass.match(passreg)) {
        passError.innerHTML = "** Enter Valid Password **";
        return false;
    }
    passError.innerHTML = '<i class="fa fa-check-circle" style="font-size:25px;color:green"></i>';
    return true;
}

function Validate() {
    const mail = document.getElementById("input-email").value;
    const pass = document.getElementById("input-pass").value;

    localStorage.setItem(mail, pass);

    if (mail.length >= 14 && pass.length >= 6) {
        alert("Login Successfully!");
    }
    else if (mail.length >= 14) {
        alert("Enter The Password (Or) Forgot Your Password!");
    }
    else if (pass.length >= 6) {
        alert("Please Enter The E-mail");
    }
    else {
        alert("Please Enter The E-mail & Password");
    }
}

// ** Foget-Page Logic **
const newError = document.getElementById("new-error");
const confError = document.getElementById("conf-error");
function validateNew() {

    const newpass = document.getElementById("input-new").value;
    const newreg = /([a-z0-9]{6,15})/;

    if (newpass.length == 0) {
        newError.innerHTML = "*** Enter the Password ***";
        return false;
    }
    if (!newpass.match(newreg)) {
        newError.innerHTML = "** Atleast 6 Letters **";
        return false;
    }
    newError.innerHTML = '<i class="fa fa-check-circle" style="font-size:25px;color:green"></i>';
    return true;
}

function validateConf() {
    const confpass = document.getElementById("input-conf").value;
    const confreg = /([a-z0-9]{6,15})/;

    if (confpass.length == 0) {
        confError.innerHTML = "*** Re-enter The Password ***";
        return false;
    }
    if (!confpass.match(confreg)) {
        confError.innerHTML = " Enter Correct Password ";
        return false;
    }
    confError.innerHTML = '<i class="fa fa-check-circle" style="font-size:25px;color:green"></i>';
    return true;

}

function Password() {
    const newpass = document.getElementById("input-new").value;
    const confpass = document.getElementById("input-conf").value;

    localStorage.setItem(newpass, confpass);

    if (newpass.length === confpass.length ) {
        alert("Successfully Completed!");
    }
    else if (newpass.length >= 6) {
        alert("Enter The Confirm-Password!");
    }
    else if (confpass.length >= 6) {
        alert("First Enter New Password");
    }
    else {
        alert("Oops Error!!");
    }
}

// ** Contact-Page Logic **
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");

function contactName() {
    const name = document.getElementById("input-name").value;
    const namereg = /[A-Za-z]*\s{1}[A-Za-z]*$/;

    if (name.length == 0) {
        nameError.innerHTML = "*** Name Is Required ***";
        return false;
    }
    if (!name.match(namereg)) {
        nameError.innerHTML = "** Write Full Name **";
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle" style="font-size:28px;color:green"></i>';
    return true;
}

function contactMail() {
    const email = document.getElementById("input-mail").value;
    const emailreg = /([a-z0-9]{3,15})+@+([a-z]{4,10})+\.+([a-z]{2,8})/;

    if (email.length == 0) {
        emailError.innerHTML = "*** Mail is required ***";
        return false;
    }
    if (!email.match(emailreg)) {
        emailError.innerHTML = "** Enter Valid E-mail **";
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle" style="font-size:28px;color:green"></i>';
    return true;
}

function contactMsg() {
    const msg = document.getElementById("input-msg").value;
    const msgreq = 15;
    const msgleft = msgreq - msg.length;

    if (msgleft > 0) {
        msgError.innerHTML = msgleft + " More Characters Required ";
        return false;
    }
    msgError.innerHTML = '<i class="fa fa-check-circle" style="font-size:28px;color:green"></i>';
    return true;
}

function msgSend() {
    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-mail").value;
    const msg = document.getElementById("input-msg").value;

    if ((name.length && email.length && msg.length >= 15) > 0) {
        alert("Send Your Message!!");
    }
    else {
        alert("Oops Not Send!!");
    }
}

// **Pricing Popup-Logic **
const popup =document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
