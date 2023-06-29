// Copyright @ 2022 AlgoExpert LLC. All rights reserved.

// Best: O(n^2) time | O(1) Space
// Average: O(n^2) time | O(1) Space
// Worst: O(n^2) time | O(1) Space

function selectionSort(array) {
   let startIdx = 0
   while (startIdx < array.length -1) {
      let smallestIdx = startIdx;
      for (let i = startIdx + 1; i < array.length; i++) {
         if (array[smallestIdx] > array[i]) smallestIdx = i;
      }

      swap(startIdx, smallestIdx, array)
      startIdx++
   }

   return array
}

function swap(i, j, array) {
   const temp = array[j]
   array[j] = array[i]
   array[i] = temp; 
}