$(document).ready(function(){

  ChangeHeader();
  $(window).on('resize', function () {
    ChangeHeader();
  });

  if($(".ProjectContainer").length > 0) ChangeCategory("All");

  window.addEventListener('mouseup',function(event){
    var dropdownIcon = this.document.getElementById("CompressedIconToggle");
    var navLinks = this.document.getElementById("NavLinks");

    if(event.target != dropdownIcon && event.target.parentNode != dropdownIcon
      && event.target != navLinks && event.target.parentNode != navLinks)
    {
      navLinks.style.display = 'none';
    }
    else
    {
      if(navLinks.style.display === "block") { navLinks.style.display = 'none'; }
      else { navLinks.style.display = 'block'; }
    }

  });  

  $(".ProjectCategoryLink").on("click", function(){
    ChangeCategory($(this).attr("id").replace("Button", ""));
  })
});




function ChangeHeader()
{
  if(window.innerWidth <= 980)
  {
    $(".FullHeader").addClass("HeaderHidden")
    $(".CompressedHeader").removeClass("HeaderHidden");
  }
  else
  {
    $(".FullHeader").removeClass("HeaderHidden");
    $(".CompressedHeader").addClass("HeaderHidden");
  }
}

function ChangeCategory(category) {
  $('.ProjectContainer').hide();

  if(category == "All" || category == "Games" || category == "Other") { $('.Spec').hide(); }

  if(category == "All")
  {
    $('.ProjectContainer').show();
    $('.Spec').show();
  } 
  else 
  {
    $('.' + category).show();
  }


  $('.ProjectCategoryLink').removeClass('CategoryInactive').not('#' + category + 'Button').addClass('CategoryInactive');

  sessionStorage.Category = category;
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
  let slides = $('.Slide');
  let demoImages = $('.Demo');

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