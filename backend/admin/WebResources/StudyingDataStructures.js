class Studying_ComputerScience {
  constructor() {
    this.Storage = {
      Core_OnlineResource_List: [
        {Core: 
          {
          // Primarily for DataStructures and Algorithms
          AlgoExpert: 'https://www.algoexpert.io/product',
          CodeWars: 'https://www.codewars.com/dashboard',
          LeetCode: 'https://leetcode.com/',
          Udemy: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344866?start=0#overview',
          }
        },
      ]
    }
  }

  fxA00_printStorage = () => {
    console.log(this.Storage.Core_OnlineResource_List)
  }
}


const test01 = new Studying_ComputerScience()

test01.fxA00_printStorage();


