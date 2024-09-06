var projectSelected = 'Games';
localStorage.setItem('projectSelected', projectSelected);


function ChangeHeader()
{
  if(window.innerWidth <= 980)
  {
    document.getElementById("HeaderFull").classList.add("HeaderHidden")
    document.getElementById("HeaderCompressed").classList.remove("HeaderHidden");
  }
  else
  {
    document.getElementById("HeaderFull").classList.remove("HeaderHidden");
    document.getElementById("HeaderCompressed").classList.add("HeaderHidden");
  }
}

function MobileNavSelect() {
  var x = document.getElementById("NavLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function ChangeProjectVisibility(projectType) {
  var games = document.getElementById("Games");
  var other = document.getElementById("Other");
  
  /*if (projectType == 'Games' && (games.style.opacity > 0 || other.style.opacity < 1))  
  {
    if(other.style.display == block)
      other.style.opacity += 0.1;

    games.style.opacity -= 0.1;

    if(games.style.opacity == 0)
    {
      games.style.display = none;
      other.style.display = block;
      other.style.opacity += 0.1;
    }

    setTimeout(function(){ChangeProjectVisibility(projectType)}, 2000);
  } 
  else if (projectType == 'Other' && (other.style.opacity > 0 || games.style.opacity < 1))  
  {
    if(games.style.display == block)
      games.style.opacity += 0.1;

    other.style.opacity -= 0.1;

    if(other.style.opacity == 0)
    {
      other.style.display = none;
      games.style.display = block;
      games.style.opacity += 0.1;
    }

    setTimeout(function(){ChangeProjectVisibility(projectType)}, 2000);
  } 
  else {
    clearTimeout(0);
  }*/

  if(projectType === 'undefined')
  {
    localStorage.setItem('projectSelected', 'undefined');
    document.getElementById("Games").style.display = "none";
    document.getElementById("Other").style.display = "block";
    document.getElementById("GameButton").style.color = '#6d6d6d';
    document.getElementById("OtherButton").style.color = 'white';
  }
  else
  {
    localStorage.setItem('projectSelected', 'Games');
    document.getElementById("Games").style.display = "block";
    document.getElementById("Other").style.display = "none"; 
    document.getElementById("GameButton").style.color = 'white';
    document.getElementById("OtherButton").style.color = '#6d6d6d';
  }
}

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
  let captionText = document.getElementById("Caption");

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
  captionText.innerHTML = demoImages[slideIndex-1].alt;
}