$(document).ready(function(){

// image slider
  $(function() {

    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');

    var interval;

    function startSlider(){
      interval = setInterval(function() {
        $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
          currentSlide++;
          if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left', 0);
          }
        });
      }, pause);
    }

    function stopSlider(){
      clearInterval(interval);
    }

    $slides.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();
  });

// accordion
  function closeAccordion() {
    console.log('close dat');
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  function openAccordionSection(sectionTitle){
    console.log('open dat');
    $(sectionTitle).addClass('active');
    $(sectionTitle).next().slideDown(300).addClass('open');
  }

  $('.accordion-section-title').click(function(e) {
    e.preventDefault();
    console.log('clicked it');
    var currentAttrValue = $(this).attr('href');

    //conditional
    closeAccordion();
    openAccordionSection(this);

  });

});