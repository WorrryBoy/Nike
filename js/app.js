let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let calc = 0;
next.addEventListener('click', ()=> {
    calc = calc + 354;
    if (calc > 1062) {
        calc = 0
        document.querySelector('.box-sneak').style.right = calc + 'px';
    } 
    document.querySelector('.box-sneak').style.right = calc + 'px';
});
previous.addEventListener('click', ()=> {
    calc = calc - 354
    if (calc < 0) {
        calc = 1062;
    };
    document.querySelector('.box-sneak').style.right= calc + 'px'
});
//* mouseover *//
document.querySelector('.intro-box-1').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img1').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name1').classList.add('color-sneak-name')
});
document.querySelector('.intro-box-2').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img2').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name2').classList.add('color-sneak-name')
});
document.querySelector('.intro-box-3').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img3').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name3').classList.add('color-sneak-name')
});
document.querySelector('.intro-box-4').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img4').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name4').classList.add('color-sneak-name')
});
document.querySelector('.intro-box-5').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img5').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name5').classList.add('color-sneak-name')
});
document.querySelector('.intro-box-6').addEventListener('mouseover', ()=> {
    document.querySelector('.sneak-img6').style.transform = 'scale(1.1)';
    document.querySelector('.sneak-name6').classList.add('color-sneak-name')
});
    


//* mouseout *//
document.querySelector('.intro-box-1').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img1').style.transform = 'scale(1)';
});
document.querySelector('.intro-box-2').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img2').style.transform = 'scale(1)';
});
document.querySelector('.intro-box-3').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img3').style.transform = 'scale(1)';
});
document.querySelector('.intro-box-4').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img4').style.transform = 'scale(1)';
});
document.querySelector('.intro-box-5').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img5').style.transform = 'scale(1)';
});
document.querySelector('.intro-box-6').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-img6').style.transform = 'scale(1)';
});
//* color sneak name *//
document.querySelector('.intro-box-1').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name1').classList.remove('color-sneak-name')
});
document.querySelector('.intro-box-2').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name2').classList.remove('color-sneak-name')
});
document.querySelector('.intro-box-3').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name3').classList.remove('color-sneak-name')
});
document.querySelector('.intro-box-4').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name4').classList.remove('color-sneak-name')
});
document.querySelector('.intro-box-5').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name5').classList.remove('color-sneak-name')
});
document.querySelector('.intro-box-6').addEventListener('mouseout', ()=> {
    document.querySelector('.sneak-name6').classList.remove('color-sneak-name')
});
//* change text *//
document.querySelector('.button-intro').addEventListener("animationend", Animatend);

function Animatend() {
  document.querySelector('.intro-text').classList.remove('slow-anim');
  document.querySelector('.intro-desc-text').classList.remove('slowdesc');
  document.querySelector('.button-intro').classList.remove('buttonslow');
  document.querySelector('.intro-img').classList.remove('slow')
};
function fun1() {
    document.querySelector('.intro-title').innerHTML = 'Nike Cosmic<br> Unity 2'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak-2.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'Nike Cosmic<br> Unity 2'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')
}
function fun2() {
    document.querySelector('.intro-title').innerHTML = 'NIKE SB Dunk<br> High'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak-3.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'NIKE SB Dunk<br> High'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')
}
function fun3() {
    document.querySelector('.intro-title').innerHTML = 'Nike Dynamo<br> GO SE'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak-4.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'Nike Dynamo<br> GO SE'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')
}
function fun4() {
    document.querySelector('.intro-title').innerHTML = 'NIKE x travis<br> scott'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak-6.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'NIKE x travis<br> scott'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')
}
function fun5() {
    document.querySelector('.intro-title').innerHTML = 'Nike<br> Air Trainer'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak-5.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'Nike<br> Air Trainer'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')
}
function fun6() {
    document.querySelector('.intro-title').innerHTML = 'AIR JORDAN 1<br> retro'
    document.querySelector('.intro-img').innerHTML = '<img src="./img/sneak.png" alt="">'
    document.querySelector('#changetext').innerHTML = 'AIR JORDAN 1<br> retro'
    document.querySelector('.intro-text').classList.add('slow-anim')
    document.querySelector('.intro-desc-text').classList.add('slowdesc')
    document.querySelector('.button-intro').classList.add('buttonslow')
    document.querySelector('.intro-img').classList.add('slow')

}
document.querySelector('.best-img-1').addEventListener('mouseover', ()=> {
    document.querySelector('.women').classList.add('left')
});
document.querySelector('.best-img-1').addEventListener('mouseout', ()=> {
    document.querySelector('.women').classList.remove('left')
});
document.querySelector('.best-img-2').addEventListener('mouseover', ()=> {
    document.querySelector('.kids').classList.add('left')
});
document.querySelector('.best-img-2').addEventListener('mouseout', ()=> {
    document.querySelector('.kids').classList.remove('left')
});
document.querySelector('.best-img-3').addEventListener('mouseover', ()=> {
    document.querySelector('.men').classList.add('left')
});
document.querySelector('.best-img-3').addEventListener('mouseout', ()=> {
    document.querySelector('.men').classList.remove('left')
});
let i = 10;
// window.addEventListener('scroll', ()=> {
//     let scrolldistance = window.scrollY;
//     if (scrolldistance > 933 || scrolldistance < 1611) {
//         i = i - 5
//         document.querySelector('.adidas').style.transform = `translateY(${i}%)`
//     }
//      if (i < -80) {  
//         i = i + 10  
//     }
//     if (scrolldistance < 100) {
//         i = 10
//     }
// });
a = 20
window.addEventListener('scroll', ()=> {
    let scrolldistance = window.scrollY;
    if (scrolldistance > 400 && scrolldistance < 2601) {
        a++
        i = Math.floor(scrolldistance / 27)
        document.querySelector('.adidas').style.transform = `translateY(-${i}%)`
        console.log(scrolldistance)
        console.log(i)
    }
});
window.scrollY({behavior:'smooth'})
