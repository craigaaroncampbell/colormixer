var i,
    newDiv,
    currentDiv;

for (i = 0; i < 256; i++) {
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerWhite" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("reds");
  currentDiv.appendChild(newDiv);
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerWhite" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("greens");
  currentDiv.appendChild(newDiv);
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerWhite" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("blues");
  currentDiv.appendChild(newDiv);
}

for (var i = 255; i > 1; i--) {
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerBlack" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("reds");
  currentDiv.appendChild(newDiv);
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerBlack" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("greens");
  currentDiv.appendChild(newDiv);
  newDiv = document.createElement("div");
  newDiv.classList.add("divPickerBlack" + i);
  newDiv.classList.add("colordiv");
  currentDiv = document.getElementById("blues");
  currentDiv.appendChild(newDiv);
}

 $('.colordiv').on('click', function(){
  var nums = /\d+/g;

  var bgc = $(this).css('background-color');

  var bgcMix = $('#mixed').css('background-color');
  console.log("before: ", bgcMix);

  var colors = bgc.match(nums);
  console.log("colors to add ", colors);

  var oldColors = bgcMix.match(nums);
  var oldR = oldColors[0];
  var oldG = oldColors[1];
  var oldB = oldColors[2];

  console.log("old colors", oldColors);
  // $('#mixed').css('background-color', bgc);

  var bgcMix = $('#mixed').css('background-color');
  console.log("after: " , bgcMix);

  colors[0] = Number(colors[0]);
  colors[1] = Number(colors[1]);
  colors[2] = Number(colors[2]);

  colors[0] += Number(oldColors[0]);
  if (colors[0] > 255) colors[0] = 255;
  colors[1] += Number(oldColors[1]);
  if (colors[1] > 255) colors[1] = 255;
  colors[2] += Number(oldColors[2]);
  if (colors[2] > 255) colors[2] = 255;

  console.log("NOW colors to add: ", colors);

  var r = Number(colors[0]).toString(16);
  var g = Number(colors[1]).toString(16);
  var b = Number(colors[2]).toString(16);
  if (Number(r < 10)) r = '0' + r;
  if (r == "a") r = "0a";
  if (r == "b") r = "0b";
  if (r == "c") r = "0c";
  if (r == "d") r = "0d";
  if (r == "e") r = "0e";
  if (r == "f") r = "0f";
  if (Number(g < 10)) g = '0' + g;
  if (g == "a") g = "0a";
  if (g == "b") g = "0b";
  if (g == "c") g = "0c";
  if (g == "d") g = "0d";
  if (g == "e") g = "0e";
  if (g == "f") g = "0f";
  if (Number(b < 10)) b = '0' + b;
  if (b == "a") b = "0a";
  if (b == "b") b = "0b";
  if (b == "c") b = "0c";
  if (b == "d") b = "0d";
  if (b == "e") b = "0e";
  if (b == "f") b = "0f";

  var hexStr =  '#' + r + g + b;
  console.log(hexStr);
  $('#mixed').css('background-color', hexStr);
  $('.addedP').remove();
  $('#mixed').append('<p class="addedP">' + hexStr + '</p>');
});

$('#reset').on('click', function(){
    $('#mixed').css('background-color', 'black');
});
