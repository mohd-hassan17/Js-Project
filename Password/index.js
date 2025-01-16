const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById('passBox')
const totalchar = document.getElementById('totalchar')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const Number = document.getElementById('Number')
const Symbols = document.getElementById('Symbols')

const getRandomdata = (dataSet) => {
   return dataSet [Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (Password = "") => {
    if(uppercase.checked){
        Password  += getRandomdata(upperSet)

        // += sign is used to add inside 
    }
    if(lowercase.checked){
        Password  += getRandomdata(lowerSet)
    }
    if(Number.checked){
        Password  += getRandomdata(numberSet)
    }
    if(Symbols.checked){
        Password  += getRandomdata(symbolSet)
    }

    if (Password.length < totalchar.value) {
        return generatePassword(Password)
    }

    passBox.innerText = truncateString(Password, totalchar.value);

    // truncate function here is used to have exact number of password we are selectig
}

document.getElementById('btn').addEventListener(
    "click",
    function(){
        generatePassword();
    }
)
// truncateString function is used here to adjust  
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}