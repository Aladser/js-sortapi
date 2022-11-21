let output = document.querySelector('section');

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
function printList(arr, headText, headId){
    // заголовок
    let listHeader = document.createElement("p");
    listHeader.style.fontWeight = 'bolder';
    listHeader.style.marginTop = '5px';
    listHeader.textContent = headText;   
    output.appendChild(listHeader);
    // список
    let listTag = document.createElement("ol");
    listTag.id = headId;
    arr.forEach((element, index) => {
        let li = document.createElement("li");
        li.textContent = `${element.name}: ${element.time}ч`;
        listTag.appendChild(li);
    });
    output.appendChild(listTag);
}

printList(games, "Изначальный массив", "start-list");
printList(quickSort(games), "Быстрая сортировка");
//addList(mergeSort(games, (game1, game2) => game1.time<game2.time));
//addList(bubbleSort(games, (game1, game2) => game1.time>game2.time));
//addList(insertSort(games, (game1, game2) => game1.time>game2.time));
//addList(selectionSort(games, (game1, game2) => game1.time>game2.time));