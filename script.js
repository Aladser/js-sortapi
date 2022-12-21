let games = [
    {name:"Tropico 6", time: 130},
    {name:"Skyrim", time: 155},
    {name:"Metro Exodus", time: 55},
    {name:"Read Dead Redemption", time: 177},
    {name:"Need for Speed Playback", time: 70},
    {name:"Grim Dawn", time: 58},
];

let sortType = SortAPI.INCREASE;
const sortCollection = [
    {name:'Оригинальный список', gamesList: games},
    {name:'Пузырьковая сортировка', gamesList: SortAPI.bubbleSort(games, 'time', sortType)},
    {name:'Сортировка вставками', gamesList: SortAPI.insertSort(games, 'time', sortType)},
    {name:'Сортировка выбором', gamesList: SortAPI.selectionSort(games, 'time', sortType)},
    {name:'Сортировка слиянием', gamesList: SortAPI.mergeSort(games, 'time', sortType)},
    {name:'Быстрая сортировка', gamesList: SortAPI.quickSort(games, 'time', sortType)}
];

function printList(output, arr){
    arr.forEach(elem => {
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

let sortlists = document.querySelectorAll('.sortlist');
for(let i=0; i<sortCollection.length; i++){
    printList(sortlists[i], sortCollection[i].gamesList);
}


