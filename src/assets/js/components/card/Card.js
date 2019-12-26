class Card {
    constructor(name,image,title,score,episodes,synopsis){
        this.name = name
        this.image = image
        this.title = title
        this.score = score
        this.episodes = episodes
        this.synopsis = synopsis
    }
    get getElement(){
        let string = 
        '<a class="card card-anime card-' + this.name + ' position-relative mx-auto" href="#">' +
            '<div class="card-content" style="background-image:url(' + this.image + ')">' +
                '<div class="card-row w-100">' +
                    '<div class="card-item mb-1">' +
                        '<h2 class="card-title text-center color-white ellipsis">' + this.title + '</h2>' +
                    '</div>' +
                    '<div class="card-item d-flex align-items-center justify-content-between">' +
                        '<span class="card-score color-white">' + 
                            '<img class="card-score-img" src="assets/images/icons/star.svg" width="18">'+ this.score + 
                        '</span>' +
                        '<span class="card-episodes color-white">' + this.episodes + ' episode(s)</span>' +
                    '</div>' +
                '</div>' +
                '<div class="card-box position-absolute">' + 
                    '<span class="card-title mb-2 color-white w-100">' + this.title + '</span>' +
                    '<span class="card-synopsis color-white w-100">' + this.synopsis + '</span>' +
                '</div>' +
            '</div>' +
        '</a>'

    return string
    }
}

export default Card