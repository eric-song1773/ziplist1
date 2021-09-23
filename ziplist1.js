const testnum = [1, 2, 3];
const testabc = ['a', 'b', 'c'];

function zipList(arr1, arr2) {
  const retList = [];
  for (let i = 0; i < arr1.length; i++) {
    retList.push(arr1[i]);
    retList.push(arr2[i]);
  }
  return retList;
}

function zipListSimple(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(zipList(testnum, testabc));
console.log(zipListSimple(testnum, testabc));
