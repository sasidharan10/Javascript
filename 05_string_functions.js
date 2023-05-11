var str = "This is a string";
console.log("Str: " + str);
// First occurence of 's'
var pos = str.indexOf("s");
console.log("First occurence of 's': " + pos);

// Last occurence of 's'
pos = str.lastIndexOf("s");
console.log("Last occurence of 's': " + pos);

// slicing a string
var sub = str.slice(0, 6);  //can take -ve value
console.log("str.slice(0, 6): " + sub);
sub = str.substring(0, 6);// cannot take -ve value
console.log("str.substring(0, 6): " + sub);
sub = str.substr(3, 3);  // (starting index,size)    
console.log("str.substr(3, 3): " + sub);

var rep = str.replace("i", "z");  //replaced but the oc is not affected
// console.log(str);
console.log('str.replace("a", "Newstring"): ' + rep);

// Upper and Lower case

console.log("str.toUpperCase(): " + str.toUpperCase());
console.log("str.toLowerCase(): " + str.toLowerCase());

// console.log(str.concat(" got concated"));  // concatenation

var space = "    space at   front and back      ";
console.log("text: " + space);
console.log("space.trim(): " + space.trim());

// To extract any character

console.log("str.charAt(0): " + str.charAt(0));
console.log("str.charCodeAt(0): " + str.charCodeAt(0));

console.log("str[6]: " + str[6]);  // giving the char at given index