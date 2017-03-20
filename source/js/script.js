(function($) {





    
    
(function() {

    
    
    $('#jwrapper a').on('click', function(e) {
        var _this =   $(this).find('.hide_caption_clients').html();	
         $('.apend_caption').html(_this);
    e.preventDefault();
    });
    
    $('.nav-tabs li').on('click', function(e) {
      var _this =   $(this);
       $('.nav-tabs').find('li.active').removeClass('active');
      _this.toggleClass('active');	
    e.preventDefault();
    });
    
})();





    



})(jQuery);


