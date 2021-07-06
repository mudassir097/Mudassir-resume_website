// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCOyj6Uba-aZ3m07W7O9GFMyD65tO7tsCA",
  authDomain: "mudassir-resume.firebaseapp.com",
  databaseURL: "https://mudassir-resume.firebaseio.com",
  projectId: "mudassir-resume",
  storageBucket: "mudassir-resume.appspot.com",
  messagingSenderId: "1074120169697",
  appId: "1:1074120169697:web:328a15e9baed30fa1bbfa0",
  measurementId: "G-T21X6TGHPK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);

  
  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
   
    email:email,
    subject:subject,
    message:message
  });
}