/*curl -v -u apikey:X -H "Content-Type: application/json" -X GET */




let addContactButton = document.getElementById('addcontact');
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
    "company_id":company,
    "address":address,
    "description":about
} 
addContact(contact).then((data)=>{
  console.log(data);
})

 
console.log(fullname,title,email,workphone,mobilephone,twitterid,uniqueid,address,about);

})












async function listAllTickets(){
    let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/contacts'
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
}
 listAllTickets();


let fields = {
    'email': 'email@yourdomain.com',
    'subject': 'Ticket subject',
    'description': 'Ticket description.',
    'status': 2,
    'priority': 1
  }


 async function addContact(contact){
   
        let url = 'https://newaccount1613464036437.freshdesk.com/api/v2/contacts'
        //let apiKey =btoa("2o6DY6yYNl1sz9S3ZUeD");
        let username = "aniketdevarkar98@gmail.com";
       let password =  "Hackathon@1";
       let response= await fetch(url, {
           method:'POST', 
        headers: {
        'Authorization': 'Basic ' + btoa(username+":"+password),
        "Content-Type": "application/json"},
        body: JSON.stringify(contact)
         } )
        
        let data = await response.json();
        console.log(data);
        return data;
         

}



