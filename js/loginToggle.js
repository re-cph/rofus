jQuery(function($) {
    document.addEventListener('scroll', function(e) {
      // if ($('.login-container--mobile .login-wrapper').first() === undefined) {
      //       return
      //   }

      var elm = $('.login-container').first()
        var top = elm.offset().top;
        var height = elm.outerHeight();

        if (window.scrollY > (top + height)) {
            $('.bottomDrawer').addClass('bottomDrawer__visible')
        } else {
            $('.bottomDrawer').removeClass('bottomDrawer__visible')
        }
    })
});