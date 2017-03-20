(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                
               
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 800) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 4;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
    

    
     $(function () {
    
    $('#jcs1 #left_slide, #jcs2 #left_slide, #jcs3 #left_slide').show();
    $('#jcs1 #right_slide, #jcs2 #right_slide, #jcs3 #right_slide').show();
        
    $('.jcarousel a>img').on('click', function (e) {

        var a =  $(this).attr('src');
        $('.is-image').attr('src', a);
        
      var $message =  $('#jcs1 #left_slide, #jcs2 #left_slide, #jcs3 #left_slide');
      var $message2 =  $('#jcs1 #right_slide, #jcs2 #right_slide, #jcs3 #right_slide');
 
      if ($message.css('display') == 'block' || $message2.css('display') == 'block') {
        $message.hide();
        $message2.hide();
 
        var yourClick = true;
        
        $(document).bind('click.myEvent', function (e) {
          if (!yourClick && $(e.target).closest('.popup').length == 0) {
            $message.show();
            $message2.show();
            $(document).unbind('click.myEvent');
          }
          yourClick = false;
          
           
        });
        
        $('a.close').bind('click.myEvent', function () {
                 
            $message.show();
            $message2.show()
              $(document).unbind('click.myEvent');
              yourClick = false;      
              
        });
        
      } 
      
     
    });
    
  }); 
  
  $(function () {
    
     $('#tree_img1').on('mouseover', function() {
        $(this).attr('src', 'img/palec2.png');
     });
    
      $('#tree_img1').on('mouseout', function() {
        $(this).attr('src', 'img/palec.png');
     });  
     
     $('#tree_img2').on('mouseover', function() {
        $(this).attr('src', 'img/proizvodstvo2.png');
     });
    
      $('#tree_img2').on('mouseout', function() {
        $(this).attr('src', 'img/proizvodstvo.png');
     }); 
     
      $('#tree_img3').on('mouseover', function() {
        $(this).attr('src', 'img/shkaf2.png');
     });
    
      $('#tree_img3').on('mouseout', function() {
        $(this).attr('src', 'img/shkaf.png');
     });
     
      $('#tree_img4').on('mouseover', function() {
        $(this).attr('src', 'img/nacenki2.png');
     });
    
      $('#tree_img4').on('mouseout', function() {
        $(this).attr('src', 'img/nacenki.png');
     });
     
      $('#tree_img5').on('mouseover', function() {
        $(this).attr('src', 'img/rassrocka2.png');
     });
    
      $('#tree_img5').on('mouseout', function() {
        $(this).attr('src', 'img/rassrocka.png');
     });
     
     $('#senator').on('mouseover', function() {
        $(this).attr('src', 'img/senator2.png');
     });
    
      $('#senator').on('mouseout', function() {
        $(this).attr('src', 'img/senator.png');
     });
     
     $('#modus').on('mouseover', function() {
        $(this).attr('src', 'img/modus2.png');
     });
    
      $('#modus').on('mouseout', function() {
        $(this).attr('src', 'img/modus.png');
     });
     
     $('#kronopol').on('mouseover', function() {
        $(this).attr('src', 'img/kronopol2.png');
     });
    
      $('#kronopol').on('mouseout', function() {
        $(this).attr('src', 'img/kronopol.png');
     });
     
     $('#egger').on('mouseover', function() {
        $(this).attr('src', 'img/egger2.png');
     });
    
      $('#egger').on('mouseout', function() {
        $(this).attr('src', 'img/egger.png');
     });
     
  });
    
})(jQuery);
