function customCreateElement(elemType, classes, parentElem)
{
	let elem = document.createElement(elemType);

	for(let i = 0; i < classes.length; i++){
		elem.classList.add(classes[i]);
	}

	parentElem.appendChild(elem);
	return elem;
}

$(document).ready(function()
{
	createNavbar(document.querySelector(".navbar"));
	
	var contacts = document.getElementById("navbarDropdown");
	var contactBtn = document.getElementById("contactNavbarItem");
	var contactArrow = document.getElementById("contactsDropdownArrow");
	var navBar = document.getElementById("navbarMenu");
	const userAgent = navigator.userActivation;
	
	match(true);
	
	$(window).on('resize', function ()
	{
		match(false);
		
		if(window.innerWidth >= 850 && navBar.classList.contains("dropdown")) 
		{ 
			contacts.classList = "dropdown";
			navBar.className = navBar.className.replace(" dropdown", "");
			navBar.className = navBar.className.replace(" isActive", "");
			
			contactBtn.transform = "scale(3)";
		}
	});
	
	$(".navbarMenuCollapsed").on("click", function()
	{
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
	
	createFooter(document.querySelector(".footer"));

	document.querySelectorAll(".projectCard").forEach((projectCard) => {
		createProjectCard(projectCard);
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

function createNavbar(thisElem)
{
	let container = customCreateElement("div", ["container"], thisElem);
	let nameLink = customCreateElement("a", ["navbarItem", "name"], container);
	nameLink.href = "./";
	nameLink.innerHTML = "<strong>Ben Holdway</strong>";

	let navbarMenu = customCreateElement("div", ["navbarMenu"], container);
	navbarMenu.id = "navbarMenu";
	let homeLink = customCreateElement("a", ["navbarItem"], navbarMenu);
	homeLink.href = "./";
	homeLink.textContent = "Home";
	let featuredProjsLink = customCreateElement("a", ["navbarItem"], navbarMenu);
	featuredProjsLink.href = "./#projects";
	featuredProjsLink.textContent = "Featured Projects";
	let ProjsLink = customCreateElement("a", ["navbarItem"], navbarMenu);
	ProjsLink.href = "./Projects/";
	ProjsLink.textContent = "Project Showcase";	
	let aboutLink = customCreateElement("a", ["navbarItem"], navbarMenu);
	aboutLink.href = "./#projects";
	aboutLink.textContent = "About Me";

	let navbarDropdown = customCreateElement("div", ["navbarItem", "hasDropdown", "CustomButton"], navbarMenu);
	let contact = customCreateElement("a", ["isNotInDropdown", "btn"], navbarDropdown);
	contact.id = "contactNavbarItem";
	contact.textContent = "Contact";
	let contactIcon = customCreateElement("i", ["arrow"], contact);
	contactIcon.id = "contactsDropdownArrow";

	let dropdown = customCreateElement("div", ["dropdown"], navbarDropdown);
	dropdown.id = "navbarDropdown";

	let cv = customCreateElement("a", ["navbarItem", "contactText"], dropdown);
	cv.href = "https://benholdway.github.io/Portfolio/BenHoldwayCV.pdf";
	cv.target = "_blank";
	cv.rel = "noopener noreferrer";
	let cvContainer = customCreateElement("div", ["icon"], cv);
	let cvIcon = customCreateElement("i", ["material-symbols-outlined"], cvContainer);
	cvIcon.textContent = "description";
	cvText = customCreateElement("span", [], cv);
	cvText.textContent = "CV";

	let linkedIn = customCreateElement("a", ["navbarItem", "contactText"], dropdown);
	linkedIn.href = "https://www.linkedin.com/in/ben-holdway";
	linkedIn.target = "_blank";
	linkedIn.rel = "noopener noreferrer";
	let linkedInIcon= customCreateElement("img", ["icon"], linkedIn);
	linkedInIcon.src = "Resources/Icons/LinkedIn_Icon.png";
	linkedInText = customCreateElement("span", [], linkedIn);
	linkedInText.textContent = "LinkedIn";

	let github = customCreateElement("a", ["navbarItem", "contactText"], dropdown);
	github.href = "https://github.com/BenHoldway";
	github.target = "_blank";
	github.rel = "noopener noreferrer";
	let githubIcon= customCreateElement("div", ["icon"], github);
	githubIcon.style = "background-image:url(Resources/Icons/GitHub_Icon.svg); background-size: contain;";
	githubText = customCreateElement("span", [], github);
	githubText.textContent = "GitHub";

	let email = customCreateElement("a", ["navbarItem", "contactText"], dropdown);
	email.href = "mailto:benholdway03@gmail.com";
	email.target = "_blank";
	email.rel = "noopener noreferrer";
	let emailContainer = customCreateElement("div", ["icon"], email);
	let emailIcon = customCreateElement("i", ["material-symbols-outlined"], emailContainer);
	emailIcon.textContent = "mail";
	emailText = customCreateElement("span", [], email);
	emailText.textContent = "Email";
	
	let navbarMenuCollapsed = customCreateElement("div", ["navbarMenuCollapsed"], container);
	let collapsedIcon = customCreateElement("img", ["navbarItem", "navbarCompressedIcon", "btn"], navbarMenuCollapsed);
	collapsedIcon.src = "Resources/CompressedNavIcon.png";
}

function createFooter(thisElem)
{
	console.log("FOOTER");
	let container = customCreateElement("div", ["container"], thisElem);
	let copyrightText = customCreateElement("p", ["footerItem"], container);
	copyrightText.innerHTML = "&#169; 2026 Ben Holdway -- Page created by using HTML, CSS and JS";

	let scrollToTop = customCreateElement("div", ["top"], container);
	scrollToTop.addEventListener("click", function() 
	{
		window.scrollTo(0, 0);
	});
	let arrow = customCreateElement("div", ["footerItem"], scrollToTop);
	let arrowIcon = customCreateElement("i", ["material-symbols-outlined"], arrow);
	arrowIcon.style = "transform: scale(70%);";
	arrowIcon.textContent = "arrow_upward";
	let scrollToTopText = customCreateElement("p", ["footerItem"], scrollToTop);
	scrollToTopText.textContent = "Top";
}

function createProjectCard(projectCard)
{	
	let link = customCreateElement("a", [], projectCard);
	if(projectCard.dataset.href)
	{
		link.href = projectCard.dataset.href;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
	}

	let card = customCreateElement("div", ["card"], link);
	let highlight = customCreateElement("div", ["cardHighlight"], card);
	if(projectCard.dataset.highlight) { highlight.textContent = projectCard.dataset.highlight; }

	let image = customCreateElement("figure", ["cardImage"], card);
	if(projectCard.dataset.image) { 
		image.style.backgroundImage = "url(" + projectCard.dataset.image + ")";
		image.loading = "lazy";
	}

	let content = customCreateElement("div", ["cardContent"], card);

	let tagBox = customCreateElement("div", ["tagBoxDiv"], content);
	let tags = projectCard.dataset.tags;
	let tagList = tags.split(",");

	for (let i = 0; i < tagList.length; i++) {
		let tagContent = tagList[i].split("=");
		let tag = customCreateElement("div", ["tagBox", tagContent[0]], tagBox);
		tag.innerHTML = tagContent[1];
	}

	let title = customCreateElement("h3", [], content);
	title.textContent = projectCard.dataset.title;

	let description = customCreateElement("p", ["cardDesc"], content);
	description.textContent = projectCard.dataset.desc;

	let date = customCreateElement("p", ["cardDateText"], content);
	date.textContent = projectCard.dataset.date;
}