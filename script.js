document.querySelector(".menu").addEventListener("click",()=>{document.querySelectorAll(".target").forEach(e=>{e.classList.toggle("change")})});const icons=document.querySelectorAll(".section-1-icons i");let i=1;setInterval(()=>{i++;const e=document.querySelector(".section-1-icons .change");e.classList.remove("change"),i>icons.length?(icons[0].classList.add("change"),i=1):e.nextElementSibling.classList.add("change")},4e3);


document.addEventListener("contextmenu",event => event.preventDefault()};

documentr.onkeydown = function(e) {
	
	if(e.keyCode == 123) {
		alert("F12 disable");
		return false;
	}
