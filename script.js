const requestAPI="https://api.github.com/users/stanmaypal";
const xhr=new XMLHttpRequest();
 xhr.open('GET',requestAPI);
xhr.onreadystatechange=function(){
 console.log(xhr.readyState);
 if(xhr.readyState===4)
 {
     const data=JSON.parse(this.responseText);
     //console.log(data)
     console.log(data.name)
     document.querySelector('#n').innerHTML=`
    
     <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
     <div class="card p-4"> 
         <div class=" image d-flex flex-column justify-content-center align-items-center">
              <button class="btn btn-secondary"> 
                 <img src="${data.avatar_url}" height="120" width="120" style="border-radius:360px" />
             </button>
              <span class="name mt-3">${data.name}</span>
               <span class="idd">@${data.login}</span>
                <div class="d-flex flex-row justify-content-center align-items-center gap-2"> 
                 <span class="idd1">${data.type}</span> 
                 <span><i class="fa fa-copy"></i></span> 
             </div>
              <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                  <span class="number">${data.followers} <span class="follow">Followers</span></span> 
                 </div> 
                 <div class=" d-flex mt-2"> 
                    <a href="${data.html_url}"><button class="btn1 btn-dark"> Profile</button></a> 
                 </div> 
                 <div class="text mt-3"> <span>Coding is today's language of creativity. As a web developer, you sculpt the digital world, turning ideas into interactive experiences.</span> </div> 
                 <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                      <span><i class="fa fa-twitter"></i></span>
                       <span><i class="fa fa-facebook-f"></i></span>
                        <span><i class="fa fa-instagram"></i></span>
                         <span><i class="fa fa-linkedin"></i></span>
                      </div> 
                      <div class=" px-2 rounded mt-4 date "> 
                         <span class="join">Joined ${new Date(data.created_at).toDateString()}</span> 
                     </div>
                  </div>
                  </div>
</div>

     `
 }

}
xhr.send();