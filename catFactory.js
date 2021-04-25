
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function changes the color of Head and Chest
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

// This function changes the color of Mouth and tail
function mouthColor(color,code){
  $('.cat__mouth-left, .cat__mouth-right, .cat__tail').css('background', '#' + color) //This changes the Cat's Mouth and Tail Colors
  $('#mouthcode').html('code: ' + code) // This updates text of the badge next to the slider
  $('#dnamouth').html(code) // This updates the Mouth and Tail color part of the DNA that is displayed below the cat
}

//This function changes the color of Cat's eyes
function eyesColor(color,code){
  $('.cat__eye span.pupil-left, .cat__eye span.pupil-right').css('background', '#' + color) //This changes the Cat's Mouth and Tail Colors
  $('#eyescode').html('code: ' + code) // This updates text of the badge next to the slider
  $('#dnaeyes').html(code) // This updates the Mouth and Tail color part of the DNA that is displayed below the cat
}

//This function changes the color of Cat's ears and Paws
function earsColor(color,code){
  $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right').css('background', '#' + color) //This changes the Cat's ears Colors
  $('#earscode').html('code: ' + code) // This updates text of the badge next to the slider
  $('#dnaears').html(code) //This updates the Ears color part of the DNA that is displayed below the Cat

}

//###################################################
//USING BELOW FUNCTIONS TO CHANGE CATTRIBUTES
//###################################################

//Changing Eye shapes
function eyeVariation(num) {

    $('#dnashape').html(num)//This updates the Eyes shape part of the DNA that is displayed below the Cat

    switch (num) {
        case 1:
            normalEyes()
            $('#eyename').html('Basic')// Set the badge of the eye to 'Basic'
            break
        case 2:
            normalEyes()//reset
            $('#eyename').html('Chill')//Set the badge to "Chill"
            eyesType1()//Change the eye shape by bringing a Solid border-top 15 px
            break
        case 3:
            normalEyes()//reset
            $('#eyename').html('Smile')//Set the badge to "Smile"
            eyesType2()//Change the eye shape by bringing a Solid border- bottom15 px
            break
        case 4:
            normalEyes()//reset
            $('#eyename').html('Cool')//Set the badge to "Cool"
            eyesType3()//Change the eye shape by bringing a Solid border-right 15 px
            break
        case 5:
            normalEyes()//reset
            $('#eyename').html('Dotted Eyes')//Set the badge to "Dotted Eyes"
            eyesType4()//Change the eye shape by bringing a border-style: dotted
            break
    }
}



async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css('border-right', '15px solid')
}

async function eyesType4() {
    await $('.cat__eye').find('span').css('border-style', 'Dotted')
}

//###################################################################################

//Changing Cat BirthMark Dimensions + Rotation
function decorationVariation(num) {
    $('#dnadecoration').html(num)//This updates the DNA Decoration part of the DNA that is displayed below the Cat
    switch (num) {
        case 1:
            normalDecoration()
            $('#decorationname').html('Basic')// Set the Badge to Decoration pattern Basic
            break
        case 2:
            normalDecoration()
            $('#decorationname').html('Angled Patches')// Set the Badge to Decoration pattern - Angled patches
            normalDecoration1()
            break
        case 3:
            normalDecoration()
            $('#decorationname').html('Smaller Width Patches')// Set the Badge to Decoration pattern - Smaller Patches
            normalDecoration2()
            break
        case 4:
            normalDecoration()
            $('#decorationname').html('Smaller Height Patches')// Set the Badge to Decoration pattern - Smaller Patches
            normalDecoration3()
            break
    }
}



async function normalDecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}


async function normalDecoration1() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(45deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(-45deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normalDecoration2() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "8px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "8px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "8px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function normalDecoration3() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "24px", "width": "8px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "20px", "width": "8px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "20px", "width": "8px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

//########################################################################################################

//This changes the Side BirthMark Colors
function sidesDecorationColor(color,code) {
    $('.cat__head-dots_first , .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat's Side BirthMark
    $('#sidebirthmarkscode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the Side Birthmarks color part of the DNA that is displayed below the cat
}

//This changes the Mid BirthMark colors
function midDecorationColor(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the color of the cat's Mid Birthmark
    $('#midbirthmarkcode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the Mid Birthmark color part of the DNA that is displayed below the cat
}


//#################################################################################################################
//This Function changes the animation style
function animationStyle(num){
  $('#dnaanimation').html(num)//This updates the DNA animation style of the DNA that is displayed below the Cat
  switch (num) {
    case 1 :
    normalAnimation()
    $('#animationcode').html('Moving Head')//It sets the Badge to Moving Head style
    break
    case 2 :
    animationType1()
    $('#animationcode').html('Big Head') // It sets the Badge to Scaled Head style
    break
    case 3 :
    animationType2()
    $('#animationcode').html("Translated Head")//It setsthe  Badge to Transitioned/Transported Head style
    break
    case 4 :
    animationType3()
    $('#animationcode').html('Moving Tail')// It sets the badge to Moving Tail animation style
    break
  }
}



function normalAnimation() {  //Head rotates and moves
  resetAnimation()
  $('#head').addClass('movingHead')
}

function animationType1() {  //Head gets scaled
  resetAnimation()
  $('#head').addClass('scalingHead')

}


function animationType2() { //Head gets translated
  resetAnimation()
  $('#head').addClass('translatingHead')
}


function animationType3() { //Tail starts Moving
  resetAnimation()
  $('#tail').addClass('movingTail')
}

function resetAnimation(){
  $('#head').removeClass('movingHead')
  $('#head').removeClass('scalingHead')
  $('#head').removeClass('translatingHead')
  $('#tail').removeClass('movingTail')


}
