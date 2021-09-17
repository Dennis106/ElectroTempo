function make_pair(first, last) {
  return first+':'+last;
}

class interval_map {
  constructor(value) {
    this.result = {};
	this.defaultValue = value;
  }
  
  insert(range, value) {
    this.result[range] = value;
  }
  
  at(index) {
    let arr = Object.entries(this.result);
    for(let i = arr.length-1 ; i >= 0 ; i--) {
      let temp = arr[i][0].split(':');
      if(index >= Number(temp[0]) && index < Number(temp[1])) {
        return arr[i][1];
      }
    }
    return this.defaultValue;
  }
}

let myMap = new interval_map(0);

myMap.insert(make_pair(1,5),3);

myMap.insert(make_pair(4,8),9);

myMap.insert(make_pair(2,6),10);


console.log(myMap.at(0)); // default value of 0

console.log(myMap.at(1)); // 3

console.log(myMap.at(3)); // 10

console.log(myMap.at(7)); // 9

console.log(myMap.at(10)); // 0