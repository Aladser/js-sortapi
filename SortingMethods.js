/**
 * Сортировочные методы
 */
class SortingMethods{

    // -------Сортировка пузырьком-------
    static bubbleSort(arr, property, type){
        arr = arr.slice(0);
        for(let i=0; i<arr.length; i++){
            for(let j=1; j<arr.length-i; j++){
                if(type === 'возрастание'){
                    if(arr[j-1][property]>arr[j][property]) 
                        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                }
                else{
                    if(arr[j-1][property]<arr[j][property]) 
                        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];    
                }            
            }
        }
        return arr;
    }

    // -------Сортировка вставками-------
    static insertSort(arr, property, type){
        arr = arr.slice(0);
        for(let i=1; i<arr.length; i++){
            const current = arr[i];
            let j = i;

            if(type === 'возрастание'){
                while (j > 0 && arr[j - 1][property] > current[property]) {
                    arr[j] = arr[j - 1]; // сдвиг места для вставки
                    j--;
                }
            }
            else{
                while (j > 0 && arr[j - 1][property] < current[property]) {
                    arr[j] = arr[j - 1]; // сдвиг места для вставки
                    j--;
                }
            }

            arr[j] = current; // вставка в свободную ячейку
        }
        return arr;    
    }

    // -------Сортировка выбором-------
    static selectionSort(arr, property, type){
        arr = arr.slice(0);
        for(let i=0; i<arr.length; i++){
            // поиск минимума
            let minIndex = i;
            if(type === 'возрастание'){
                for(let j=i+1; j<arr.length; j++){
                    if(arr[j][property]<arr[minIndex][property]) minIndex = j;
                }
            }
            else{
                for(let j=i+1; j<arr.length; j++){
                    if(arr[j][property]>arr[minIndex][property]) minIndex = j;
                }
            }

            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
    }

    // -------слияние-------
    // слияние малых частей
    static #merge(arrFirst, arrSecond, property, type){
        const arrSort = [];
        let i = 0;
        let j = 0;
        if(type === 'возрастание'){
            while (i < arrFirst.length && j < arrSecond.length) {
                arrSort.push( arrFirst[i][property]<arrSecond[j][property] ? arrFirst[i++] : arrSecond[j++] );
            }
        }
        else{
            while (i < arrFirst.length && j < arrSecond.length) {
                arrSort.push( arrFirst[i][property]>arrSecond[j][property] ? arrFirst[i++] : arrSecond[j++] );
            }
        }
        return arrSort.concat(arrFirst.slice(i).length!=0 ? arrFirst.slice(i) : arrSecond.slice(j));
    };
    // рекурсивный алгоритм слияния
    static mergeSort(arr, property, type){
        arr = arr.slice(0);
        if (arr.length <= 1) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const arrLeft = arr.slice(0, middle);
        const arrRight = arr.slice(middle);
        return this.#merge(this.mergeSort(arrLeft, property, type), this.mergeSort(arrRight, property, type), property, type);
    };

    // ------Быстрая сортировка -------
    // функция разделитель
    static #partition(items, property, type, left, right) {
        var pivot = items[Math.floor((right + left) / 2)], i = left, j = right;
        while (i <= j) {
            if(type === 'возрастание'){
                while (items[i][property] < pivot[property]) {
                    i++;
                }
                while (items[j][property] > pivot[property]) {
                    j--;
                }
            }
            else{
                while (items[i][property] > pivot[property]) {
                    i++;
                }
                while (items[j][property] < pivot[property]) {
                    j--;
                }                
            }
            if (i <= j) {
                [items[i], items[j]] = [items[j], items[i]];
                i++;
                j--;
            }
        }
        return i;
    }
    // алгоритм быстрой сортировки
    static quickSort(arr, property, type, left, right) {
        if(arr.length == 1) return arr;  

        left = left == undefined ? 0 : left;
        right = right == undefined ? arr.length-1 : right;
        let index = this.#partition(arr, property, type, left, right);
        if (left < index - 1) {
            this.quickSort(arr,  property, type, left, index - 1);
        }
        if (index < right) {
            this.quickSort(arr,  property, type, index, right);
        }
        return arr;
    }

}