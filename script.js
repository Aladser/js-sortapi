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
sortedLists.set("Пузырьковая сортировка", SortingMethods.bubbleSort(games, 'time', 'возрастание'));
sortedLists.set("Сортировка вставками", SortingMethods.insertSort(games, 'time', 'возрастание'));
sortedLists.set("Сортировка выбором", SortingMethods.selectionSort(games, 'time', 'возрастание'));
sortedLists.set("Сортировка слиянием", SortingMethods.mergeSort(games, 'time', 'возрастание'));
sortedLists.set("Быстрая сортировка", SortingMethods.quickSort(games.slice(0), 'time', 'возрастание'));

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


