var textInput = prompt('Enter a letter:');
var triangle = "";
var i = 0;

for (i = 0; i < 10; i++) {
  triangle = triangle + textInput;
  document.write(triangle + '<br>');
}
