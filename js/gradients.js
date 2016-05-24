var i;
var newDiv;
var currentDiv;

function makeDiv(color, colors) {
  newDiv = document.createElement('div');
  newDiv.classList.add('divPicker' + color + i);
  newDiv.classList.add('colordiv');
  currentDiv = document.getElementById(colors);
  currentDiv.appendChild(newDiv);
}

function addDivs(i, color, colors1, colors2, colors3) {
  makeDiv(color, colors1);
  makeDiv(color, colors2);
  makeDiv(color, colors3);
}

for (i = 0; i < 256; i++) {
  addDivs(i, 'White', 'reds', 'greens', 'blues');
}

for (i = 255; i > 1; i--) {
  addDivs(i, 'Black', 'reds', 'greens', 'blues');
}

 $('.colordiv').on('click', function(){
  var nums = /\d+/g;
  var bgc = $(this).css('background-color');
  var bgcMix = $('#mixed').css('background-color');
  var colors = bgc.match(nums);
  var oldColors = bgcMix.match(nums);
  var oldR = oldColors[0];
  var oldG = oldColors[1];
  var oldB = oldColors[2];
  var bgcMix = $('#mixed').css('background-color');

  colors[0] = Number(colors[0]);
  colors[1] = Number(colors[1]);
  colors[2] = Number(colors[2]);

  // indices for R, G, B
  colors[0] += Number(oldColors[0]);
  if (colors[0] > 255) colors[0] = 255;
  colors[1] += Number(oldColors[1]);
  if (colors[1] > 255) colors[1] = 255;
  colors[2] += Number(oldColors[2]);
  if (colors[2] > 255) colors[2] = 255;

  var r = Number(colors[0]).toString(16);
  var g = Number(colors[1]).toString(16);
  var b = Number(colors[2]).toString(16);

  if (Number(parseInt(r, 16) < 16)) r = '0' + r;
  if (Number(parseInt(g, 16) < 16)) g = '0' + g;
  if (Number(parseInt(b, 16) < 16)) b = '0' + b;

  var hexStr =  '#' + r + g + b;
  $('#mixed').css('background-color', hexStr);
  $('.addedP').remove();
  $('#mixed').append('<p class="addedP">' + hexStr + '</p>');
  // if (parseInt(r, 16) > parseInt(dd, 16) || g > dd || b > dd ) $('.addedP').css('color', 'black');
});

$('#reset').on('click', function(){
    $('#mixed').css('background-color', 'black');
    $('.addedP').remove();
});
