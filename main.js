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