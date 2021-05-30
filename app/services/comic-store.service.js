class ComicService {

   constructor() {
   }

   sendEmail(contact) {
      var thisClass = this ;
     
      $.ajax({
         url: 'http://example.com:3000/send',
         async: false,
         data: JSON.stringify(contact),
         contentType: "application/json",
         Accept: 'application/json; charset=utf-8',
         type: 'POST'
      }).done(function (data) {
         thisClass.showAlert('success');
      }).fail(function (data) {
         thisClass.showAlert('fail');
      });
   }

   showAlert(result) { // Show custom alert
      var alertCustom = $('#alert-custom');
      const msg = (result == "fail") ? 'Se ha producido un error al mandar el mensaje.Inténtelo más tarde' : 'Mensaje envíado';
      const alertType = (result == 'fail') ? 'alert-danger' : 'alert-success';

      $("#alert-msg").html(msg);
      alertCustom.addClass(alertType);
      alertCustom.addClass('alert-show');
      
      setTimeout(() => {
         alertCustom.removeClass('alert-show');
         alertCustom.removeClass(alertType);
      }, 5000);
   }


}