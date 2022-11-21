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
function printList(arr, headText){
    let head = document.createElement("div");
    head.style.fontWeight = 'bolder';
    head.style.marginTop = '5px';
    head.textContent = headText;
    output.appendChild(head);
    arr.forEach((element, index) => {
        let div = document.createElement("div");
        div.textContent = `${index+1}. ${element.name}: ${element.time}ч`;
        output.appendChild(div);
    });
}

printList(games, "Изначальный массив");
printList(quickSort(games), "Сортированный массив");
//addList(mergeSort(games, (game1, game2) => game1.time<game2.time));
//addList(bubbleSort(games, (game1, game2) => game1.time>game2.time));
//addList(insertSort(games, (game1, game2) => game1.time>game2.time));
//addList(selectionSort(games, (game1, game2) => game1.time>game2.time));