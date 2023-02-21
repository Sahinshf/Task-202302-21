let button = document.querySelector(".todo_list_button");
let todo_list = document.querySelector(".todo_list_item");
let closee = document.getElementsByClassName("closee");
let close_btn;

let addList = function () {
  let li = document.createElement("li");
  let input_text = document.querySelector(".todo_list_input").value;
  let li_text = document.createTextNode(input_text);
  document.querySelector(".todo_list_input").value = "";

  if (input_text === "") {
    alert("You must write something!");
  } else {
    li.appendChild(li_text);
    close_btn = document.createElement("SPAN");
    let close_txt = document.createTextNode("Delete");

    li.className = "list";
    close_btn.classList.add("closee");
    close_btn.appendChild(close_txt);
    li.appendChild(close_btn);
    todo_list.appendChild(li);
  }

  close_btn.addEventListener("click", function () {
    todo_list.removeChild(li);
  });
};

document.onkeydown = (event) => {
  switch (event.which) {
    case 13:
      addList();
      break;

    default:
      break;
  }
};
button.addEventListener("click", addList);

//#region some trials
// button.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     document.querySelector("todo_list_button").click();
//   }
// });

// button.addEventListener("keyup", (event) => {
//   if (event.code === "Enter") {
//     event.preventDefault();
//     // document.querySelector("todo_list_button").submit();
//     button.addEventListener("click", addList);
//   }
// });

// console.log(close_btn);
// console.log(todo_list);
// console.log(li);
// let index;
// console.log(closee);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// for (let i = 0, len = closee.children.length; i < len; i++) {
//   (function (index) {
//     closee.children[i].onclick = function () {
//       alert(index);
//     };
//   })(i);
// }

// closee.forEach((close_tag) => {
//   close_tag.addEventListener("click", (e) => {
//     index = e.target.index;
//   });
// });

// let removeItem = function () {
//   for (let i = 0; i < closee.length; i++) {
//     index = closee[i].target.index;
//   }
// };
// console.log(index);

// for (let i = 0; i < closee.length; i++) {
//   closee[i].addEventListener("click", removeItem);
// }

// for (i = 0; i < closee.length; i++) {
//   closee[i].index = i;

//   closee[i].addEventListener(
//     "mouseover",
//     function (e) {
//       e.target.innerHTML = e.target.index;
//     },
//     false
//   );
// }

// closee.forEach((element) => {
//   if (index == element) {
//     closee[element].style.display = "none";
//   }
// });
//#endregion
