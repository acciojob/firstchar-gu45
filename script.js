function firstChar(text) {
  // your code here
  if(! text.includes(" ")){
  let str = text.trim();
  return (str[0])
  }
  return ""
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
