const test = () => {
  var x = document.getElementById("type");
  if (x.style.display === "none") {
    x.style.display = "flex";
    document.getElementById("symbol").innerHTML = "-";
  } else {
    x.style.display = "none";
    document.getElementById("symbol").innerHTML = "+";
  }
};

let i;
let id = 0;
let Name = document.getElementById("name"),
  Surname = document.getElementById("surname"),
  Email = document.getElementById("email"),
  user = document.getElementById("user");

onFormSubmit = () => {
  let formData = readFormData();
  insertNewRecord(formData);
};

readFormData = () => {
  let formData = {
    name: Name.value,
    surname: Surname.value,
    email: email.value,
  };
  return formData;
};

const insertNewRecord = (data) => {
  let parent = document.createElement("ul");
  parent.className = "user";
  let listOne = document.createElement("li");
  listOne.innerHTML = `<label for="name">Name</label> <br>`;
  let inputOne = document.createElement("input");
  inputOne.setAttribute("type", "text");
  inputOne.setAttribute("value", data.name);
  listOne.appendChild(inputOne);
  parent.appendChild(listOne);

  let listTwo = document.createElement("li");
  listTwo.innerHTML = `<label for="name">SurName</label> <br>`;
  let inputTwo = document.createElement("input");
  inputTwo.setAttribute("type", "text");
  inputTwo.setAttribute("value", data.surname);
  listTwo.appendChild(inputTwo);
  parent.appendChild(listTwo);

  let listThree = document.createElement("li");
  listThree.innerHTML = `<label for="email">Email</label> <br>`;
  let inputThree = document.createElement("input");
  inputThree.setAttribute("type", "email");
  inputThree.setAttribute("value", data.email);
  listThree.appendChild(inputThree);
  parent.appendChild(listThree);

  let listFour = document.createElement("li");
  listFour.innerHTML = `<span class="icon"><i class="fa fa-trash"></i>Remove</span>`;
  listFour.setAttribute("id", "newsLetter" + id++);
  listFour.setAttribute("onClick", "deleteRow(this.id)");
  parent.appendChild(listFour);
  user.appendChild(parent);
  user.className = "signup__form";
};

function deleteRow(id) {
  parentElement = document.getElementById(id).parentNode;
  console.log(parentElement);
  parentElement.remove();
}
