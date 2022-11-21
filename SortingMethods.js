class SortingMethods{
    // -------Сортировка пузырьком-------
    static bubbleSort(arr, compareFunc){
        arr = arr.slice(0);
        for(let i=0; i<arr.length; i++){
            for(let j=1; j<arr.length-i; j++){
                if(compareFunc(arr[j-1], arr[j])) 
                    [arr[j-1], arr[j]] = [arr[j], arr[j-1]];            
            }
        }
        return arr;
    }
    // -------Сортировка вставками-------
    static insertSort(arr, compareFunc){
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
    // -------Сортировка выбором-------
    static selectionSort(arr, compareFunc){
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
    // слияние малых частей
    static #merge(arrFirst, arrSecond, compareFunc){
        const arrSort = [];
        let i = 0;
        let j = 0;
        while (i < arrFirst.length && j < arrSecond.length) {
            arrSort.push( compareFunc(arrFirst[i], arrSecond[j]) ? arrFirst[i++] : arrSecond[j++] );
        }
        return arrSort.concat(arrFirst.slice(i).length!=0 ? arrFirst.slice(i) : arrSecond.slice(j));
    };
    // рекурсивный алгоритм слияния
    static mergeSort(arr, compareFunc){
        arr = arr.slice(0);
        if (arr.length <= 1) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const arrLeft = arr.slice(0, middle);
        const arrRight = arr.slice(middle);
        return this.#merge(this.mergeSort(arrLeft, compareFunc), this.mergeSort(arrRight, compareFunc), compareFunc);
    };
    // ------Быстрая сортировка -------
    // функция разделитель
    static #partition(items, left, right) {
        var pivot = items[Math.floor((right + left) / 2)], i = left, j = right;
        while (i <= j) {
            while (items[i].time < pivot.time) {
                i++;
            }
            while (items[j].time > pivot.time) {
                j--;
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
    static quickSort(arr, left, right) {
        if(arr.length == 1) return arr;  

        left = left == undefined ? 0 : left;
        right = right == undefined ? arr.length-1 : right;
        let index = this.#partition(arr, left, right);
        if (left < index - 1) {
            this.quickSort(arr, left, index - 1);
        }
        if (index < right) {
            this.quickSort(arr, index, right);
        }
        return arr;
    }

}