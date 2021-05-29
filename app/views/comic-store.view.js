class PontgrupView {
    constructor() {
        this.cardsMarvel = Array.from(document.getElementsByClassName("marvel"));
        this.cardsDC = Array.from(document.getElementsByClassName("dc"));
        this.cardsStarWars = Array.from(document.getElementsByClassName("star-wars"));
    }

    display() {
        let html;

        // Marvel
        html = `<h5 class="card-title text-center fw-bold">MARVEL</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. </p>
                <p>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. </p>
                <p class="collapse" id="collapseMarvel">
                    Various versions have evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).
                </p>
                <a class="btn btn-card w-100 mt-2" data-bs-toggle="collapse" href="#collapseMarvel"
                    role="button" aria-expanded="false" aria-controls="collapseExample">
                    Más..
                </a>`;
        this.cardsMarvel.forEach(card => card.innerHTML = html);

        // DC
        html = ` <h5 class="card-title text-center fw-bold">DC</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. </p>
                <p>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. </p>
                <p class="collapse" id="collapseDC">
                    Various versions have evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humour and the like).
                </p>
                <a class="btn btn-card w-100 mt-2" data-bs-toggle="collapse" href="#collapseDC"
                    role="button" aria-expanded="false" aria-controls="collapseExample">
                    Más..
                </a>` ;
        this.cardsDC.forEach(card => card.innerHTML = html);

        // Stars Wars ( Obfuscated link)
        html = ` <h5 class="card-title text-center fw-bold">STARS WARS</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. </p>
                <p>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. </p>
                    <span class="js-link" data-url="https://es.wikipedia.org/wiki/Star_Wars">Más..</span>`;

        this.cardsStarWars.forEach(card => card.innerHTML = html);
        
        // Create Links
        [].forEach.call(document.querySelectorAll('.js-link'), function (e) {
                var a = document.createElement('a');
                a.innerHTML = e.innerHTML;
                e.parentNode.insertBefore(a, e);
                e.parentNode.removeChild(e);
    
                a.setAttribute("href", e.dataset.url);
                a.setAttribute("target", "_blank");
                a.setAttribute("class", "btn-star-wars");
            });
    }
}