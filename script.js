
// when click button.clicked button will get active class

function active(button) {
    var buttons = document.getElementsByClassName("butn");
    console.log(buttons)
    for (let i = 0; i< buttons.length; i++) {
        //remove 'active' class from every "butn" class
        buttons[i].classList.remove('active');       
    }
    // add active class to which button clicked
    button.classList.add('active');
}


// when click  buttons.clicked button's box will appear. another box will disappear
function show(number) {
    //hide all box
    for (let i = 1; i <= 5; i++) {
        let boxes = document.getElementById(`Box${i}`);
        boxes.style.display='none';
    }
    let box = document.getElementById("Box"+number);
    box.style.display="block";
}