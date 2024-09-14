function createDomElements(data) {
  var parentElement = document.getElementById("mainArea");
  parentElement.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var childElement = document.createElement("div");
    var grandChild1 = document.createElement("span");
    grandChild1.innerHTML = data[i].title;
    var grandChild2 = document.createElement("span");
    grandChild2.innerHTML = data[i].description;
    var grandChild3 = document.createElement("button");
    grandChild3.innerHTML = "Delete";
    grandChild3.setAttribute("onClick", "deleteTodo(" + data[i].id + ")");
    childElement.appendChild(grandChild1);
    childElement.appendChild(grandChild2);
    childElement.appendChild(grandChild3);
    childElement.setAttribute("id", "Child" + data[i].id);
    parentElement.appendChild(childElement);
  }
}
// window.setInterval(() => {
//   let todos = [];
//   for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
//     todos.push({
//       title: "Go to GYM",
//       description: "at 5",
//       id: i + 1,
//     });
//   }
//   createDomElements(todos);
// }, 1000);
