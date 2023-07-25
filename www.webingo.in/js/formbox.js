  var offset = $('.form_box').offset(),

      setps = $('.steps'),

      new_steps = $('.new_steps'),

      form_wrapper = $('.form_wrapper'),

      form_box_width = $('.form_box').width(),

      // container width

      container = $('.form_wrapper').width(),

      // slide parent

      slideWrapper = $('.sliders'),

      // slides

      slide = $('.slide'),

      //thumbnail lists

      thumbnailList = $('.thumbnail'),

      count = 0;

  //end of variables    

  slideWrapper.width(container * slide.length);

  slide.width(container);

  setoffset = () => {

      $('.steps, .new_steps').width(slide.height());

      $('.steps').offset({
          left: (offset.left + form_box_width),
          top: offset.top
      });

      $('.new_steps').offset({
          left: offset.left - (thumbnailList.outerHeight() * $('.new_steps li').length),
          top: offset.top
      });

  };

  setoffset();

  // thumbnailList click

  thumbnailList.click(function(e) {

      count++;

      currentTarget = $(e.target);

      currentIndex = currentTarget.attr('data-index');

      currentTarget.toggleClass('move');

      if (currentTarget.hasClass('move')) {

          if (count != slide.length + 1)

              currentTarget.animate({
                  top: -form_wrapper.width() - currentTarget.outerHeight() * count
              }, 1000).addClass('disabled');

          slideWrapper.animate({
              left: '-=' + container + 'px'
          }, 1000).find('.slide.active').removeClass('active').next().addClass('active');

          setTimeout(() => {

              currentTarget.animate({
                  top: 0
              }, 0).prependTo('.get_thumbnail .new_steps');

              currentTarget.next().removeClass('disabled');

              setoffset();

          }, 1000);

      } else {

          // console.log(currentIndex * container);

          slideWrapper.animate({
              left: -currentIndex * container
          }, 1000);

          $('.steps').stop().css('margin-left', '0');

          // currentTarget.animate({ top: form_wrapper.width() + (currentTarget.outerHeight() * count) }, 1000);

          currentTarget.prevAll().animate({
              top: form_wrapper.width() + (currentTarget.outerHeight() * count)
          }, 1000);

          setTimeout(() => {

              currentTarget.prevAll().not('personalInfo').animate({
                  top: 0
              }, 0).prependTo('.steps').removeClass('disabled move');

              // currentTarget.animate({ top: 0 }, 0).prependTo('.steps').removeClass('disabled move');

              currentTarget.addClass('disabled move');

              setoffset();

              count = currentIndex;

          }, 1000);

      }

  });