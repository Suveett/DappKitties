
var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);

  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()


    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)
    mouthColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouth_tail_color').val(dna.mouthColor)
    eyesColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyescolor').val(dna.eyesColor)
    earsColor(colors[dna.earsColor],dna.earsColor)
    $('#earscolor').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyesshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationpattern').val(dna.decorationPattern)
    sidesDecorationColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#decorationsidescolor').val(dna.decorationSidescolor)
    midDecorationColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#decorationmidcolor').val(dna.decorationMidcolor)
    animationStyle(dna.animation)
    $('#animationstyle').val(dna.animation)
}

//LISTENERS

// Changing cat's Body' colors
$('#bodycolor').change(()=>{
    //var bodyColorCode = $('#bodycolor').val();
    //console.log(bodyColorCode);
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

// Changing Cat's Mouth color
$('#mouth_tail_color').change(()=>{
  var colorVal = $('#mouth_tail_color').val()
  mouthColor(colors[colorVal],colorVal)

})

//Changing cat's eyes color
$('#eyescolor').change(()=>{
  var colorVal = $('#eyescolor').val()
  eyesColor(colors[colorVal],colorVal)
})

//Changing cat's ears colors
$('#earscolor').change(()=>{
  var colorVal = $('#earscolor').val()
  earsColor(colors[colorVal],colorVal)
})


//Changing Cat eyes Shape
$('#eyesshape').change(()=>{
  var shape = parseInt($('#eyesshape').val())
  eyeVariation(shape)
})


//Changing Decoration pattern
$('#decorationpattern').change(()=>{
  var pattern = parseInt($('#decorationpattern').val())
  decorationVariation(pattern)
})


//Changing The Side Birthmarks colors

$('#decorationsidescolor').change(()=>{
  var colorVal = $('#decorationsidescolor').val()
  sidesDecorationColor(colors[colorVal],colorVal)
})

$('#decorationmidcolor').change(()=>{
  var colorVal = $('#decorationmidcolor').val()
  midDecorationColor(colors[colorVal],colorVal)
})



$('#animationstyle').change(()=>{
  var animationVal = parseInt($('#animationstyle').val())
  animationStyle(animationVal)
})
