// declares the variable eq, which is the equation that is altered and solved throughout the calculator
var eq = ""
//function changeString alters the string and takes in the parameter 'num'. This is the value of the button that the user clicks. There is also an optionable parameter 'complicated', which is alway set to false unless indicated. It is true when advanced functions, such as tan or log are ran.
function changeString(num, complicated = false) {
   //try and catch statement to grab any errors and output accordingly for the user 
    try {
        //checks if the complicated value is false or not.
        if (complicated == false) {
            //if the equal sign in not click, then it knows to note calculate anything and continue
            if (num != 'equal') {
                //it proceeds to check if the clear button is clicked
                if (num == "AC") {
                    //clears the eq value and resets everything basically
                    eq = ''
                    //updates the display to the current value of eq, which is a combination of what the user has clicked so far button wise.
                    document.getElementById('result').innerHTML = eq
                }
                //then checks if the back space button is clicked
                else if (num == "BS") {
                    //removes the last part of the string of eq, aka the last button/value the user clicked/inputed.
                    eq = eq.slice(0, -1);
                    //updates the display to the current value of eq, which is a combination of what the user has clicked so far button wise.
                    document.getElementById('result').innerHTML = eq
                }
                else {
                    //updates the equation and adds the value of the button the user clicked to the variable. This is how a equation like 2 + 2 can be created. The user clicks 2, which is added to the string, then + is clicked, which is added and so on.
                    eq += num
                    //updates the display to the current value of eq, which is a combination of what the user has clicked so far button wise.
                    document.getElementById('result').innerHTML = eq
                }
            }
            //this runs if the equal sign button is clicked
            else{
                //declares a new variable using eval, which evalutes the string the user created. The answer is stored in a variable 'result'
                var result = eval(eq)
                //properly formats the string with an equal sign for a beter look
                eq += " = " + eval(eq)
                //updates the display with the answer and it is fully formatted
                document.getElementById('result').innerHTML = eq
                //sets the eq variable to the answer. This means the eq now is fresh and starts with the previous answer, allowing for continous math as needed. The AC button can be clicked to clear everything though.
                eq = result
            }
        }
        //this runs if the complicated value is 'true', meaning the math function that was commanded was advanced (trig, log, etc).
        else {
            //checks if the user clicked the sin button
            if (num == 'sin') {
                //runs the sin function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.sin(eq))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
            //checks if the user clicked the square root button
            else if (num == 'sqrt') {
                //runs the sqrt function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.sqrt(eq))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
            //checks if the user clicked the natural log button
            else if (num == 'e') {
                //runs the log (e base) function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.log(eq))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
            //checks if the user clicked the base-10 logarithm button
            else if (num == 'log') {
                //runs the log with base 10 function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.log(eq, 10))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
            //checks if the user clicked the cos button
            else if (num == 'cos') {
                //runs the cos function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.cos(eq, 10))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
            //checks if the user clicked the tan button
            else if (num == 'tan') {
                //runs the tan function (from the built-in Math module) and stores the answer into the global variable eq.
                eq = eval(Math.tan(eq, 10))
                //updates the display with the current value of eq (aka the answer in this case)
                document.getElementById('result').innerHTML = eq
            }
        }
    }
    //this is part of the try catch statement. It tries the code above and if it erors, it will catch it and run the following code
    catch (error) {
        //changes the display value and shows the user the words 'ERROR'
        document.getElementById('result').innerHTML = "ERROR"
        //resets the eq value and clears it so the error does not continue.
        eq = ''
    }
}
function keyboard(event) {
    //The following comments are univeral for all cases of the keyboard function
    //event.key gets the value of the key that was pressed on the keyboard
    //event.preventDefault prevents the default function of the key
    if (event.key === "1") {
        event.preventDefault();
        changeString(1)
    }
    else if (event.key === "0") {
        event.preventDefault();
        changeString(0)
    }
    else if (event.key === "2") {
        event.preventDefault();
        changeString(2)
    }
    else if (event.key === "3") {
        event.preventDefault();
        changeString(3)
    }
    else if (event.key === "4") {
        event.preventDefault();
        changeString(4)
    }
    else if (event.key === "5") {
        event.preventDefault();
        changeString(5)
    }
    else if (event.key === "6") {
        event.preventDefault();
        changeString(6)
    }
    else if (event.key === "7") {
        event.preventDefault();
        changeString(7)
    }
    else if (event.key === "8") {
        event.preventDefault();
        changeString(8)
    }
    else if (event.key === "9") {
        event.preventDefault();
        changeString(9)
    }
    else if (event.key === "+") {
        event.preventDefault();
        changeString(" + ")
    }
    else if (event.key === "-") {
        event.preventDefault();
        changeString(" - ")
    }
    else if (event.key === "/") {
        event.preventDefault();
        changeString(" / ")
    }
    else if (event.key === "*" || event.key === "x") {
        event.preventDefault();
        changeString(" * ")
    }
    else if (event.key === "^") {
        event.preventDefault();
        changeString("**")
    }
    else if (event.key === ".") {
        event.preventDefault();
        changeString(".")
    }
    else if (event.key === "Enter" || event.key === '=') {
        event.preventDefault();
        changeString("equal")
    }
    else if (event.key === "Backspace" || event.key === 'Delete') {
        event.preventDefault();
        changeString("BS")
    }
}
//checks and when the a key is pressed down, the function keyboard is ran.
document.addEventListener("keydown", keyboard);
