const sortingMethods = ['bubbleSort','insertSort','selectionSort','mergeSort','quickSort'];
const sortHeaders = ['Пузырьковая сортировка','Сортировка вставками','Сортировка выбором','Сортировка слиянием','Быстрая сортировка'];
const sortlistOutput = document.querySelectorAll('.sortlist');
const btnSort = document.querySelector('.btn-sort');
let sortType = SortAPI.INCREASE;

/** генерация случайного целого числа */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/** список игр */
let games = [
    {name:"Tropico 6", time: 130},
    {name:"Skyrim", time: 155},
    {name:"Metro Exodus", time: 55},
    {name:"Read Dead Redemption", time: 177},
    {name:"Need for Speed Playback", time: 70},
    {name:"Grim Dawn", time: 58},
];

let arrays = [];
arrays[0] = games;

/** добавить список игр */
function addSortlistContent(output, arr){
    arr.forEach(function(elem){
       let elemDiv = document.createElement('div');
       elemDiv.className = "sortlist__elem sortlist__content";

       let name =  document.createElement('p');
       name.textContent = elem.name;
       let time = document.createElement('p');
       time.textContent = elem.time;
       
       elemDiv.appendChild(name);
       elemDiv.appendChild(time);
       output.appendChild(elemDiv);
    });
}
/** удалить список игр*/
function deleteSortlistContent(output){
    output.querySelectorAll('.sortlist__content').forEach(elem => elem.remove());
}

/** создать сортированные массивы */
function sortData(){
    sortType = sortType==SortAPI.INCREASE ? SortAPI.DESCENDING : SortAPI.INCREASE;
    for(let i=0; i<sortingMethods.length; i++){
        arrays[i+1] = SortAPI[sortingMethods[i]](games, 'time', sortType);
    }
}
/** Удалить сортированные массивы*/
function clearData(){
    for(let i = 1; i<sortlistOutput.length; i++){
        deleteSortlistContent(sortlistOutput[i]);
    }
}

/** вывести сортированные массивы */
function display(){
    for(let i=0; i<sortingMethods.length; i++){
        sortlistOutput[i+1].querySelector('.sortlist__header').textContent = sortHeaders[i];
        addSortlistContent(sortlistOutput[i+1], arrays[i+1]);
    }
}

addSortlistContent(sortlistOutput[0], games);
sortData();
display();

function shuffleArray(_arr){
    let arr = _arr.slice(0);
    let rslt = [];
    let index;
    while(arr.length > 0){
      index = getRandomInt(0, arr.length-1);
      rslt.push(arr[index]);
      arr.splice(index, 1);
    }
    return rslt;
}

// возрастание - \u{2191}; убывание - \u{2193}
btnSort.addEventListener('click', function(){   
    this.value = sortType==SortAPI.INCREASE ? "\u{2191}" : "\u{2193}";
    sortData();
    clearData();
    display();
})

document.querySelector('.btn-shuffle').addEventListener('click', function(){
    btnSort.value = 'Сортировать';
    for(let i=1; i<sortlistOutput.length; i++) arrays[i] = shuffleArray(arrays[i]);
    clearData();
    display();
});