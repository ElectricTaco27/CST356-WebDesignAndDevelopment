function initializeLogin() {

    $('#error').hide();

    $('#submit-btn').click(function(event) {
         if (validateLogin()) {
            alert("Submitting Login");
         }
    });
}

function validateLogin() {
    if ($('#username').val().length == 0) {
        displayError("Username must be entered.");
        return false;
    }
    if ($('#password').val().length == 0) {
        displayError("Password name must be entered.");
        return false;
    }
    return true;
}

function displayError(error) {
    $('#error').text(error);
    $('#error').show();
}