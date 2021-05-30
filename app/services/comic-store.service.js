class ComicService{
      
    constructor(){
    }
    
    sendEmail (contact) {
     let result =''; 
     $.ajax({
            url: 'http://bank-example.com:3000/login',
            async: false,
            data: JSON.stringify(contact),
            contentType: "application/json",
            Accept: 'application/json; charset=utf-8',
            type: 'POST'
         }).done(function(data) {
            result = 'success';
         }).fail(function(data){
            result = 'fail';
         });
         return result;
    }   

    showAlert(result) {
      var alertCustom = $('#alert-custom');
      const msg= (result == "fail" )?'Se ha producido un error al mandar el mensaje.Inténtelo más tarde' : 'Mensaje envíado';
      const alertType= (result == 'fail')? 'alert-danger' : 'alert-success';
      
      $("#alert-msg").html(msg);
         alertCustom.addClass(alertType);
         alertCustom.addClass('alert-show');
         setTimeout(() => {
            alertCustom.removeClass('alert-show');
            alertCustom.removeClass(alertType);
         }, 5000);
      } 

    
}