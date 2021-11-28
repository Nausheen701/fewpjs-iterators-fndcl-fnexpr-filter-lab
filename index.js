// Code your solution here


function findMatching(s, sought) {
    return s.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }
  
  function fuzzyMatch(s, testString) {
    return s.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
  function matchName(s, soughtName) {
    return s.filter( record => record.name === soughtName)
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