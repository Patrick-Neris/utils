import { mergeSort } from "../src/mergeSort";

describe("mergeSort", () => {
    describe("When array is empty", () => {
        const arr: number[] = [];
        it("Should return empty array", () => {
            expect(mergeSort(arr)).toStrictEqual([]);
        });
    });
    describe("When array has only one value", () => {
        const arr: number[] = [1];
        it("Should return the array", () => {
            expect(mergeSort(arr)).toStrictEqual([1]);
        });
    });
    describe("When array has more than one value", () => {
        const arr = [1, 5, 7, 12, 1, 4, 8];
        it("Should return the sorted array", () => {
            expect(mergeSort(arr)).toStrictEqual([1, 1, 4, 5, 7, 8, 12]);
        });
    });
});
