let nav = document.querySelector('nav')

window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
        document.querySelector('.more').style.display = 'flex';
        document.querySelectorAll('.link').forEach((element) => {
            element.style.display = 'none';
        })
    } else {
        document.querySelector('.more').style.display = 'none';
        document.querySelectorAll('.link').forEach((element) => {
            element.style.display = 'flex';
        })
        document.querySelector('.nav2').style.display = 'none'
    }
});

function more() {
    if(document.querySelector('.nav2').style.display != 'block'){
        document.querySelector('.nav2').style.display = 'block'
    } else {
        document.querySelector('.nav2').style.display = 'none'
    }
}

document.addEventListener('scroll', () => {
    const navLinks1 = document.querySelectorAll('nav a');
    const scrollPosition = window.scrollY;

    const homeOffset = document.getElementById('home').offsetTop;
    const section1Offset = document.getElementById('section1').offsetTop;
    const section2Offset = document.getElementById('section2').offsetTop;
    const link3Offset = document.getElementById('link3').offsetTop;
    const link4Offset = document.getElementById('link4').offsetTop;

    navLinks1.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '';
    });

    if (scrollPosition < section1Offset) {
        navLinks1[0].style.backgroundColor = 'white';
        navLinks1[0].style.color = 'black';
    } else if (scrollPosition < section2Offset) {
        navLinks1[1].style.backgroundColor = 'white';
        navLinks1[1].style.color = 'black';
    } else if (scrollPosition < link3Offset) {
        navLinks1[2].style.backgroundColor = 'white';
        navLinks1[2].style.color = 'black';
    } else if (scrollPosition < link4Offset) {
        navLinks1[3].style.backgroundColor = 'white';
        navLinks1[3].style.color = 'black';
    } else {
        navLinks1[4].style.backgroundColor = 'white';
        navLinks1[4].style.color = 'black';
    }
});

