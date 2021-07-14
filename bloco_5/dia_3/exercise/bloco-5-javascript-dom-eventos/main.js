function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      
  
      weekDaysList.appendChild(dayListItem);

    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function makeDaysList(){
      let list = document.getElementById('days');
  for(let index=0; index< dezDaysList.length; index+=1){
        
    let dias = document.createElement("li");
    dias.className = "day" 
    dias.innerText = dezDaysList[index];
    list.appendChild(dias);
    if(dezDaysList[index] === 24 | dezDaysList[index] === 25 | dezDaysList[index] === 31){
        dias.className += " holiday";
    } if(dezDaysList[index] === 4 | dezDaysList[index] === 11 | dezDaysList[index] ===25| dezDaysList[index] === 18){
        dias.className += " friday";
    }
  }
}
makeDaysList();

//2
function makeHolidayButton(buttonName){
    let button = document.createElement("button");
    let pai = document.querySelector(".buttons-container")
    button.id = "btn-holiday";
    button.innerHTML = buttonName;
    pai.appendChild(button);

}
makeHolidayButton("Feriado");

//3
 
function makeButtonClick(){
    let getButton = document.querySelector("#btn-holiday");
    let getButtonClass = document.querySelectorAll(".holiday");
    let begin = 'rgb(238,238,238)';
    let newColor = 'green';


    getButton.addEventListener("click", function(){
        for(let index=0; index<getButtonClass.length;index+=1){
        if(getButtonClass[index].style.backgroundColor === newColor){
        getButtonClass[index].style.backgroundColor = begin;
    } else{
        getButtonClass[index].style.backgroundColor = newColor;
    }
}
})
}
makeButtonClick();

//4
function makeButtonFriday(fridayName){
    let fridayButton = document.createElement("button");
    fridayButton.innerText = fridayName;
    fridayButton.id = "btn-friday";
    let divPai = document.querySelector('.buttons-container');
    divPai.appendChild(fridayButton); 
}
makeButtonFriday("Sexta-feira");

//5
function makeFridayClick(){
    let buttonFriday = document.querySelector("#btn-friday");
    let friday = document.querySelectorAll(".friday");
    

    buttonFriday.addEventListener("click", function(){
    for(let index=0; index< friday.length; index+=1){
        let fridayNumbers = [ 4, 11, 18, 25];
        if(friday[index].innerText !== "Sextou!!" ){
            friday[index].innerText = "Sextou!!";
        } else{
            friday[index].innerText = fridayNumbers[index];
        }
    }
})
}
makeFridayClick();

//6
function zoom(){
   
    let getClassDay = document.querySelector("#days");
    
    getClassDay.addEventListener("mouseover", function(){
        event.target.style.fontSyze = '30px';
        event.target.style.fontWeight = '600';
    })
}


function zoomOut(){
    let getClassDays = document.querySelector("#days")

    getClassDays.addEventListener("mouseout", function(){
        event.target.style.fontSyze ='20px';
        event.target.style.fontWeight = '200';
    })
}
zoom();
zoomOut();

//7
function addTask(string){
    let task = document.createElement("span");
    task.innerText = string;
    let divPai = document.querySelector(".my-tasks");
    divPai.appendChild(task);

    

}
addTask("cozinhar");

//8
function addSubtitle(string){
    let newTask = document.createElement("div");
    newTask.className = "task"
    newTask.style.backgroundColor = string;
    let divPai =document.querySelector('.my-tasks');
    divPai.appendChild(newTask);
}
addSubtitle("green");