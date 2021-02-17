/*<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

function createTicket(id,subject,status,priority,email,description){

let cardDiv = document.createElement('div');
cardDiv.setAttribute('class','card my-2');

let row = document.createElement('div');
row.setAttribute('class','row'); 

let col1 = document.createElement('div');
col1.setAttribute('class','col-6'); 

let col2 = document.createElement('div');
col2.setAttribute('class','col-6'); 

let h5 = document.createElement('h4');
h5.setAttribute('class','card-header');
h5.innerHTML= subject+"#"+id;

let cardBody = document.createElement('div');
cardBody.setAttribute('class','card-body');

let h5Title = document.createElement('h5');
h5Title.setAttribute('class','card-title');
h5Title.setAttribute('id','status1');
h5Title.innerText= status;

let priorityDiv = document.createElement('h5');
priorityDiv.setAttribute('class','card-title');
priorityDiv.setAttribute('id','priority1');
priorityDiv.innerText= priority;

let p = document.createElement('p');
p.setAttribute('class','card-title');
p.innerHTML= `<a href=mailto:${email}>${email}</a>` +' | '+ description;

/*<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
    Right-aligned but left aligned when large screen
  </button>
  <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div> */
let dropdown = document.createElement('div');
dropdown.setAttribute('class','btn-group');

let button = document.createElement('button');
button.setAttribute('class','btn btn-secondary dropdown-toggle');
button.setAttribute('type','button');
button.setAttribute('data-toggle','dropdown');
button.setAttribute('data-display','static');
button.setAttribute('aria-haspopup','true');
button.setAttribute('aria-expanded','false');
button.setAttribute('id','button1')
console.log(status)
button.innerText= "Status";

let dropdownMenu = document.createElement('div');
dropdownMenu.setAttribute('class','dropdown-menu');

let open = document.createElement('button');
open.setAttribute('type','button');
open.setAttribute('class','dropdown-item');
open.innerText = "Open";
open.setAttribute('id',id);
open.addEventListener('click',()=>{
    h5Title.innerText ="Open";
    updateStatus(id,2);
});

let pending = document.createElement('button');
pending.setAttribute('type','button');
pending.innerText = "Pending";
pending.setAttribute('class','dropdown-item');
pending.setAttribute('id',id);
pending.addEventListener('click',()=>{
    h5Title.innerText ="Pending";
    updateStatus(id,3);
});

let resolved = document.createElement('button');
resolved.setAttribute('type','button');
resolved.innerText = "Resolved";
resolved.setAttribute('class','dropdown-item');
resolved.setAttribute('id',id);
resolved.addEventListener('click',()=>{
    h5Title.innerText ="Resolved";
    updateStatus(id,4);
});
let closed = document.createElement('button');
closed.setAttribute('type','button');
closed.innerText = "closed";
closed.setAttribute('class','dropdown-item');
closed.setAttribute('id',id);
closed.addEventListener('click',()=>{
    h5Title.innerText ="Closed";
    updateStatus(id,5);
});

let dropdown2 = document.createElement('div');
dropdown2.setAttribute('class','btn-group');

let button2 = document.createElement('button');
button2.setAttribute('class','btn btn-secondary dropdown-toggle');
button2.setAttribute('type','button');
button2.setAttribute('data-toggle','dropdown');
button2.setAttribute('data-display','static');
button2.setAttribute('aria-haspopup','true');
button2.setAttribute('aria-expanded','false');
button2.setAttribute('id','button2')
console.log(status)
button2.innerText= "priority";

let dropdownMenu2 = document.createElement('div');
dropdownMenu2.setAttribute('class','dropdown-menu');

let low = document.createElement('button');
low.setAttribute('type','button');
low.setAttribute('class','dropdown-item');
low.innerText = "Low";
low.setAttribute('id','low');
low.addEventListener('click',()=>{
    priorityDiv.innerText ="Low";
    updatePriority(id,1);
});

let medium = document.createElement('button');
medium.setAttribute('type','button');
medium.innerText = "Medium";
medium.setAttribute('class','dropdown-item');
medium.setAttribute('id','medium');
medium.addEventListener('click',()=>{
    priorityDiv.innerText ="Medium";
    updatePriority(id,2);
});

let high = document.createElement('button');
high.setAttribute('type','button');
high.innerText = "High";
high.setAttribute('class','dropdown-item');
high.setAttribute('id','high');
high.addEventListener('click',()=>{
    priorityDiv.innerText ="High";
    updatePriority(id,3);
});
let urgent = document.createElement('button');
urgent.setAttribute('type','button');
urgent.innerText = "Urgent";
urgent.setAttribute('class','dropdown-item');
urgent.setAttribute('id','urgent');
urgent.addEventListener('click',()=>{
    priorityDiv.innerText ="Urgent";
    updatePriority(id,4);
});

dropdownMenu.append(open,pending,resolved,closed);
dropdownMenu2.append(low,medium,high,urgent);

dropdown2.append(button2,dropdownMenu2);
dropdown.append(button,dropdownMenu);

let row2 = document.createElement('div');
row2.setAttribute('class','row');

let col3 = document.createElement('div');
col3.setAttribute('class','col-6');

let col4 = document.createElement('div');
col4.setAttribute('class','col-6');



let row3 = document.createElement('div');
row3.setAttribute('class','row');

let row4 = document.createElement('div');
row4.setAttribute('class','row 4');

let col5 = document.createElement('div');
col5.setAttribute('class','col');

let col6 = document.createElement('div');
col6.setAttribute('class','col-6 ');

let col7 = document.createElement('div');
col5.setAttribute('class','col-6 ');



 col6.append(dropdown);
 col7.append(dropdown2);

row4.append(col6,col7);
col2.append(row4);
col5.append(p);
row3.append(col5);
col4.append(priorityDiv);
col3.append(h5Title);
row2.append(col3,col4);
col1.append(row2,row3);
row.append(col1,col2);
cardBody.append(row);
cardDiv.append(h5,cardBody);
document.getElementById('tickets').append(cardDiv);
}

function displayAllTickets(){
    listAllTickets().then((tickets)=>{
        let status={"2":"Open","3":"Pending","4":"Resolved","5":"Closed"};
        let priority={"1":"Low","2":"Medium","3":"High","4":"Urgent"};
    for(let i=0;i<tickets.length;i++){
        
        createTicket(tickets[i].id,tickets[i].subject,status[tickets[i].status],priority[tickets[i].priority],"Mail",tickets[i].type);
    }
    })
}
displayAllTickets();


async function listAllTickets(){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/tickets'
    let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let response = await fetch(url,{
       headers:{
        "Authorization" : apiKey,
        "Content-Type": "application/json"
       }
   });
   
   // let response = await fetch("https://newaccount1613464036437.freshdesk.com/api/v2/tickets");
    let data = await response.json();
    console.log(data);
    return data;
}
 listAllTickets();

//updates the priority of the ticket
 async function updatePriority(id,priority){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/tickets/'+id;
    //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let username = "aniketdevarkar98@gmail.com";
   let password =  "Hackathon@1";
   let response= await fetch(url, {
       method:'PUT', 
    headers: {
    'Authorization': 'Basic ' + btoa(username+":"+password),
    "Content-Type": "application/json"},
    body: JSON.stringify({"priority":priority})
})
let data = await response.json();
    console.log(data);
    
}
updatePriority(8,3);

//updates the status of the ticket
async function updateStatus(id,status){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/tickets/'+id;
    //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let username = "aniketdevarkar98@gmail.com";
   let password =  "Hackathon@1";
   let response= await fetch(url, {
       method:'PUT', 
    headers: {
    'Authorization': 'Basic ' + btoa(username+":"+password),
    "Content-Type": "application/json"},
    body: JSON.stringify({"status":status})
})
let data = await response.json();
    console.log(data);
    
}
updateStatus(8,3);















