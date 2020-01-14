// Your code goes here

// mouseover
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {        
        link.style.color = 'red';
    });
});

// mouseenter
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('mouseenter', () => {
    event.target.style.color = 'red';
});

// mouseleave
const contentSectionLeave = document.querySelector('.content-section');
contentSectionLeave.addEventListener('mouseleave', () => {
    event.target.style.color = 'blue';
});

// mousemove
document.addEventListener('mousemove', e => {
  console.log('💥 Mouse Moved! 💥', `position: [${event.clientX}, ${event.clientY}]`);
});

// keydown
const body = document.querySelector('body')
body.addEventListener('keydown', e => {
    alert(`You pressed the secret key!`)
});

// wheel
document.addEventListener('wheel', () => {
    alert('Free wheelin!!')
    event.stopPropagation();
});

// load
window.addEventListener('load', () => {
    alert('This alert showed up on loading the window')
});

// resize
window.addEventListener('resize', e => {
    alert(`The window has been resized`)
});

// scroll
window.addEventListener('scroll', () => {
    alert(`This is what happens when you scroll`)
    event.stopPropagation();
});

// dblclick
body.addEventListener('dblclick', () => {
    alert('Secret click!!!')
});

// fullscreenchange


// preventDefault
document.querySelector('a').addEventListener('click', e => {
    alert('Cannot refresh!')
    e.preventDefault()
});





