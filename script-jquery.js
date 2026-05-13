$(document).ready(function() {

    /* 
       1. ANIMATION DES COMPÉTENCES (SCROLL)
       */
    var skillsAnimated = false; // Permet de ne jouer l'animation au scroll qu'une seule fois

    $(window).on('scroll', function() {
        // Sécurité : on vérifie que la section existe
        if ($('#skills').length === 0) return;

        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var skillsTop = $('#skills').offset().top;

        // Si l'utilisateur a scrollé jusqu'à la section des compétences
        if (scrollPos + windowHeight > skillsTop + 100 && !skillsAnimated) {
            $('.progress').each(function() {
                var targetWidth = $(this).attr('data-width');
                
                // Animation purement jQuery
                $(this).animate({
                    width: targetWidth
                }, 1500); // Durée : 1.5 secondes
            });
            skillsAnimated = true; // Empêche de relancer au prochain scroll
        }
    });

    /* 
       2. ANIMATION DES COMPÉTENCES (SURVOL)
        */
    $('.skill-item').on('mouseenter', function() {
        var $progressBar = $(this).find('.progress');
        var targetWidth = $progressBar.attr('data-width');
        
       
        $progressBar.stop().css('width', '0%').animate({
            width: targetWidth
        }, 800); 
    });

    /* 
       3. ACCORDÉON INTERACTIF (FORMATION)
       */
 /* 
       3. TIMELINE / ACCORDÉON INTERACTIF (FORMATION)
        */
       
    
    $('.timeline-item').first().addClass('active');
    $('.timeline-item').first().find('.timeline-details').show();
    $('.timeline-item').first().find('.toggle-icon').removeClass('fa-plus').addClass('fa-minus');

    
    $('.timeline-content').on('click', function() {
        var $item = $(this).parent('.timeline-item');
        var $details = $(this).find('.timeline-details');
        var $icon = $(this).find('.toggle-icon');

        
        if ($item.hasClass('active')) {
            $details.slideUp(300);
            $item.removeClass('active');
            $icon.removeClass('fa-minus').addClass('fa-plus');
        } 
        
        else {
            
            $('.timeline-details').slideUp(300);
            $('.timeline-item').removeClass('active');
            $('.toggle-icon').removeClass('fa-minus').addClass('fa-plus');

            
            $details.slideDown(300);
            $item.addClass('active');
            $icon.removeClass('fa-plus').addClass('fa-minus');
        }
    });
$(document).ready(function() {

    /* 
       VALIDATION DU FORMULAIRE DE CONTACT (JQUERY)
        */
       
    
    $(document).on('submit', '#contact-form', function(e) {
        
        let isValid = true;
        
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

      
        const $name = $('#name');
        const $email = $('#email');
        const $message = $('#message');

        
        $('#name, #email, #message').css('border', '1px solid #cbd5e1');

        
        if ($name.val().trim() === "") {
            $name.css('border', '2px solid red');
            isValid = false;
        }

       
        if ($email.val().trim() === "" || !emailPattern.test($email.val().trim())) {
            $email.css('border', '2px solid red');
            isValid = false;
        }

        
        if ($message.val().trim() === "") {
            $message.css('border', '2px solid red');
            isValid = false;
        }

        
        if (!isValid) {
            e.preventDefault(); 
            
            
            $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            
            alert("Erreur : Veuillez remplir tous les champs et vérifier le format de votre email.");
        } else {
            e.preventDefault(); 
            
            alert("Super ! Votre message a été envoyé avec succès.");
            $(this)[0].reset(); 
        }
    });

});
    
});