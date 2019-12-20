class Anime {
    constructor(image,title,score,synopsis,episodes) {
        this.image = image
        this.title = title
        this.score = score,
        this.synopsis = synopsis
        this.episodes = episodes
    }
    get getImage(){
        return this.image
    }
    get getTitle(){
        return this.title
    }
    get getScore(){
        return this.score
    }
    get getSynopsis(){
        return this.synopsis
    }
    get getEpisodes(){
        return this.episodes
    }
}

export default Anime