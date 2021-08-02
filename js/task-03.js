const findBestEmployee = function(employees) {
    let values = Object.values(employees);  // [29, 35, 1, 99] [12, 17, 4] [147, 21, 19, 38]
    let max = Math.max(...values);          // 99 17 147
    let keys = Object.keys(employees);      //["ann", "david", "helen", "lorence"]  ["poly", "mango", "ajax"]  ["lux", "david", "kiwi", "chelsy"]
    let index = values.indexOf(max);        // index 3 1 0

    return `${keys[index]}`;                // lorence  mango  lux
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux