const countTotalSalary = function(employees) {
    let values = Object.values(employees);          //[]  [100, 150, 80]  [200, 50, 150]
    let total = 0;
    for(let value of values) {
        total += value;
    }
    return total;
    
  };
 
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400