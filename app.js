var eq = ""
function changeString(num) {
    if (num != 'equal') {
        eq += num
        document.getElementById('result').innerHTML = eq
    }
    else {
        eq += " = " + eval(eq)
        document.getElementById('result').innerHTML = eq
        eq = ''
    }
}