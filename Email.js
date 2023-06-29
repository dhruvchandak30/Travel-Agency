function sendEmail(){
    var data = {
        service_id: 'dhruvdeveloper2003@gmail',
        template_id: 'template_s5ieunn',
        user_id: '-uNFhGAjNAC5cqVgP',
        template_params: {
            'username': ',',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}