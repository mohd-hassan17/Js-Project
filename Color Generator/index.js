const getColor = () => {

    const RandomColor = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + RandomColor.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById('color-code').innerText = randomcode
}

// event call
document.getElementById('btn').addEventListener(
    "click",
    getColor
)

// initial call page load hote hi chale ga 
getColor();