/*var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/



/**
 * Funktion til form validering - med argument og delfunktion
 * Form sendes som objekt til funktionen og dets input elementer tjekkes for indhold
 * og der meldes fejl hvis de ikke haren værdi
 * @param form_object Form objekt
 * @returns {boolean} False hvis et felt er tomt
 */
function validate_dom(form_object) {
    //Sætter var formstatus til 1 - bruges til at angive om formen kan sendes
    var formstatus = 1;
    //Hvis fornavn ikke er udfyldt
    if(!form_object.firstname.value) {

          //Kalder funktion til visning af fejl
          display_error(form_object.firstname, "Du skal udfylde dit fornavn!");
          //Returner false og afbryd scriptet
          return false;
    }

    //Hvis efternavn ikke er udfyldt
    if(!form_object.lastname.value) {
          //Kalder funktion til visning af fejl
          display_error(form_object.lastname, "Du skal udfylde dit efternavn!");
          //Returner false og afbryd scriptet
          return false;
    }

    //Hvis email ikke er udfyldt
    if(!form_object.email.value) {
          //Kalder funktion til visning af fejl
          display_error(form_object.email, "Du skal udfylde din e-mail!");
          //Returner false og afbryd scriptet
          return false;
    }

    //Hvis tlf ikke er udfyldt
    if(!form_object.phone.value) {
          //Kalder funktion til visning af fejl
          display_error(form_object.phone, "Du skal udfylde dit telefon nummer!");
          //Returner false og afbryd scriptet
          return false;
    }

    //Submit form hvis formstatus er true
    if(formstatus) {
        form_object.submit();
    }
}

/**
 * Funktion til at vise og skjule fejl med
 * @param input_object Input elementet som javascript objekt
 * @param string Fejl Meddelelse
 */
function display_error(input_object, string) {

     //Indsætter tilstødende html med fejlbesked efter input feltet
     input_object.insertAdjacentHTML('afterend','<div class="text-error">' + string + '</div>');

     //Eksempel på direkte DOM manipulation med styles
     input_object.style = "background: #ff0";

     //Eksempel på direkte DOM manipulation med tilføjelse af klasse
     input_object.classList.add("field-error");

     input_object.onkeypress = function() {
     //Tjek om fejl er vist - altså om næste sibling har klassen text-error
     if(input_object.nextElementSibling.classList.contains("text-error")) {
           //Fjern input objektets næste sibling
           input_object.nextElementSibling.remove();
           //Nulstil baggrund til auto på input objektet
           input_object.style = "background: auto";
           //Fjern klassen field-error fra input objektet
           input_object.classList.remove("field-error");
     }
   }
}
