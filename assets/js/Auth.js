const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});




const firebaseConfig = {
    apiKey: "AIzaSyCUm6bKm6MePoL8bNesUZwIco1iIpGIxNU",
    authDomain: "getthisticket.firebaseapp.com",
    projectId: "getthisticket",
    storageBucket: "getthisticket.appspot.com",
    messagingSenderId: "903644308064",
    appId: "1:903644308064:web:2d52bd24b147d2e38ed905",
    measurementId: "G-9M6ENKX63W"
};

firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            signUpSuccess(email, full_name);
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}


// Set up our login function
function login() {
    // Get all our input fields
    var email = document.getElementById('LoginEmail').value;
    var password = document.getElementById('LoginPassword').value;

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return;
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            // Signed in
            var user = userCredential.user;
            // Redirect to a PHP script to set session variables
            window.location.href = "index.php"
        })
        .catch(function (error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}


// Function to set session variables using AJAX
function setSessionVariables(email) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "set_session.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Session variables set successfully
        }
    };
    xhr.send("email=" + email);
}






// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

// Function to handle sign up with Google
function signUpWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    // Sign up with Google popup
    auth.signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // You can handle user data here or redirect to another page
            signInSuccess(token);
        })
        .catch(function (error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used
            var credential = error.credential;
            alert(errorMessage);
        });
}

// Function to handle sign in with Google
function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    // Sign in with Google popup
    auth.signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // You can handle user data here or redirect to another page
            signInSuccess(token);
        })
        .catch(function (error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used
            var credential = error.credential;
            alert(errorMessage);
        });
}


function signInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            console.log("Signed in with Facebook:", user.displayName);
            // Optionally, you can redirect the user or perform other actions here
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error signing in with Facebook:", errorMessage);
        });
}

// Function for signing up with Facebook
function signUpWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
            console.log("Signed up with Facebook:", user.displayName);
            // Optionally, you can redirect the user or perform other actions here
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Error signing up with Facebook:", errorMessage);
        });
}


// After successful sign-in or sign-up
function signInSuccess(email) {
    // Retrieve redirect URL
    const redirectUrl = document.querySelector("#redirectUrl").value;
    // Redirect to the specified URL
    window.location.href = redirectUrl;
}

// After successful sign-up
function signUpSuccess(email, username) {
    // Retrieve redirect URL
    const redirectUrl = document.querySelector("#redirectUrl").value;
    // Redirect to the specified URL
    window.location.href = redirectUrl;
}
