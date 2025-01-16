const quiz = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;
// pehle index 0 liye hai kyoki agle que aaye
let questionBox = document.getElementById('questionBox')
let Allinputs = document.querySelectorAll("input")

let     correct = 0,
        incorrect = 0,
        total = quiz.length;

const Loadque = () =>{

    if(index === total){
        return quizEnd()
    }
    // agar question khatam hogai to quizEnd() ko call kardo usme out off kitna hai wo bataye ga
    reset()
    // reset() function koi bhi input ko phele se check nhi hone dega
    const data = quiz[index]
    questionBox.innerText = `${index +1}) ${data.question}`

    Allinputs[0].nextElementSibling.innerText = data.a
    Allinputs[1].nextElementSibling.innerText = data.b
    Allinputs[2].nextElementSibling.innerText = data.c
    Allinputs[3].nextElementSibling.innerText = data.d

}

document.getElementById('btn').addEventListener(
    'click',
    function() {

        const data = quiz[index]
        const ans = getAnswer()
        if(ans === data.correct){
            correct++;
        }
        else{
            incorrect++;
        }
        index++;
        Loadque()
        
    }   
)

const getAnswer = () => {

    let ans;
    Allinputs.forEach(
        (input) =>{
            if(input.checked){
                ans = input.value;
            }
        }
            
    )
    return ans;
}

const reset =() => {
    Allinputs.forEach(
        (input) =>{
            input.checked = false;
        }
 )
}

const quizEnd = () =>{
    document.getElementsByClassName('box')[0].innerHTML  =` 
    <div style="text-align: center">
    <h2 class="w-100" style= "font-size: 28px"> Hii, you've scored </h2>
      <h3 style= "font-size: 28px">   ${correct} / ${total} </h3>
</div>`

}
Loadque();