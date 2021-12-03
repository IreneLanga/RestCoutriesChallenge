

const countriesElem=document.querySelector(".countries")
const dropDownElem=document.querySelector(".dropDown")
const dropElem=document.querySelector(".drop")
const regionElem=document.querySelectorAll(".region")
const searc=document.querySelector(".searc")
const toggle=document.querySelector(".toggle")
const moon=document.querySelector(".moon")




async function getCountry(){
const url=await fetch("https://restcountries.com/v2/all");
const res=await url.json();
console.log(res);

res.forEach(element=>{
	showCountry(element)
});

}
getCountry()
	function showCountry(data){
		const coutrie=document.createElement("div")
		coutrie.classList.add("coutrie")
			coutrie.innerHTML= ` <div class="coutrie-img">
			<img src="${data.flag}" alt="">
								 </div>
							 <div class= "coutrie-info">
								 <h5 class="coutrieName">${data.name}</h5>
								 <p><strong>Regiao:</strong>${data.region} </p>
								 <p class="regionName"><strong>Subregiao:</strong>${data.subregion}</p>
								 <p><strong>Capital:</strong>${data.capital}</p>
								 <p><strong>Populacao:</strong>${data.population}</p>
								 <p><strong>Timezone:</strong>${data.timezones}</p>
								 <p><strong>Cod.Tel:</strong>${data.callingCodes}</p>

								
								
								 
							 </div>`;

			countriesElem.appendChild(coutrie)
}
dropDownElem.addEventListener("click", ()=>{
	dropElem.classList.toggle("showDropDown")
console.log("hello");
})
const regionName=document.getElementsByClassName("regionName")
const coutrieName=document.getElementsByClassName("coutrieName")
regionElem.forEach(element=>{
	element.addEventListener("click", ()=>{
		console.log(element);
		Array.from(regionName).forEach(elem=>{
			console.log(elem.innerText);
      if(elem.innerText.includes(element.innerText)|| element.innerText=="All"){
		  elem.parentElement.parentElement.style.display="grid"
	  }else{
		elem.parentElement.parentElement.style.display="none"
	  }
		});
	})
});

searc.addEventListener("input", ()=>{
	Array.from(coutrieName).forEach(elem=>{
		console.log(searc.value.toLowerCase())
  if(elem.innerText.toLowerCase().includes(searc.value.toLowerCase())){
	  elem.parentElement.parentElement.style.display="grid"
  }else{
	elem.parentElement.parentElement.style.display="none"
  }
	});
})

toggle.addEventListener("click", ()=>{
	document.body.classList.toggle("dark");
	moon.classList.toggle("fas")
})
