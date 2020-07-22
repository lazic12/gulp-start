$(function () {
    $('.modal1__description').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    speed: 300
                }
            },
            {
                breakpoint: 640,
                settings: {

                    arrows: false
                }
            }
        ]
    });
});


$(function () {
    $('.credit-about__content').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }

            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }

            },
            {
                breakpoint: 640,
                settings: {

                    arrows: false
                }
            }

        ]
    });
});



var $element = $('input[type="range"]');

$element
    .rangeslider({
        polyfill: false,
        onInit: function () {
            var $handle = $('.rangeslider__handle', this.$range);
            updateHandle($handle[0], this.value);
        }
    })
    .on('input', function (e) {
        var $handle = $('.rangeslider__handle', e.target.nextSibling);
        updateHandle($handle[0], this.value);
    });

function updateHandle(el, val) {
    el.textContent = val;
}

$('.faq__question').on('click', function () {
    $(this).next('.faq__answer').slideToggle(400);
    $(this).parent().toggleClass('is-open');
});




function calculate() {
    let interestRate = document.getElementById("interest-rate").value * 0.01 * document.getElementById("loan-amount").value;
    let loanAmount = document.getElementById("loan-amount").value;
    console.log(parseInt(interestRate) + parseInt(loanAmount));
    document.getElementById("total-payments").value = ((Number.parseInt(interestRate) + Number.parseInt(loanAmount)))
}



// Get the modal
//var modal = document.getElementById("myModal");
let modal1 = document.querySelector(".modal1");
let modal2 = document.querySelector(".modal2");
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
let btn1 = document.getElementById("trigger");
let btn2 = document.querySelectorAll('#trigger2');
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
let span1 = document.querySelector(".close");
let span2 = document.querySelector(".second");

// When the user clicks the button, open the modal 
btn1.addEventListener('click', function (event) {
    event.preventDefault();
    modal1.classList.add("show-modal");
})

// btn2.onclick = function () {
//     modal2.classList.toggle("show-modal");
// };

for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', function (event) {
        event.preventDefault();
        modal2.classList.add("show-modal");
    })
}


// When the user clicks on <span> (x), close the modal

span1.onclick = function () {
    modal1.classList.remove("show-modal");
};

span2.onclick = function () {
    modal2.classList.remove("show-modal");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal1) {
        modal1.classList.remove("show-modal");
    }
    if (event.target === modal2) {
        modal2.classList.remove("show-modal");
    }
}


let cell1 = document.querySelector('.modal2__phone'),
    cell2 = document.querySelector('.modal2__email');

function func() {
    this.value = '';
}

cell1.addEventListener('click', func);
cell2.addEventListener('click', func);