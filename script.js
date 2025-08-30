const inputEl= document.querySelector("#input");

const divEl=document.querySelector(".container");

const divEl1 =document.createElement("div");
divEl1.classList.add("counter");

divEl.appendChild(divEl1);
 
let counter =0;
let remain= inputEl.maxLength ;

const text1 = document.createElement("h4");
text1.innerText=`TotalCharacters:${counter}`;
text1.classList.add("text1");
divEl1.appendChild(text1);

const text2 = document.createElement("h4");
text2.innerText=`Remaining:${inputEl.getAttribute("maxlength")}`;
text2.classList.add("text2");
divEl1.appendChild(text2);


inputEl.addEventListener("keyup",e=>{
     counter=inputEl.value.length;
     text1.innerText=`TotalCharacters:${counter}`;
     let max= inputEl.maxLength-counter;
     text2.innerText=`Remaining:${max}`;

        
        
});
