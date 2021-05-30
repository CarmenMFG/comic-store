class ComicController {

    constructor(service, view) {
        this.service = service;
        this.view = view;
        this.view.display();
        this.view.bindClickSendEmail(this.handlerClickSendEmail);
    }

    handlerClickSendEmail = (contact) => {
        this.service.sendEmail(contact);
     }
}