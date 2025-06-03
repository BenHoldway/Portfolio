$(document).ready(function(){

  var contacts = document.getElementById("navbarDropdown");
  var contactBtn = document.getElementById("contactNavbarItem");
  var contactArrow = document.getElementById("contactsDropdownArrow");
  var navBar = document.getElementById("navbarMenu");
  const userAgent = navigator.userActivation;

  match(true);

  $(window).on('resize', function () {
    match(false);

    if(window.innerWidth >= 850 && navBar.classList.contains("dropdown")) 
    { 
      contacts.classList = "dropdown";
      navBar.className = navBar.className.replace(" dropdown", "");
      navBar.className = navBar.className.replace(" isActive", "");
    }
  });

  // if (/Tablet|iPad/i.test(userAgent)) {
  //   console.log("Tablet");
  //   contactBtn.className += " isClickable"
  // } else {
  //   console.log("Desktop");
  //   contactBtn.className += " isHoverable"
  // }

  // $(".isClickable").on("click", function()
  // {
  //   if(contacts.style.display == "block")
  //   {
  //     contacts.style.display = "none";
  //     contactArrow.className.replace(" isActive", "");
  //     contactBtn.className += " isNotInDropdown";
  //   }
  //   else
  //   {
  //     contacts.style.display = "block";
  //     contactArrow.className += " isActive";
  //     contactBtn.className.replace(" isNotInDropdown", "");
  //   }
  // });

  $(".navbarMenuCollapsed").on("click", function(){

    if(navBar.classList.contains("dropdown"))
    {
      navBar.className = navBar.className.replace(" dropdown", "");
      navBar.className = navBar.className.replace(" isActive", "");
      contacts.classList = "dropdown";
    }
    else
    {
      navBar.className += " dropdown";
      navBar.className += " isActive";
      contacts.className += " isActive";
    }
  });
});


/* #region SlideShow */
  var slideIndex = 0;

  // Next/previous controls
  function ChangeSlide(n) {
    slideIndex += n;
    UpdateSlide();
  }

  // Thumbnail image controls
  function CurrentSlide(n) {
    slideIndex = n;
    UpdateSlide();
  }

  function UpdateSlide()
  {
    let slides = $('.slide');
    let demoImages = $('.demoStripItem');

    for (let i = 0; i < demoImages.length; i++) 
      demoImages[i].className = demoImages[i].className.replace(" demoItemActive", "");
    
    for (let i = 0; i < slides.length; i++) 
    {
      slides[i].style.display = "none";
      slides[i].style.opacity = "0";
    }

    if (slideIndex >= slides.length) 
      slideIndex = 0;

    else if (slideIndex < 0) 
      slideIndex = slides.length - 1;

    slides[slideIndex].style.display = "block";
    slides[slideIndex].style.opacity = "1";
    demoImages[slideIndex].className += " demoItemActive";
  }
/* #endregion */

var sizeIndex = 0;
function match(override) 
{
  if(window.matchMedia("(min-width: 1500px)").matches && (sizeIndex != 0 || override))
  {
    sizeIndex = 0;
    $('#ProjectInfo').addClass('SectionInfo');
    $('#ProjectSlides').addClass('Left');
    $('#ProjectAbout').addClass('Right');
    $('#ProjectSlides').removeClass('isFullSectionBottom');
    $('#ProjectAbout').removeClass('isFullSectionTop');
  }
  else if(window.matchMedia("(max-width: 1500px)").matches && (sizeIndex != 1 || override))
  { 
    sizeIndex = 1;
    $('#ProjectInfo').removeClass('SectionInfo');
    $('#ProjectSlides').removeClass('Left'); 
    $('#ProjectAbout').removeClass('Right'); 
    $('#ProjectSlides').addClass('isFullSectionBottom');
    $('#ProjectAbout').addClass('isFullSectionTop');
  }
}