const accBoxs = document.querySelectorAll('.acc-box');
const boxHeaders = document.querySelectorAll('.box-header');
const boxContents = document.querySelectorAll('.box-content');


// boxHeader.forEach(boxHeader => {
//     boxHeader.addEventListener('.click', e => {
//         console.log(e);
//     })
// })
changeIcons()

boxHeaders.forEach(boxHeader => {
    boxHeader.addEventListener('click', e => {

        // console.log(e.currentTarget);
        
        if(e.currentTarget.className === 'box-header') {
            accBoxs.forEach(accBox => {
                accBox.classList.remove('active');
            })
            e.currentTarget.parentElement.classList.toggle('active');
            changeIcons();
        }
    })
});

function changeIcons() {
    accBoxs.forEach(accBox => {
        if(accBox.classList.contains('active')) {
            accBox.childNodes[1].childNodes[3].className = 'fa-solid fa-angle-up';
        } else {
            accBox.childNodes[1].childNodes[3].className = 'fa-solid fa-angle-down';
        }
    })
}
