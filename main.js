function createParticle (x, y) {
    var size = Math.random() * 50 + 10;

    x -= (size / 2) + 40;
    y -= (size / 2);

    var particle = document.createElement('div');
    particle.setAttribute('class', 'noodles');
    document.querySelector('.home-page').appendChild(particle);
    //   var noodleImages = new Array('images/noodles-1.png', 
    //                                'images/noodles-2.png', 
    //                                'images/noodles-3.png',
    //                                'images/noodles-4.png', 
    //                                'images/noodles-5.png', 
    //                                'images/noodles-6.png',
    //                                'images/noodles-7.png', 
    //                                'images/noodles-8.png')
    let uselessImages = new Array('images/useless-1.png', 
                                    'images/useless-2.png', 
                                    'images/useless-3.png', 
                                    'images/useless-4.png', 
                                    'images/useless-5.png', 
                                    'images/useless-6.png', 
                                    'images/useless-7.png', 
                                    'images/useless-8.png')
    TweenMax.set(particle, {
        x: x, 
        y: y,
        width: 102,
        height: 50,
        background: `url(${uselessImages[Math.floor(Math.random() * 7)]})`
    });
    // `url(${noodleImages[Math.floor(Math.random() * 7)]})`
    TweenMax.to(particle, Math.random() * 2 + 1, {
        x: x + (Math.random() - 0.5) * 200,
        y: y + (Math.random() - 0.5) * 200,
        opacity: 0,
        scale:0,
        ease: Power2.easeOut,
        onComplete: function () {
        document.querySelector('.home-page').removeChild(particle);
        }
    })
}
window.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    createParticle(x, y)
});


// Eye section
const eye1 = document.querySelector('.eye-left');
const eye2 = document.querySelector('.eye-right')
window.addEventListener('mousemove', (evt) => {
    const x = -(window.innerWidth / 2 - evt.pageX) / 160;
    const y = -(window.innerHeight / 5 - evt.pageY) / 160;
    eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
});  






// Djanog IT
function addRemoveClass(operation, pointer, className){
    switch(operation){
        case "remove":
            document.querySelector(pointer).classList.remove(className)
            break
        case "add":
            document.querySelector(pointer).classList.add(className)
            break
        default:
            console.log("wrong operation name")
    }
}
function DjangoIT(){
    addRemoveClass("add", ".django-it-button-text", "django-it-button-text-animation")
    addRemoveClass("add", ".django-it-button", "django-it-button-animation")
    addRemoveClass("add", ".python-logo-top", "python-logo-top-animation")
    addRemoveClass("add", ".python-logo-bottom", "python-logo-bottom-animtion")
    addRemoveClass("add", ".cookies-box", "show-cookies-box")
    addRemoveClass("add", ".cookies-box-border", "show-cookies-box-border")
}








function hideCookiesBox() {
    addRemoveClass("add", ".pacman", "pacman-animation")
    setTimeout(function(){addRemoveClass("add", ".cookies-img", "cookies-animation")}, 1700)
    setTimeout(function(){addRemoveClass("add", ".cookies-box", "hide-cookies-box")}, 2500)
    setTimeout(function(){addRemoveClass("add", ".cookies-box-border", "hide-cookies-box-border")}, 2500)
    setTimeout(function(){addRemoveClass("add", ".django-it-button", "django-it-button-close-animation")}, 2500)
    setTimeout(function(){addRemoveClass("add", ".cookies-box-container", "block-display")}, 3000)
    
    
}