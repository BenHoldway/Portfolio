$(document).ready(function(){

  ChangeHeader();
  $(window).on('resize', function () {
    ChangeHeader();
  });

  if($(".ProjectContainer").length > 0) ChangeCategory("All");

  window.addEventListener('mouseup',function(event){
    var compressedToggle = document.getElementById('CompressedIconToggle');
    var navLinks = document.getElementById('NavLinks');

    if(event.target != compressedToggle && event.target.parentNode != compressedToggle
      && event.target != navLinks && event.target.parentNode != navLinks)
    {
      document.getElementById('NavLinks').style.display = 'none';
    }
    else
    {
      document.getElementById('NavLinks').style.display = 'block';
    }

  });  

  $(".ProjectButton").on("click", function(){
    ChangeCategory($(this).attr("id").replace("Button", ""));
  })
});




function ChangeHeader()
{
  if(window.innerWidth <= 980)
  {
    $("#HeaderFull").addClass("HeaderHidden")
    $("#HeaderCompressed").removeClass("HeaderHidden");
  }
  else
  {
    $("#HeaderFull").removeClass("HeaderHidden");
    $("#HeaderCompressed").addClass("HeaderHidden");
  }
}

function ChangeCategory(category) {
  $('.ProjectContainer').hide();

  if(category == 'All') $('.ProjectContainer').show();
  else $('.' + category).show();

  $('.ProjectButton').addClass('CategoryActive').not('#' + category + 'Button').removeClass('CategoryActive');

  sessionStorage.Category = category;
  console.log(sessionStorage.Category);
}



/* #region SlideShow */
var slideIndex = 1;

// Next/previous controls
function PlusSlides(n) {
  ShowSlides(slideIndex += n);
}

// Thumbnail image controls
function CurrentSlide(n) {
  ShowSlides(slideIndex = n);
}

function ShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slide");
  let demoImages = document.getElementsByClassName("Demo");

  if (n > slides.length) 
    slideIndex = 1;

  if (n < 1) 
    slideIndex = slides.length;

  for (i = 0; i < slides.length; i++)
    slides[i].style.display = "none";

  for (i = 0; i < demoImages.length; i++) 
    demoImages[i].className = demoImages[i].className.replace(" Active", "");

  slides[slideIndex-1].style.display = "block";
  demoImages[slideIndex-1].className += " Active";
}
/* #endregion */