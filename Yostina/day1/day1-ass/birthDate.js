function helloMsg(name,birthdate) {
    if( birthdate.getFullYear()<2023){
   const today = new Date();
 
     const age = today.getFullYear() - birthdate.getFullYear() - 
                (today.getMonth() < birthdate.getMonth() || 
                (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
     return `Hello ${name} and your age is ${age}`;
   }
   else
    return "wrong Data";
 }
 module.exports=helloMsg;