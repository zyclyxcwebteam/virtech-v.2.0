!function(){let e=document.getElementById("contactForm");e.addEventListener("submit",function(t){if(t.preventDefault(),e.classList.add("was-validated"),document.getElementById("contactBtn").setAttribute("disabled",!0),document.getElementById("contactBtn").innerHTML='<span>Please Wait .. <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>',e.checkValidity()||(document.getElementById("contactBtn").removeAttribute("disabled"),document.getElementById("contactBtn").innerHTML='<span id="btnText"> Send message <i class="ml-2 far fa-paper-plane"></i></span>'),e.checkValidity()){let t=new FormData(e);data={name:t.get("Name"),email:t.get("Email"),phone:t.get("Phone"),subject:t.get("Subject"),message:t.get("Message")},fetch("https://agile-plateau-09650.herokuapp.com/enquirymessages",{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify(data)}).then(function(e){return document.getElementById("contactBtn").setAttribute("disabled",!0),document.getElementById("contactBtn").innerHTML='<span>Please Wait .. </span><span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span><span class="sr-only">Loading...</span></span>',e.json()}).then(function(t){e.reset(),e.classList.remove("was-validated"),document.getElementById("contactAlert").classList.add("show"),document.getElementById("contactBtn").removeAttribute("disabled"),console.log("message sent successfully",t),document.getElementById("contactBtn").innerHTML='<span id="btnText"> Send message <i class="ml-2 far fa-paper-plane"></i></span>'}).catch(function(e){document.getElementById("errorAlert").textContent="Something went wrong! Please try again",document.getElementById("contactBtn").removeAttribute("disabled"),document.getElementById("contactBtn").innerHTML='<span id="btnText"> Send message <i class="ml-2 far fa-paper-plane"></i></span>'})}},!1)}();