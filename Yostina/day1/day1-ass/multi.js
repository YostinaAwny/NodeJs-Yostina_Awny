function multi(number1,number2){
    if(isNaN(number1)||isNaN( number2))
    {
        return "You must enter only numbers";
    }
    else
    {
        return number1*number2;
    }
}
module.exports=multi;