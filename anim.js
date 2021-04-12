let openContainer = document.querySelector('.open-container');
let openBar1 = document.querySelector('.open-bar-1')
let openBar2 = document.querySelector('.open-bar-2')
let openBar3 = document.querySelector('.open-bar-3')

let open = true
let close = false

openContainer.addEventListener('click', () => {
    if(open == true ) {  
      openBar1.style.transition = "top .25s"
      openBar1.style.top = '20px'
      openBar3.style.transition = 'bottom .25s'
      openBar3.style.bottom = '20px'
    setTimeout(() => {
      openBar1.style.transition = "top .1s"
      openBar1.style.top = '15px'
      openBar3.style.transition = 'bottom .1s'
      openBar3.style.bottom = '15px'
    }, 250);
    setTimeout(() => {
      openBar1.style.opacity = '0'
      openBar2.style.transition = 'width .1s'
      openBar2.style.width = '60px'
      openBar3.style.transition = 'width .1s'
      openBar3.style.width = '60px'
    }, 350);
    setTimeout(() => {
      openBar2.style.transition = 'transform .35s'
      openBar3.style.transition = 'transform .35s'
      openBar2.style.transform = 'rotate(45deg)'
      openBar3.style.transform = 'rotate(135deg)'
      open = false
      close = true
    }, 500);
    /* sidebar animation open */
    setTimeout(() => {

      sideBar.style.right = '-100px'
    }, 350);
  }

  if(close == true){
      openBar2.style.transform = 'rotate(200deg)'
      openBar3.style.transform = 'rotate(-20deg)'
    setTimeout(() => {
      openBar2.style.transition = 'transform .1s'
      openBar3.style.transition = 'transform .1s'
      openBar2.style.transform = 'rotate(180deg)'
      openBar3.style.transform = 'rotate(0deg)'
    }, 400);
    setTimeout(() => {
      openBar2.style.transition = 'width .1s'
      openBar3.style.transition = 'width .1s'
      openBar2.style.width = '37.5px'
      openBar3.style.width = '50px'
      openBar1.style.opacity = '1'
    }, 600);
    setTimeout(() => {
      openBar1.style.transition = 'top .1s'
      openBar3.style.transition = 'bottom .1s'
      openBar1.style.top = '0px'
      openBar3.style.bottom = '0px'
      open = true
      close = false
    }, 700);
  }
});
