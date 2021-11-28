// Code your solution here


function findMatching(s, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }
  

// let drivers = [
//     {name: }
// ]
// let fuzzyMatch = (string) 

// drivers.filter(d )



// let arr = [1, 2, 3, 4, 5, 6];
// let even = arr.filter(n => {
//     return n % 2 === 0;
//   });
//   // even = [2,4,6]
  
// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];