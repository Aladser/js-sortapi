// данные
let games = [
    {name:"Tropico 6", time: 130},
    {name:"Skyrim", time: 155},
    {name:"Metro Exodus", time: 55},
    {name:"Read Dead Redemption", time: 177},
    {name:"Need for Speed Playback", time: 70},
    {name:"Grim Dawn", time: 58},
];
let sortedLists = new Map();
sortedLists.set("Оригинальный список", games);
sortedLists.set("Пузырьковая сортировка", SortAPI.bubbleSort(games, 'time', SortAPI.INCREASE));
sortedLists.set("Сортировка вставками", SortAPI.insertSort(games, 'time', SortAPI.INCREASE));
sortedLists.set("Сортировка выбором", SortAPI.selectionSort(games, 'time', SortAPI.INCREASE));
sortedLists.set("Сортировка слиянием", SortAPI.mergeSort(games, 'time', SortAPI.INCREASE));
sortedLists.set("Быстрая сортировка", SortAPI.quickSort(games.slice(0), 'time', SortAPI.INCREASE));

// Печать списка
function printList(output, arr){
    arr.forEach(elem => {
       let elemDiv = document.createElement('div');
       elemDiv.className = "elem-sortlist content-sortlist";
       let name =  document.createElement('p');
       name.textContent = elem.name;
       let time = document.createElement('p');
       time.textContent = elem.time;
       elemDiv.appendChild(name);
       elemDiv.appendChild(time);
       output.appendChild(elemDiv);
    });
}

let divSortelists = document.querySelectorAll('.sortlist');
printList(divSortelists[0], sortedLists.get("Оригинальный список"));
printList(divSortelists[1], sortedLists.get("Пузырьковая сортировка"));
printList(divSortelists[2], sortedLists.get("Сортировка вставками"));
printList(divSortelists[3], sortedLists.get("Сортировка выбором"));
printList(divSortelists[4], sortedLists.get("Сортировка слиянием"));
printList(divSortelists[5], sortedLists.get("Быстрая сортировка"));


