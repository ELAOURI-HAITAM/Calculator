var display = document.getElementById("int")

function add(numbers)
{
    display.value += numbers
}
function remove_all()
{
display.value = ""
}

function calculate()
{
try
{
    display.value = eval(display.value)
}
catch(error)

{
    
        display.value = "MATH ERROR";
    
    
}
}

function del()
{
    
    var numbers = document.querySelectorAll("#int")

    for( let i = 0 ; i <=17 ; i++ )
    {
      display.value =  numbers[i].value.slice(0,-1)

    }

}