var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_birthday');

firebase.auth().signInWithPopup(provider).then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // The signed-in user info.
    var user = result.user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    // ... 
}).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

firebase.auth().getRedirectResult().then((result) => {
    if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
}).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

console.log(temp);
console.log(auth);