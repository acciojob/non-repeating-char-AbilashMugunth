let checked = new Set([]);

const firstNonRepeatedChar = function (str) {
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (checked.has(curr)) {
      continue;
    }
    for (let j = i + 1; j < str.length; j++) {
      if (curr == str[j]) {
        checked.add(curr);
        break;
      } else if (curr !== str[j] && j == str.length - 1) {
        // console.log(curr);
        return curr;
      }
    }
    if (i == str.length - 1) {
      return null;
    }
  }
};


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 