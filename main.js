var checkString = document.querySelector('.show-name-1')
var buttonOne = document.querySelector('.remove-parking-1')
function checkFreePark() {
    if (checkString = "") {
        buttonOne.parentNode.removeChild(buttonOne);
    } else {
        document.body.appendChild(buttonOne);
    }
}