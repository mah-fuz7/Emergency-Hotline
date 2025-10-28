

// getelement function
function getElement(id){
 return document.getElementById(id)
  
}


const cartButtons=document.getElementsByClassName('card-btn');

for(let cartButton of cartButtons){
cartButton.addEventListener("click",function(){

let serviceName=cartButton.parentNode.parentNode.children[1].children[0].innerText
console.log(serviceName)
let serviceNumber=cartButton.parentNode.parentNode.children[2].children[0].innerText
console.log(serviceNumber)


//call button functionality


    //  coin 
let call_coin=getElement('coin').innerText

console.log(call_coin.innerText)

//  call alert ,cut coin , insufficient Blance

if(call_coin<=0){
    alert(`❌Insufficient coins. Please top up to continue.`)
}else{
    alert(`
    ${serviceName} 
    ${serviceNumber}

    `)
let after_call_coin=Number(call_coin)-20
getElement('coin').innerText=after_call_coin;
}

// history


if(call_coin>0){
    let now = new Date();
let history_container=getElement('history_box');

let newcart=document.createElement('div');
    newcart.innerHTML=`
<div class="bg-gray-100 rounded-xl flex justify-between p-4 mx-2 my-3">
   
    <div class="">
      <h2 class="font-bold"> ${serviceName} </h2>
      <h2 class="">  ${serviceNumber}</h2>
      
    </div>
    <div class="pt-3">${now.toLocaleTimeString()} </div>
</div>
`
history_container.appendChild(newcart)
}else{

}





})


}

// clear button
getElement('clear-btn').addEventListener('click',function(){
    let clear_history=getElement('history_box')
    clear_history.innerHTML=''
})

// heart icon functionality
let heartLogos=document.getElementsByClassName('heart_icon')
    for(let heartLogo of heartLogos){
        heartLogo.addEventListener('click',function(){
            let heart_count=getElement('heart_count').innerText
            console.log(heart_count)
            let afterClick=Number(heart_count)+1
            getElement('heart_count').innerText=afterClick
        })
    }

// copy button functionality

let copyBtns=document.getElementsByClassName('copy-btn')
    for(let copyBtn of copyBtns){
        copyBtn.addEventListener('click',function(){
            alert("Number copied")
            let copy_count=getElement('copy_count').innerText
            
            let afterCopy=Number(copy_count)+1
            getElement('copy_count').innerText=afterCopy

            let service_number=copyBtn.parentNode.parentNode.children[2].children[0].innerText
            console.log(service_number)
           navigator.clipboard.writeText(service_number)
        })
    }
