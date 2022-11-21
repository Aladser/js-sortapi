let output = document.querySelector('#list-section');

// заготовка
games = [
    {name:"Tropico 6", time: 130},
    {name:"Skyrim", time: 155},
    {name:"Metro Exodus", time: 55},
    {name:"Read Dead Redemption", time: 177},
    {name:"Need for Speed Playback", time: 70},
    {name:"Grim Dawn", time: 58},
];

// Печать списка
function printList(arr, headText){
    // заголовок
    let listHeader = document.createElement("p");
    listHeader.style.fontWeight = 'bolder';
    listHeader.style.marginTop = '5px';
    listHeader.textContent = headText;   
    output.appendChild(listHeader);
    // список
    let listTag = document.createElement("ol");
    arr.forEach((element, index) => {
        let li = document.createElement("li");
        li.textContent = `${element.name}: ${element.time}ч`;
        listTag.appendChild(li);
    });
    output.appendChild(listTag);
}

printList(games, "Изначальный массив", "start-list");
printList(SortingMethods.bubbleSort(games, (game1, game2) => game1.time>game2.time), "Пузырьковая сортировка");
printList(SortingMethods.insertSort(games, (game1, game2) => game1.time>game2.time), "Сортировка вставками");
printList(SortingMethods.selectionSort(games, (game1, game2) => game1.time>game2.time), "Сортировка выбором");
printList(SortingMethods.mergeSort(games, (game1, game2) => game1.time<game2.time), "Сортировка слиянием");
printList(SortingMethods.quickSort(games), "Быстрая сортировка");