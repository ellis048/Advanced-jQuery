//animation for filter change
$(document).ready(function() {
    $('.filter-buttons button').on('click', function() {
        let filter = $(this).data('filter');
        $('.portfolio-item').fadeOut();
        if (filter === 'all') {
            $('.portfolio-item').fadeIn();
        } else {
            $('.portfolio-item').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn();
                }
            });
        }
    });
    

    //on click function for images 
    $('.portfolio').on('click', '.portfolio-item', function() {
        let imgSrc = $(this).data('image');
        let desc = $(this).data('description');
        
        let deferred = $.Deferred();
        $('#lightbox-img').attr('src', imgSrc).on('load', function() {
            deferred.resolve();
        });
        
        deferred.done(function() {
            $('#lightbox-desc').text(desc);
            $('.lightbox').fadeIn();
        });
    });
    
    $('.close').on('click', function() {
        $('.lightbox').fadeOut();
    });
});