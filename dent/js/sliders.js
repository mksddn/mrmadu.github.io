
  $(function() {
   $("#slider .slideshow").responsiveSlides({
  auto: true,      
  speed: 3000,   
  timeout: 5000,       
  pager: true,      
  nav: false,       
  random: false,         
  pause: false,       
  pauseControls: true,  
  prevText: "", 
  nextText: "",     
  maxwidth: "",        
  navContainer: "",      
  manualControls: "",   
  namespace: "slideshow", 
  before: function(){},  
  after: function(){}    
});
  });

  $(function() {
   $("#actions .slideshow2").responsiveSlides({
  auto: true,      
  speed: 3000,   
  timeout: 5000,       
  pager: true,      
  nav: true,       
  random: false,         
  pause: false,       
  pauseControls: true,  
  prevText: "&#xf104;",   
  nextText: "&#xf105;",      
  maxwidth: "",        
  navContainer: "",      
  manualControls: "",   
  namespace: "slideshow", 
  before: function(){},  
  after: function(){}    
});
  });

  $(function() {
   $("#testimonials .slideshow3").responsiveSlides({
  auto: true,      
  speed: 2000,   
  timeout: 5000,       
  pager: false,      
  nav: true,       
  random: false,         
  pause: false,       
  pauseControls: true,  
  prevText: "&#xf104;",   
  nextText: "&#xf105;",      
  maxwidth: "",        
  navContainer: "",      
  manualControls: "",   
  namespace: "slideshow", 
  before: function(){},  
  after: function(){}    
});
  });



$(document).ready(function(){
	$('#accordion-js').find('h2').click(function(){
	    $(this).next().stop().slideToggle();
	}).next().stop().hide();
});


$(document).ready(function(){
$('.open_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay').show();
})
$('.popup .fa-close, .overlay').click(function() {
    $('.overlay, .popup').hide();
});
  });