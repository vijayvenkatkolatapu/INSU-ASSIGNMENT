$(document).foundation();

// declare variables.
var $top_bar = $('.top-bar'),
    $menu_btn = $('#responsive-menu-btn');

// top bar sticky shrink class toggle.
$top_bar.on('sticky.zf.stuckto:top', function() {
    var $this = $(this);

    $this.addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function() {
    var $this = $(this);

    $this.removeClass('shrink');
})

// top bar responsive menu button context toggle.
$menu_btn.on('click', function() {
    $this = $(this);

    $this.toggleClass('alert').promise().done(function() {
        if ($this.hasClass('alert')) {
            $this.html('<i class="fa fa-md fa-times"></i> Close');
        } else {
            $this.html('<i class="fa fa-md fa-bars"></i> Menu');
        }
    });
});