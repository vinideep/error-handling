
function error(){
    let message;
    let entry = document.getElementById("data").value;
    
    message = document.getElementById("error");
    try{
        if(entry=="") throw "Empty";
        entry=Number(entry);
        if(isNaN(entry)) throw "not a number";
        if(Number) throw entry;
        
    }
    catch(err){
        message.innerHTML = "input is "+err;
        let res = document.getElementById("result");
        res.innerHTML = `The gst you have to pay &#8377 ${(entry*0.05).toFixed(2)} for the amount &#8377 ${(entry).toFixed(2)}`
    }
}

// let array1 = [
//     {
//         name:"vinith",
//         age: 24
//     },
//     {
//         name:"karthi",
//         age:22
//     }
// ]
// const lovers = array1.find(s=>{
//     return s.age == 22;
// })
// let i = 0;
// let some = setInterval(()=>{
//     document.getElementById("error").innerHTML=i++ +"%";
//     if(i==101) clearInterval(some);
// },100);
// console.log(lovers);