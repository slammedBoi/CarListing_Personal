function sign_in()
{
    var signInForm = document.getElementById("SignInForm")
    var username = signInForm.username.value
    var password = signInForm.password.value

    alert(username + " " + password)
}