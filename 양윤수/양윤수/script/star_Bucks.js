(function($, window){

  var starBucks = {
        init: function(){
          this.header();
          this.section1();
          this.section2Notice();
          this.section2Slide();
          this.section3();
          this.section4();
          this.section5();
          this.section6();
          this.section7();
          this.section8();
          this.section9();
          this.goTop();
          this.quickMenu();
        },
        header: function(){

          $('.burger-btn').on({
            click: function(){
              $('#mobileNav').addClass('addMobile');
            }
          });

          $('.find-btn').on({
            click: function(){
              $('.find-box').toggleClass('addInput'); 
            }
          });
          $('.main-btn').on({
            mouseenter: function(){
              $('.main-btn').removeClass('addCurrent');
              $(this).addClass('addCurrent');
              $('.sub').stop().slideUp(0);
              $(this).next().stop().slideDown(600, 'easeOutExpo');
            }
          });

          $('#nav').on({
            mouseleave: function(){
              $('.main-btn').removeClass('addCurrent')
              $('.sub').stop().slideUp(600, 'easeOutExpo');
            }
          });

        },
        section1: function(){
          function ani (){
            $('.img').eq(0).stop().animate({opacity:1},600, function(){
              $('.img').eq(1).stop().animate({opacity:1},600, function(){
                $('.img').eq(2).stop().animate({opacity:1},600, function(){
                  $('.img').eq(3).stop().animate({opacity:1},600, function(){
                    $('.img').eq(4).stop().animate({opacity:1},600);
                  });
                });
              });
            });
          }
          setTimeout(ani, 1000);
        },
        section2Notice: function(){

          var cnt = 0;

          function mainSlide(){
            $('.notice')                   .css({zIndex:1}).stop().animate({top:24},0); 
            $('.notice').eq(cnt==0?4:cnt-1).css({zIndex:2}).stop().animate({top: 0},0); 
            $('.notice').eq(cnt)           .css({zIndex:3}).stop().animate({top:24},0).animate({top:0},1000);
          }

          function nextCount(){
            cnt++;
            if(cnt>4){cnt=0}
            mainSlide();
          }
          function autoTimer(){
            setInterval(nextCount, 3000);
          }
          setTimeout(autoTimer, 100);
          
        },

        section2Slide: function(){

          var cnt = 0;
          var setId = null;
          var winW = $(window).innerWidth()*.9;

            function resizeFn(){
              if( $(window).innerWidth()<=819 ){
                winW = $(window).innerWidth()*.9;
              }
              else{
                winW = 819;
              }
                $('.slide').css({ width:winW });
                mainSlide();
            }   
            resizeFn();    

            $(window).resize(function(){
              resizeFn();
            });

          function mainSlide(){
            $('.slide-wrap').stop().animate({left:-winW*cnt},1000, function(){
              if(cnt>2){cnt=0}
              if(cnt<0){cnt=2}
              $('.slide-wrap').stop().animate({left:-winW*cnt},0);
              $('.slide').removeClass('addCurrent'); 
              $('.slide').eq(cnt+1).addClass('addCurrent');
            });
            pageEvent();
          }

          function nextCount(){
            cnt++;
            mainSlide();
          }
          function prevCount(){
            cnt--;
            mainSlide();
          }
          function autoTimer(){
            setId = setInterval(nextCount, 3000);
          }
          //setTimeout(autoTimer,10);

          function pageEvent(){
            $('.page-btn')                 .children().attr('src','./images/main_prom_off.png')
            $('.page-btn').eq(cnt==3?0:cnt).children().attr('src','./images/main_prom_on.png') 
          }

          $('.page-btn').each(function(index){
            $(this).on({
              click: function(e){
                e.preventDefault();
                cnt = index;
                mainSlide();
                stopFn();
              }
            });
          });

          function stopFn(){
            $('.play-btn').children().attr('src','./images/main_prom_play.png');
            $('.play-btn').removeClass('on');
            $('.play-btn').addClass('off'); 

            clearInterval(setId);
          }

          function playFn(){
            $('.play-btn').children().attr('src','./images/main_prom_stop.png');
            $('.play-btn').removeClass('off');
            $('.play-btn').addClass('on');
          
            autoTimer();
          }

          $('.play-btn').on({
            click: function (e){
              e.preventDefault();
              if($(this).hasClass('on') === true){
                stopFn();
              }
              else{
                playFn();
              }
            }
          });

          $('.next-btn').on({
            click: function(e){
              e.preventDefault();
              stopFn();
              nextCount();
            }
          });
          $('.prev-btn').on({
            click: function(e){
              e.preventDefault();
              stopFn();
              prevCount();
            }
          });

          $('.promotion-btn').on({
            click: function(e){
              e.preventDefault();
              if( $(this).hasClass('close')){  
                $('#slide').slideDown(600);
                $(this).removeClass('close');
                playFn();
              }
              else{
                $('#slide').slideUp(600); 
                $(this).addClass('close');
                stopFn();  
                cnt=0;   
                mainSlide();
              }
            }
          });
        },

        section3: function(){

        },
        section4: function(){
          $(window).scroll(function(){
            if( $(window).scrollTop() == 0 ){
              $('#section4').removeClass('addAni');
          }
            if( $(window).scrollTop() > 400 ){
                $('#section4').addClass('addAni');
            }
          });
        },
        section5: function(){
          var sec3Top = $('#section3').offset().top-300;

          $(window).scroll(function(){
            if($(window).scrollTop() == 0 ){
              $('#section5').removeClass('addFadein');
            }
            if($(window).scrollTop() >= sec3Top ){
              $('#section5').addClass('addFadein');
            }
          });
        },
        section6: function(){
          var sec4Top = $('#section4').offset().top;
          
              $(window).scroll(function(){
                if( $(window).scrollTop() == 0 ){
                  $('#section6').removeClass('addAni');
                }
                if( $(window).scrollTop() >= sec4Top ){
                  $('#section6').addClass('addAni');
                }
              });
        },
        section7: function(){
          var sec6Top = $('#section6').offset().top-200;
              $(window).scroll(function(){
                if( $(window).scrollTop() == 0 ){
                  $('#section7').removeClass('addAni');
              }
                if( $(window).scrollTop() >= sec6Top ){
                    $('#section7').addClass('addAni');
                }
              });
        },
        section8: function(){
          var sec6Top = $('#section6').offset().top+200;

              $(window).scroll(function(){
                  if( $(window).scrollTop() == 0 ){
                      $('#section8').removeClass('addAni')
                  }
                  if( $(window).scrollTop() >= sec6Top ){
                      $('#section8').addClass('addAni')
                  }
              });

              var leftW = null;
              var leftH = null;

              function leftResize(){

                winW = $(window).innerWidth();          
                if( winW <= 960 ){
                  leftW = winW * 0.38125;                 
                  leftH = leftW * 0.85246;
                }
                else{
                  leftW = 366;
                  leftH = 312;
                }
                $('#section8 .left').css({ width:leftW, height:leftH });

              }
              leftResize();

              $(window).resize(function(){
                leftResize();
              });
        },
        section9: function(){
          var winH = 0;
          var bottomTop = 0;

          function resizeFn(){
            $(window).height()-95;
            bottomTop = $('#footer').offset().top-winH;
          }
          resizeFn();
          $(window).resize(function(){
            resizeFn();
            sec9();
          });

            function sec9(){
              if( $(window).scrollTop() > bottomTop ){
                $('#section9').addClass('addSec9');
              }
              else{
                $('#section9').removeClass('addSec9');
              }
            }
            sec9();
            $(window).scroll(function(){
              sec9();
            });
        },
        goTop: function(){

          $('.go-top').stop().fadeOut(1000);

          $(window).scroll(function(){
            if($(window).scrollTop() >= 100){
              $('.go-top').stop().fadeIn(1000);
            }
            else{
              $('.go-top').stop().fadeOut(1000);
            }
          });
        },
        quickMenu: function(){
          var quickTop1 = ($(window).height() - 96)/2;
          var quickTop2 = 150;

          function quickMenuFn (){
            $('.quick-menu').stop().animate({ top: $(window).scrollTop()+ quickTop2 }, 600, "easeOutExpo");
          }
            quickMenuFn();

          $(window).scroll(function(){
            quickMenuFn();

          });
        }
  }

  starBucks.init(); 
  
})(jQuery, window);