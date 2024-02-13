var eq = ""
function changeString(num, complicated = false) {
    try {
        if (complicated == false) {
            if (num != 'equal') {
                if (num == "AC") {
                    eq = ''
                    document.getElementById('result').innerHTML = eq
                }
                else if (num == "BS") {
                    eq = eq.slice(0, -1);
                    document.getElementById('result').innerHTML = eq
                }
                else {
                    eq += num
                    document.getElementById('result').innerHTML = eq
                }
            }
            else{
                var result = eval(eq)
                eq += " = " + eval(eq)
                document.getElementById('result').innerHTML = eq
                eq = result
            }
        }
        else {
            if (num == 'sin') {
                eq = eval(Math.sin(eq))
                document.getElementById('result').innerHTML = eq
            }
            else if (num == 'sqrt') {
                eq = eval(Math.sqrt(eq))
                document.getElementById('result').innerHTML = eq
            }
            else if (num == 'e') {
                eq = eval(Math.log(eq))
                document.getElementById('result').innerHTML = eq
            }
            else if (num == 'log') {
                eq = eval(Math.log(eq, 10))
                document.getElementById('result').innerHTML = eq
            }
            else if (num == 'cos') {
                eq = eval(Math.cos(eq, 10))
                document.getElementById('result').innerHTML = eq
            }
            else if (num == 'tan') {
                eq = eval(Math.tan(eq, 10))
                document.getElementById('result').innerHTML = eq
            }
        }
    }
    catch (error) {
        document.getElementById('result').innerHTML = "ERROR"
        eq = ''
    }
}

