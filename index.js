console.log("JS Working");

const cardsContainer = document.querySelector(".cards_container");
//console.log(cardsContainer);

const globalStore = [];

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, //generates the unique id (Date,now)
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdesc").value,
  };

  console.log(taskData);

  
  cardsContainer.insertAdjacentHTML("beforeend", generateNewCards(taskData));

  globalStore.push(taskData);

  localStorage.setItem("taskY", JSON.stringify({ cards: globalStore })); //json.stringify accepts an object ie cards
  //  console.log(cardsContainer)

  
};





const generateNewCards = (taskData) => `
<div class="col-md-6 col-lg-4" id="${taskData.id}">
<div class="card text-center">
  <div class="card-header d-flex justify-content-end">
    <button type="button" class="btn btn-outline-success mr-2">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <img class="card-img-top" src="${taskData.imageUrl}" style:"width:100%"
  alt="Card image cap">

  <div class="card-body">
    <h5 class="card-title">${taskData.taskTitle}</h5>
    <p class="card-text">
    ${taskData.taskDescription}
    </p>
    <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  </div>
  <div class="card-footer text-muted">
    <button
      type="button"
      class="btn btn-outline-success mr-2 float-right"
    >
      Open Task
    </button>
  </div>
</div>
</div>`;







const loadCardData = () => {
    //will call localstorge to get tasky card data

    const getCardFromLocalStorage = localStorage.getItem("taskY");

    //convert from string to normal JS object

    const { cards } = JSON.parse(getCardFromLocalStorage);

    //loop over those  array of task objects  to create HTML cards and inject it to DOM
    cards.map((cardObject) => {
      cardsContainer.insertAdjacentHTML(
        "beforeend",
        generateNewCards(cardObject)
      );

      //update globalStorage
      globalStore.push(cardObject);
    });
  };

//API (APPLICATION PROGRAMMING INTERFACE)

//localstorge->application
//access  application via ->programming
//Interface as middleman(inerface is something  to interact with applications progamtically)

//localstorage -->with some methods(Add,delete,update) -->js
