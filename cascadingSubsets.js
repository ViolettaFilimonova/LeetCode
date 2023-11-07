// https://www.codewars.com/kata/545af3d185166a3dec001190

// DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function cascadingSubsets(arr, value) {
    let parent = []
    for (let j = 0; j <= arr.length - value; j++) {
        const child = []
        for (let i = j; i < j + value; i++) {
                child.push(arr[i])
        }
        parent.push(child)
    }
    return parent;
}
cascadingSubsets([1,2,3,4], 2)
cascadingSubsets([1,2,3,4], 3)
