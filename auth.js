function generateUID(name) {
  const prefix = name.charAt(0).toUpperCase();
  const uniqueNumber = Math.floor(100 + Math.random() * 900);
  return `${prefix}${uniqueNumber}`;
}

function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      const uid = generateUID(email);
      firebase.database().ref("students/" + user.uid).set({
        email: email,
        uid: uid,
        fees: {},
        results: {},
        class: null
      });
      alert("Signup successful! Your UID is: " + uid);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      if (email === "9851123356" && pass === "Anup9851") {
        window.location.href = "adminDashboard.html";
      } else {
        window.location.href = "studentDashboard.html";
      }
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

function resetPassword() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Enter your email to reset password.");
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => alert("Password reset email sent."))
    .catch((err) => alert(err.message));
}