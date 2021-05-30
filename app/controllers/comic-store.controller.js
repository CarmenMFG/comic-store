class ComicController{

    constructor(service,view){
        this.service=service;
        this.view =view;
        this.view.display();
        this.view.bindClickSendEmail(this.handlerClickSendEmail);
    }
   
    handlerClickSendEmail = (contact) => {
       const result = this.service.sendEmail(contact);
       this.service.showAlert(result);
    }

}