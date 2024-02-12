var eq = ""
function changeString(num) {
    try {
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
    catch (error) {
        document.getElementById('result').innerHTML = "ERROR"
        eq = ''
    }
}