
let showing = false;

const forDisplay = document.querySelector(".forDisplay")
const forShowing = document.querySelector(".forShowing")

forDisplay.addEventListener('click', () => {
	if(!showing){
		forShowing.classList.remove('hidden')
		forShowing.classList.add('absolute')
		showing = true;
	}else{
		forShowing.classList.remove('absolute')
		forShowing.classList.add('hidden')
		showing = false;
	}
})



