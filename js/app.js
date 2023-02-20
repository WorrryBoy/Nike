let previous = document.querySelector('.previous');
let next = document.querySelector('.next');
let calc = 0;
next.addEventListener('click', ()=> {
    calc = calc + 354;
    if (window.screen.width > 1201) {
        if (calc > 1062) {
            calc = 0
            document.querySelector('.box-sneak').style.right = calc + 'px';
        } 
    }
    if (window.screen.width < 1201 && window.screen.width > 745) {
        if (calc > 1416) {
            calc = 0
            document.querySelector('.box-sneak').style.right = calc + 'px';
        }
    }
    if (window.screen.width < 745) {
        if (calc > 1770) {
            calc = 0
            document.querySelector('.box-sneak').style.right = calc + 'px';
        } 
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
    if (scrolldistance > 900 && scrolldistance < 2601) {
        i = Math.floor((scrolldistance - 900) / 13)
        document.querySelector('.adidas').style.transform = `translateY(-${i}%)`
    }
});
function transform(){
    sport_img.classList.add('transform-sport')
}
//let platform = document.querySelectorAll('.sport-platform-1, .sport-platform-2, .sport-platform-3, .sport-platform-4, .sport-platform-5, .sport-platform-6');
let sportimg = document.querySelectorAll('.sport-img-1, .sport-img-2, .sport-img-3, .sport-img-4, .sport-img-5, .sport-img-6');
let platform = document.querySelectorAll('.sport-platform-1, .sport-platform-2, .sport-platform-3, .sport-platform-4, .sport-platform-5, .sport-platform-6')
let box = document.querySelectorAll('.box-platform')
/*sportimg.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        item.classList.add('transform-sport')
    });
    item.addEventListener('mouseout', ()=> {
        item.classList.remove('transform-sport')
        item.classList.add('transform-sport2')
    });
});
platform.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        item.classList.add('change');
        item.classList.remove('transform-sport2')
    });
    item.addEventListener('mouseout', ()=> {
        item.classList.remove('change');
        item.classList.add('transform-sport2')
    });
});
*/
let con = document.querySelectorAll('.box-platform');
con.forEach((el) =>{
    el.addEventListener('mouseover', (e)=> {
        let dataimg = e.currentTarget.getAttribute("data-img");
        document.querySelector(`.sport-img-${dataimg}`).classList.add('transform-sport')
        document.querySelector(`.sport-platform-${dataimg}`).classList.add('change')
        document.querySelector(`.sport-img-${dataimg}`).classList.remove('transform-sport2')
        document.querySelector(`.sport-platform-${dataimg}`).classList.remove('transform-sport2')
    });
    el.addEventListener('mouseout', (e)=> {
        let dataimg = e.currentTarget.getAttribute("data-img");
        document.querySelector(`.sport-img-${dataimg}`).classList.remove('transform-sport')
        document.querySelector(`.sport-img-${dataimg}`).classList.add('transform-sport2')
        document.querySelector(`.sport-platform-${dataimg}`).classList.remove('change')
        document.querySelector(`.sport-platform-${dataimg}`).classList.add('transform-sport2')
    });
});
let shoesSt = document.querySelector('.shoes-img-1')
let shoesNd = document.querySelector('.shoes-img-3')
let shoesRd = document.querySelector('.shoes-img-2')
let modern = document.querySelector('.sneak-modern')
window.addEventListener('scroll', ()=> {
    scrolldistance = window.scrollY
    if (window.screen.width > 501) {
        if (scrolldistance > 3951 && scrolldistance < 4900) {
            o = ((scrolldistance - 4152) / 4)
            if (o < 100.26) {
                modern.style.transform = `translateY(${-o}px)`
            }
        }
    }
    if (window.screen.width > 501) {
        if (scrolldistance > 5587 && scrolldistance < 6390) {
            q = ((scrolldistance - 5587) /2)
            qnd = ((scrolldistance - 5587) /2.7)
            qrd = ((scrolldistance - 5587) /6)
            if (q < 240.6) {
                shoesSt.style.transform = `translateY(${-q}px)`
                shoesNd.style.transform = `translateY(${-qnd}px)`
                shoesRd.style.transform = `translateY(${-qrd}px)`
            }   
        }
    }
    if (window.screen.width < 501) {
        if (scrolldistance > 8314 && scrolldistance < 9300) {
            q = ((scrolldistance - 8314) /2)
            qnd = ((scrolldistance - 8314) /2.7)
            qrd = ((scrolldistance - 8314) /6)
            if (q < 240.6) {
                shoesSt.style.transform = `translateY(${-q}px)`
                shoesNd.style.transform = `translateY(${-qnd}px)`
                shoesRd.style.transform = `translateY(${-qrd}px)`
            }   
        }
    }
    if (window.screen.width < 501) {
        if (scrolldistance > 5009 && scrolldistance < 6200) {
            o = ((scrolldistance - 5009) / 4)
            if (o < 130.26) {
                modern.style.transform = `translateY(${-o}px)`
            }
        }
    }
    console.log(scrolldistance)
});
let mail = document.querySelector('.email')
document.querySelector('.subscribe-btn').addEventListener('mouseover', ()=> {
    mail.classList.add('mail')
    mail.classList.remove('mail-before')
    document.querySelector('.subscribe-btn').classList.add('bg')
    document.querySelector('.subscribe-btn').classList.remove('bg-before')
});
document.querySelector('.subscribe-btn').addEventListener('mouseout', ()=> {
    mail.classList.remove('mail')
    mail.classList.add('mail-before')
    document.querySelector('.subscribe-btn').classList.remove('bg')
    document.querySelector('.subscribe-btn').classList.add('bg-before')
});

//document.querySelector('.subscribe-btn').addEventListener('click', ()=> {
    //mail.value = '';
//});
let burger = document.querySelector('.burger')
burger.addEventListener('click', ()=> {
    document.querySelector('.menu-burger').classList.toggle('initial-burger')
    document.querySelector('body').classList.toggle('body-overflow')
    document.querySelector('.item-animate-1').classList.toggle('menu-item-burger-1')
    document.querySelector('.item-animate-2').classList.toggle('menu-item-burger-2')
    document.querySelector('.item-animate-3').classList.toggle('menu-item-burger-3')
    document.querySelector('.item-animate-4').classList.toggle('menu-item-burger-4')
})
