// function saveclick(){
//     console.log("button cjsbcb")
// }

let myLeads=[]
const inputEl=document.querySelector("#input-el")
const inputBtn=document.querySelector("#input-btn")
const ulEl=document.getElementById("ul-el")
let pad=document.querySelector(".kap")
const deleteEl=document.querySelector("#delete")
const tabBtn=document.querySelector("#tab-btn")


//  *** THIS ARGUMENTS FOR LOCAL STORAGE ARE PERMANENT
// localStorage.setItem("name","Chirag Birla")
// key value pair both are strings
//  console.log(localStorage.getItem("name"))   
// localStorage.clear()
//  *** THIS ARGUMENTS FOR LOCAL STORAGE ARE PERMANENT


// localStorage.clear()




const leadsfromstorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromstorage){
    myLeads=leadsfromstorage
    render(myLeads)
}

// const tabs=[
//     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]


tabBtn.addEventListener("click",function(){
//    pad.textContent=tabs[0].url
    // console.log(tabs[0].url)
      chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
      })
})




function render(leads){
    
    let listItems="";
    for(let i=0;i<leads.length;i++){
        // listItems+= "<li><a target='_blank' href='" + myLeads[i]+ "'>" + myLeads[i] + "</a></li>"
        // creating a template string 
        listItems+= `
          <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
          </li>
        `


        // pad.textContent=listItems
        // 2nd method to do the same
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML=listItems
    // DOM manipulation comes at a cost so this is more efficient way
    // ulEl.innerHTML=listItems
}


deleteEl.addEventListener('dblclick',function(){
    localStorage.clear()
    // pad.textContent=""
    myLeads=[]
    render(myLeads)
})


// kind  of lambda functions
inputBtn.addEventListener("click",function(){
    // console.log("button clicked")
    // pad.textContent="button clicked"
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))  
    render(myLeads)
})














// if we have to do html work in js

// const contEl=document.getElementById("container")

// contEl.innerHTML= "<button onclick='buy()'> Buy! </button>"
// function buy(){
    // contEl.innerHTML+= "<p>Thank you maa chuda ab</p>"
// }



// to access
// console.log(data[0].score)
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]