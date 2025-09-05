export function mergeSort(unsortedArray: number[]): number[] {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const mid = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, mid);
    const right = unsortedArray.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray: number[], rightArray: number[]): number[] {
    let sortedArray: number[] = [],
        leftIndex: number = 0,
        rightIndex: number = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftNum = leftArray[leftIndex]!,
            rightNum = rightArray[rightIndex]!;
        if (leftNum < rightNum) {
            sortedArray.push(leftNum);
            leftIndex++;
        } else {
            sortedArray.push(rightNum);
            rightIndex++;
        }
    }

    return sortedArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
}
