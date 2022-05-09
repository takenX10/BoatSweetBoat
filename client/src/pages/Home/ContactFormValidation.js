export function validateForm()                                    
{ 
    var name = document.forms["contactForm"]["name"].value;               
    var email = document.forms["contactForm"]["email"].value;    
    var message = document.forms["contactForm"]["message"].value;   
    var mailTo = "marta.boatsweetboat@gmail.com";
    //var mailTo="vittoria95.frau@gmail.com";
   
    console.log(name, email, message);

    window.open('mailto:'+mailTo+'?subject=Informazioni da parte di '+name+'&body='+message);

    return true; 
}

