/*<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>*/

function createContact(name,job_title,company_id,email,phone,facebook_id,twitter_id,id){
    //console.log(name,job_title,company_id,email,phone,facebook_id,twitter_id)
    let tr = document.createElement('tr');
    tr.style.fontSize = "25px";
    let th = document.createElement('th');
    th.setAttribute('scope','row');
    th.innerText = name;
    let td2= document.createElement('td');
    td2.innerText = job_title;
    let td3= document.createElement('td');
    td3.innerText = company_id;
    let td4= document.createElement('td');
    td4.innerText = email;
    let td5= document.createElement('td');
    td5.innerText = phone;
    let td6= document.createElement('td');
    td6.innerText = facebook_id;
    let td7= document.createElement('td');
    td7.innerText = twitter_id;


    let i = document.createElement('i');
    i.setAttribute('class',"fas fa-edit");
    let td8 = document.createElement('td');
   
/*    <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@mdo"
      >
        Open modal for @mdo
      </button> */
     
    let button = document.createElement('button');
    button.setAttribute('type','button');
    button.setAttribute('class','btn btn-outline-secondary');
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#exampleModal');
    button.innerHTML= "Edit";
    button.addEventListener('click',()=>{
        listOneContacts(id).then((contact)=>{
        document.getElementById('fullname').value = contact.name;
        document.getElementById('title').value = contact.job_title;   
        document.getElementById('email').value = contact.email;
        document.getElementById('workphone').value = contact.phone;
        document.getElementById('mobilephone').value = contact.mobile;
        document.getElementById('twitterid').value = contact.twitter_id;
        document.getElementById('facebookid').value = contact.facebook_id;
        document.getElementById('uniqueid').value = contact.unique_external_id;
        document.getElementById('facebookid').value = contact.facebook_id;
        document.getElementById('company').value = contact.company_id;
        document.getElementById('address').value = contact.address;
        document.getElementById('about').value = contact.description;
       
        })
       
        
        let addContactButton = document.getElementById('savecontact');
        addContactButton.addEventListener('click',()=>{
        let fullname = document.getElementById('fullname').value;
    let title = document.getElementById('title').value;
    let email = document.getElementById('email').value;
    let workphone = document.getElementById('workphone').value;
    let mobilephone = document.getElementById('mobilephone').value;
    let twitterid = document.getElementById('twitterid').value;
    let uniqueid = document.getElementById('uniqueid').value;
    let company = document.getElementById('company').value;
    let address = document.getElementById('address').value;
    let about = document.getElementById('about').value;
    let contact ={
        "name":fullname,
        "job_title":title,
        "email":email,
        "phone":workphone,
        "mobile":mobilephone,
        "twitter_id":twitterid,
        "unique_external_id":uniqueid,
        "company_id": parseInt(company),
        "address":address,
        "description":about
    } 
    if(fullname !== document.getElementById('fullname').value)
        contact["name"] = fullname;
        if(title !== document.getElementById('title').value)
        contact["title"] = title;
        if(email !== document.getElementById('email').value)
        contact["email"] = email;
        if(title !== document.getElementById('title').value)
        contact["title"] = title;
        if(workphone !== document.getElementById('workphone').value)
        contact["workphone"] = workphone;
        if(mobilephone !== document.getElementById('mobilephone').value)
        contact["mobilephone"] = mobilephone;
        if(twitterid !== document.getElementById('twitterid').value)
        contact["twitter_id"] = twitterid;
        if(uniqueid !== document.getElementById('uniqueid').value)
        contact["unique_external_id"] = uniqueid;
        if(company !== document.getElementById('company').value)
        contact["company_id"] = company;
        if(address !== document.getElementById('address').value)
        contact["address"] = address;
        if(about !== document.getElementById('about').value)
        contact["description"] = about;

          
         updateContact(id,contact);
         
        
        });
    })
    
    //button.append(i);
    td8.append(button);
        tr.append(th,td2,td3,td4,td5,td6,td7,td8);
        document.getElementById('tbody').append(tr);


}

async function listOneContacts(id){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/contacts/'+id;
    //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let username = "aniketdevarkar98@gmail.com";
   let password =  "Hackathon@1";
   let response= await fetch(url, {
       method:'GET', 
    headers: {
    'Authorization': 'Basic ' + btoa(username+":"+password),
    "Content-Type": "application/json"}
})
let data = await response.json();
    console.log(data);
    return data;
}


async function updateContact(id,contacts){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/contacts/'+id;
    //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let username = "aniketdevarkar98@gmail.com";
   let password =  "Hackathon@1";
   let response= await fetch(url, {
       method:'PUT', 
    headers: {
    'Authorization': 'Basic ' + btoa(username+":"+password),
    "Content-Type": "application/json"},
    body: JSON.stringify(contacts)
})
let data = await response.json();
    console.log(data);   
    
}
//updateContact("82011649929");


function displayAllContacts(){
    listAllContacts().then((contacts)=>{
       for(let i=0;i<contacts.length;i++){
           if(contacts[i].name===null)
           contacts[i].name = "-";
           if(contacts[i].job_title===null)
           contacts[i].job_title = "--";
           if(contacts[i].company_id===null)
           contacts[i].company_id = "--";
           if(contacts[i].email===null)
           contacts[i].email = "--";
           if(contacts[i].phone===null)
           contacts[i].phone = "--";
           if(contacts[i].facebook_id===null)
           contacts[i].facebook_id = "--";
           if(contacts[i].twitter_id===null)
           contacts[i].twitter_id = "--";
            createContact(contacts[i].name,contacts[i].job_title,contacts[i].company_id,
            contacts[i].email,contacts[i].phone,contacts[i].facebook_id,contacts[i].twitter_id,contacts[i].id);
       }
        // console.log(contacts);
    })
    
}

displayAllContacts();


async function listAllContacts(){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/contacts';
    //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
    let username = "aniketdevarkar98@gmail.com";
   let password =  "Hackathon@1";
   let response= await fetch(url, {
       method:'GET', 
    headers: {
    'Authorization': 'Basic ' + btoa(username+":"+password),
    "Content-Type": "application/json"}
})
let data = await response.json();
    console.log(data);
    return data;
}
listAllContacts();






