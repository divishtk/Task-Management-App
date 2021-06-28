console.log("JS Working");

const cardsContainer = document.querySelector(".cards_container"); //fetching the row
//console.log(cardsContainer);

let globalStore = [];



const generateNewCards = (taskData) => `
<div class="col-md-6 col-lg-4">
<div class="card text-center">
  <div class="card-header d-flex justify-content-end">
    <button type="button" class="btn btn-outline-success mr-2">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" id="${taskData.id}" onclick="deleteCard.apply(this, arguments)">
      <i class="fas fa-trash-alt" id="${taskData.id}" onclick="deleteCard.apply(this, arguments)"></i>
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
















const loadCardData = () => {
    //will call localstorge to get tasky card data

    const getCardFromLocalStorage = localStorage.getItem("taskY");

    //convert from string to normal JS object

    const { cards } = JSON.parse(getCardFromLocalStorage);

    //loop over those  array of task objects  to create HTML cards and inject it to DOM
    cards.map((cardObject) => { cardsContainer.insertAdjacentHTML("beforeend",generateNewCards(cardObject));

      //update globalStorage
      globalStore.push(cardObject);

    });
  };

//API (APPLICATION PROGRAMMING INTERFACE)

//localstorge->application
//access  application via ->programming
//Interface as middleman(inerface is something  to interact with applications progamtically)

//localstorage -->with some methods(Add,delete,update) -->js






const deleteCard=(event)=>{
  event=window.event;

  //id
  const targetID=event.target.id;

  const tagname=event.target.tagName;



  



    //newwely updated array
      globalStore=globalStore.filter((cardObject)=>cardObject.id !== targetID);

      localStorage.setItem("taskY",JSON.stringify({cards:globalStore}));


      

        //contact parent

     //   cardsContainer.removeChild(document.getElementById(targetId));

     if(tagname=="BUTTON")   
      {

      return  cardsContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  
    }
      else{
  
        return  cardsContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  
      }


      //update Local localStorage


};   




