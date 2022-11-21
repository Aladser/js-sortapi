let output = document.querySelector('main');
// Добавление заголовка
function addHeader(text){
    let head = document.createElement("div");
    head.style.fontWeight = 'bolder';
    head.style.marginTop = '5px';
    head.textContent = text;
    output.appendChild(head);
}
// добавление списка
function addList(arr){
    arr.forEach((element, index) => {
        let div = document.createElement("div");
        div.textContent = `${index+1}. ${element.name}: ${element.time}ч`;
        output.appendChild(div);
    });
}
// Сортировка пузырьком
function bubbleSort(arr, compareFunc){
    arr = arr.slice(0);
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length-i; j++){
            if(compareFunc(arr[j-1], arr[j])) 
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];            
        }
    }
    return arr;
}
// Сортировка вставками
function insertSort(arr, compareFunc){
    arr = arr.slice(0);
    for(let i=1; i<arr.length; i++){
        const current = arr[i];
        let j = i;
        while (j > 0 && compareFunc(arr[j - 1], current)) {
            arr[j] = arr[j - 1]; // сдвиг места для вставки
            j--;
        }
        arr[j] = current; // вставка в свободную ячейку
    }
    return arr;    
}
// Сортировка выбором
function selectionSort(arr, compareFunc){
    arr = arr.slice(0);
    for(let i=0; i<arr.length; i++){
        // поиск минимума
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(!compareFunc(arr[j], arr[minIndex])) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
// -------слияние-------
// алгоритм слияния более мелких частей
function merge(arrFirst, arrSecond){
    const arrSort = [];
    let i = j = 0;
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i].time < arrSecond[j].time) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    return [ ...arrSort,...arrFirst.slice(i),...arrSecond.slice(j)];
 };
 // сам рекурсивный алгоритм слияния
 function mergeSort(arr){
    // проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    // если массив содержит один элемент, возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // делим массив на две части
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
 };
 // ------Быстрая сортировка -------
 function quickSort(arr){
    
 }
// заготовка
games = [
    {name:"Tropico 6", time: 130},
    {name:"Skyrim", time: 155},
    {name:"Metro Exodus", time: 55},
    {name:"Read Dead Redemption", time: 176},
    {name:"Need for Speed Playback", time: 70},
    {name:"Grim Dawn", time: 58},
];

addHeader("Оригинальный список");
addList(games);
addHeader("Сортированный список");
//addList(mergeSort(games));
//addList(bubbleSort(games, (game1, game2) => game1.time>game2.time));
//addList(insertSort(games, (game1, game2) => game1.time>game2.time));
//addList(selectionSort(games, (game1, game2) => game1.time>game2.time));