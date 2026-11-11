function highlight() {
    //Write your code here
	let strong=document.querySelector("strong")
	strong.addEventListener("mouseover" ,(e)=>{
		e.target.style.backgroundColor="green"
	})


}


function return_normal() {
    //Write your code here
	let strong=document.querySelector("strong")
	strong.addEventListener("mouseout" ,(e)=>{
		e.target.style.backgroundColor="black"
	})


}

    
}
