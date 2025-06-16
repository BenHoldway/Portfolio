let demoStrip;
let demoStripWidth;
let slides;
let demoImages;
let demoImageWidth;
let slideIndex;

let demoSlider;
let demoSliderHandle;

var fullDemoStripWidth;
var maxHandleVal;

$(document).ready(function()
{
	demoStrip = $('.slideDemoStrip');
	demoStrip[0].scrollLeft = 0;
	slides = $('.slide');
	demoImages = document.getElementsByClassName('demoStripItem');
	activeDemoImage = document.getElementsByClassName('demoItemActive');
	slideIndex = 0;
	demoStripWidth = demoStrip[0].offsetWidth;
	demoImageWidth = parseFloat(demoImages[1].offsetWidth)
		+ (parseFloat(window.getComputedStyle(demoImages[1]).marginRight))

	demoSlider = document.getElementById('demoSlider');
	demoSliderHandle = document.getElementById('demoSliderHandle');
	demoSliderHandle.style.width = "calc(" + window.getComputedStyle(demoSlider).width + " / " + demoImages.length + ")";

	var isDown = false;
	var mousePosition = 0;
	var offset = [0,0];
	var handleSlidePercentage = 0;
	maxHandleVal = parseFloat(window.getComputedStyle(demoSlider).width) - parseFloat(window.getComputedStyle(demoSliderHandle).width);
	fullDemoStripWidth = (demoImageWidth * demoImages.length) + parseFloat(window.getComputedStyle(demoImages[1]).marginRight) * 2;

	demoSliderHandle.addEventListener('mousedown', function(e) {
		isDown = true;
		demoSliderHandle.className = demoSliderHandle.className.replace(" sliderHandleWithTransition", "");
		offset = [
			demoSliderHandle.offsetLeft - e.clientX,
		];
	}, true);
	
	document.addEventListener('mouseup', function() {
		isDown = false;
		demoSliderHandle.className = "demoSliderHandle sliderHandleWithTransition";
	}, true);

	document.addEventListener('mousemove', function(event) {
		event.preventDefault();
		if (isDown) {
			mousePosition = {
				x : event.clientX,
				y : event.clientY
			};
			UpdateSliderHandle();
		}
	}, true);

	function UpdateSliderHandle()
	{
		demoSliderHandle.style.left = (mousePosition.x + offset[0]) + 'px';
		demoSliderHandle.style.left = demoSliderHandle.style.left <= 0 + 'px' ? 0 + 'px'
			: parseInt(demoSliderHandle.style.left, 10) >= maxHandleVal ? maxHandleVal + 'px' : demoSliderHandle.style.left;
		
		handleSlidePercentage = parseFloat(window.getComputedStyle(demoSliderHandle).left) / maxHandleVal;
		demoStrip[0].scrollLeft = (fullDemoStripWidth - demoStripWidth) * handleSlidePercentage;
	}

	$(window).on('resize', function () {
		demoStripWidth = demoStrip[0].offsetWidth;
		demoImageWidth = parseFloat(demoImages[1].offsetWidth)
			+ (parseFloat(window.getComputedStyle(demoImages[1]).marginRight))
	
		demoSliderHandle.style.width = "calc(" + window.getComputedStyle(demoSlider).width + " / " + demoImages.length + ")";
		maxHandleVal = parseFloat(window.getComputedStyle(demoSlider).width) - parseFloat(window.getComputedStyle(demoSliderHandle).width);
		fullDemoStripWidth = (demoImageWidth * demoImages.length) + parseFloat(window.getComputedStyle(demoImages[1]).marginRight * 2);
		
		ScrollDemoStrip();
		UpdateSliderHandle();
	});
	ScrollDemoStrip();
	UpdateSliderHandle();
});

/* #region SlideShow */

// Next/previous controls
function ChangeSlide(n) {
	slideIndex += n;
	UpdateSlide();
	ScrollDemoStrip();
}

// Thumbnail image controls
function CurrentSlide(n) {
	slideIndex = n;
	UpdateSlide();
	ScrollDemoStrip();
}

function UpdateSlide()
{
	for (let i = 0; i < demoImages.length; i++) 
		demoImages[i].className = demoImages[i].className.replace(" demoItemActive", "");

	for (let i = 0; i < slides.length; i++) 
	{
		slides[i].style.display = "none";
		slides[i].style.opacity = "0";
	}

	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}

	else if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	slides[slideIndex].style.display = "flex";
	slides[slideIndex].style.opacity = "1";
	demoImages[slideIndex].className += " demoItemActive";
}
/* #endregion */

function ScrollDemoStrip()
{
	if(slideIndex == 0) 
	{ 
		demoStrip[0].scrollLeft = 0; 
		demoSliderHandle.style.left = 0;
	}
	
	var newSlideLeft = demoImages[slideIndex].offsetLeft;
	var handlePos;

	// Moving left
	if(newSlideLeft < demoStrip[0].scrollLeft)
	{
		demoStrip[0].scrollLeft = (newSlideLeft + demoImageWidth) - demoStripWidth;

	}
	// Moving right
	else if(newSlideLeft + demoImageWidth > demoStrip[0].scrollLeft + demoStripWidth) 
	{
		demoStrip[0].scrollLeft = newSlideLeft;
		console.log(demoStrip[0].scrollLeft);
	}

	if(demoStrip[0].scrollLeft + demoStripWidth >= fullDemoStripWidth - 10) { handlePos = maxHandleVal; }
	else { handlePos = (demoStrip[0].scrollLeft / fullDemoStripWidth) * maxHandleVal; }
	
	demoSliderHandle.style.left = handlePos + 'px';
	demoSliderHandle.style.left = demoSliderHandle.style.left <= 0 + 'px' ? 0 + 'px' : parseInt(demoSliderHandle.style.left, 10) >= maxHandleVal ? maxHandleVal + 'px' : handlePos + 'px';

	handleSlidePercentage = parseFloat(window.getComputedStyle(demoSliderHandle).left) / maxHandleVal;
}

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