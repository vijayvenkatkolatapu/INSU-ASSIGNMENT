  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      // console.log((elemBottom <= docViewBottom));
      // console.log((elemTop >= docViewTop));

      return ((elemTop <= docViewBottom));
  }
  $(document).ready(function() {
      var elem = $('img.spinnnerImg');
      $(window).scroll(function() {
          $.each(elem, function(index, item) {
              var check = isScrolledIntoView(item);
              if (check && $(item).attr('src') == 'images/spinner.gif') {
                  setTimeout(function() {
                      $(item).attr('src', $(item).data('src'));
                  }, 500);
              }
          })

      })
  })