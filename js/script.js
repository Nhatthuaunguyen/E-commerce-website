$('#btn-search').click(function () {
    $('.search').toggle('fade')
})
$('#btn-search-close').click(function () {
    $('.search').toggle('fade')
})
$('#btn-cat').click(function () {
    $('#category').toggle('fade');
});
$('#btn-popup-close').click(function () {
    $('#category').toggle('fade');
});
$('#btn-sidebar').click(function() {
    $('.sidebar').toggle('slide');
  })
$('#sidebar-close').click(function() {
    $('.sidebar').toggle('slide');
})
var cmsh = $('.cms-img').height();
$('.cms-1').height(cmsh);
$(window).resize(function() {
    var cmsh = $('.cms-img').height();
    $('.cms-1').height(cmsh);
})


$(document).ready(function() {
    $('.trending-list').owlCarousel({
        loop: true,
        margin:10,
        nav:true,
        responsiveClass: true,
        responsive: {
            0: {
                items:1,
            },
            600: {
                items:3,
            },
            1000: {
                items:5,
                margin:20,
                nav:true
            }
        }
    })
}) 
var prh = $('.pr-item').width();
$('.pr-img').height(prh);

$('#btn-plus').click(function() {
    var qty=$('#qty').val();
    qty=parseInt(qty,10);
    qty = qty + 1;
    $('#qty').val(qty);
})
$('#btn-minus').click(function(){
    var qty=$('#qty').val();
    qty=parseInt(qty,10);
    if(qty > 1) {
        qty = qty - 1;
    } else {
        qty = 1;
    }
    $('#qty').val(qty);
})

// Instantiate EasyZoom instances
var $easyzoom = $('.easyzoom').easyZoom();

// Setup thumbnails example
var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

$('.thumbnails').on('click', 'a', function(e) {
    var $this = $(this);

    e.preventDefault();

    // Use EasyZoom's `swap` method
    api1.swap($this.data('standard'), $this.attr('href'));
});

// Setup toggles example
var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');

$('.toggle').on('click', function() {
    var $this = $(this);

    if ($this.data("active") === true) {
        $this.text("Switch on").data("active", false);
        api2.teardown();
    } else {
        $this.text("Switch off").data("active", true);
        api2._init();
    }
});
