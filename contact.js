
/*Hamburger menu*/
  //Select the hamburger icon
const hamBurger = document.querySelector(".hamburger");
  //Select the list of navigation links
const navLinks = document.querySelector(".nav-link");

  // Event listener to the hamburger icon
hamBurger.addEventListener("click", function(){
    // When clicked, toggle the 'active' class on the navigation links.
    navLinks.classList.toggle("active");
});

/*Form validation*/
  // Select form input elements
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const studentNumber = document.getElementById("number");
const subject = document.getElementById("subject");
const message= document.getElementById("message");
const form = document.getElementById("form");
const otherQuestionContainer = document.getElementById("other-question-container"); 
const otherDetail = document.getElementById("other_detail");

  // Select error message elements
const errorMessages1 = document.getElementById("errors");
const errorMessages2 = document.getElementById("email_errors");
const errorMessages4 = document.getElementById("number_errors");
const errorMessages5 = document.getElementById("subject_errors");
const errorMessages3 = document.getElementById("message_errors");
const errorMessages6 = document.getElementById("other_errors");


// This listener needs to be set up immediately so it can react to user changes.
subject.addEventListener('change', function() {
    // Check if the selected value is 'Question'
    if (this.value === 'Question') {
        otherQuestionContainer.style.display = 'block'; // Show the text box
        otherDetail.focus();
    } else {
        otherQuestionContainer.style.display = 'none'; // Hide the text box
        otherDetail.value = ''; // Clear the value when hidden
    }
});

//form validation

form.addEventListener('submit', (e)=>{ 
  e.preventDefault();

  let isValid = true
  const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const student_number_check = /^\d{9}$/;

  // Name validation
  if(fullName.value.trim() === '' || fullName.value == null) {
      showError(fullName, errorMessages1, 'Name is required'); 
      isValid = false;
  } else {
      clearError(fullName, errorMessages1);
  }

  // Email validation
  if(!email.value.match(email_check)) {
      showError(email, errorMessages2, "Enter correct email");
      isValid = false;
  } else {
      clearError(email, errorMessages2);
  }
  
  // Number validation
  if (studentNumber.value.trim() === '') {
      showError(studentNumber, errorMessages4, 'Student number is required.');
      isValid = false;
  } else if (!studentNumber.value.match(student_number_check)) {
      showError(studentNumber, errorMessages4, 'Enter a valid 9-digit student number.');
      isValid = false;
  } else {
      clearError(studentNumber, errorMessages4);
  }

  // Subject validation 
  if (subject.value === '') { 
      showError(subject, errorMessages5, 'Please select a subject from the list.');
      isValid = false;
  } else {
      clearError(subject, errorMessages5);
  }

  // Conditional Validation for "Other Question" Box
  if (subject.value === 'Question' && otherDetail.value.trim() === '') {
      showError(otherDetail, errorMessages6, 'Please specify the subject details.');
      isValid = false;
  } else {
      // Ensures the error is cleared if the field is visible but valid, or hidden.
      clearError(otherDetail, errorMessages6);
  }

  // Message validation
  if (message.value.trim() === "") {
      showError(message, errorMessages3, 'Message is required.');
      isValid = false;
  } else {
      clearError(message, errorMessages3);
  }

  // submission of form
  if (isValid) {
      window.location.href = form.action; 
  }
});


//Show error message and the icon
function showError(inputElement, errorMessageElement, message) {
    inputElement.classList.add('error-input'); 
    
    errorMessageElement.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
}

//red border
function clearError(inputElement, errorMessageElement) {
    inputElement.classList.remove('error-input'); 
    
    errorMessageElement.textContent = '';
}


/*Back to top button*/
  //Get the button element
let backToTopBtn = document.getElementById("backToTopBtn");

  //When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  // visibility of the "Back to Top" button.
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

  //when the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' 
    
  });

}