

function toggleClasses(){
	console.log('here...!')
		document.getElementsByClassName("menu-icon")[0].classList.toggle("menu-icon-left"); 
	 
	 document.getElementsByClassName("menu-icon")[0].classList.toggle("menu-icon-open");	
		 
	 document.getElementsByClassName("sidebarBox")[0].classList.toggle("sidebarBox-close");  
     document.getElementsByClassName("companyName")[0].classList.toggle("companyName-close"); 
	 document.getElementsByClassName("companyName-short")[0].classList.toggle("companyName-short-close"); 
	
} 


function toggleMenu(ele){
	if(ele.parentElement.parentElement.parentElement.tagName!=='LI')
	{

		var mainmenus =document.querySelectorAll('#mainmenuid>li');

		for(i = 0; i < mainmenus.length; i++){
			if(ele.parentElement!==mainmenus[i])
				mainmenus[i].classList.remove('active')
		}

		ele.parentElement.classList.toggle("active"); 
	}

}