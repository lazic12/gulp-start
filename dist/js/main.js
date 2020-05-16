$(function () {




})

// Initialize a new plugin instance for one element or NodeList of elements.
// const slider = document.querySelectorAll('input[type="range"]');
// rangeSlider.create(slider, {
//     polyfill: true, // Boolean, if true, custom markup will be created
//     root: document,
//     rangeClass: 'rangeSlider',
//     disabledClass: 'rangeSlider--disabled',
//     fillClass: 'rangeSlider__fill',
//     bufferClass: 'rangeSlider__buffer',
//     handleClass: 'rangeSlider__handle',
//     startEvent: ['mousedown', 'touchstart', 'pointerdown'],
//     moveEvent: ['mousemove', 'touchmove', 'pointermove'],
//     endEvent: ['mouseup', 'touchend', 'pointerup'],
//     vertical: false, // Boolean, if true slider will be displayed in vertical orientation
//     min: null, // Number, 0
//     max: null, // Number, 100
//     step: null, // Number, 1
//     value: null, // Number, center of slider
//     buffer: null, // Number, in percent, 0 by default
//     stick: null, // [Number stickTo, Number stickRadius] : use it if handle should stick to ${stickTo}-th value in ${stickRadius}
//     borderRadius: 10, // Number, if you're using buffer + border-radius in css
//     onInit: function () {
//         console.info('onInit')
//     },
//     onSlideStart: function (position, value) {
//         console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
//     },
//     onSlide: function (position, value) {
//         console.log('onSlide', 'position: ' + position, 'value: ' + value);
//     },
//     onSlideEnd: function (position, value) {
//         console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
//     }
// });

// update position
// const triggerEvents = true; // or false
// slider.rangeSlider.update({
//     min: 0,
//     max: 20,
//     step: 0.5,
//     value: 1.5,
//     buffer: 70
// }, triggerEvents);

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

// function clear() {
//   console.log('clear');
//   document.getElementById("loanform").reset();
// }