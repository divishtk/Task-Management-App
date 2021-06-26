console.log("JS Working");


const cardsContainer = document.querySelector(".cards_container");


const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`, //generates the unique id (Date,now)
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdesc").value,
  };

  console.log(taskData);


  const newCards = `
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


  cardsContainer.insertAdjacentHTML("beforeend",newCards);

  //  console.log(cardsContainer)
};


