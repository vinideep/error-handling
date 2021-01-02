
function error(){
    let message;
    let entry = document.getElementById("data").value;

    message = document.getElementById("error");
    try{
        if(entry=="") throw "Empty";
        entry=Number(entry);
        if(isNaN(entry)) throw "not a number";
        
    }
    catch(err){
        message.innerHTML = "input is "+err;
    }
}