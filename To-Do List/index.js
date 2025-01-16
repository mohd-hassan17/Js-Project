const item = document.querySelector('#item');
const todo = document.querySelector('#todo');


item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            let cleanlist = this.value.trim();
            if (cleanlist.length > 0) {
                Addtodo (cleanlist)
                this.value = "";
            } else {
                return;
            }
        }
    }
)
// cleanlist khali jhaga ko trim karta hai
7
// const saveNotes = () => {
//     const notes = document.querySelectorAll(".box input");
//     const data = [];
//     notes.forEach(
//             (note) => {
//                 data.push(note.value)
//             }
//         )
//         // console.log(data)
        
//     if (data.length === 0) {
//         localStorage.removeItem("notes")
//     } else {
//         localStorage.setItem("notes", JSON.stringify(data))
//     }
// }

const Addtodo = (item) => {

    const listitem = document.createElement("li")
    listitem.innerHTML = `
      ${item}
        <i class=" fas fa-times"></i>
    `
   
    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle('done');
            
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove()
        //   saveNotes()
        }
        
    )
    localStorage.setItem("item", JSON.stringify(item))


    todo.appendChild(listitem)
    // saveNotes()
}

// (
//     function() {
//         const lsNotes = JSON.parse(localStorage.getItem("notes"));
//         // .parse se fir se Array me convert kar diye string se
//         if (lsNotes === null) {
//             Addtodo()

//         } else {
//             lsNotes.forEach(
//                 (lsNote) => {
//                     Addtodo(lsNote)
//                 }
//             )
//         }

//     }
// )()