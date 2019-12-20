import Anime from './Anime.js'
import Card from './Card.js'
import Column from './Column.js'
import Request from './Request.js'

class Manager{
    constructor(section){
        this.section = section
    }

    get getMyAnimeList(){
        const searchAnimes = new Request('https://api.jikan.moe/v3/search/anime?q=jojo&limit=16', 'GET')
        searchAnimes.json.then(json => {
            json.results.forEach((result) => {
                let anime = new Anime(result.image_url,result.title,result.score,result.episodes,result.synopsis)
                let card = new Card('myList')
                let cardElement = card.getElement(anime.getImage,anime.getTitle,anime.getScore,anime.getSynopsis,anime.getEpisodes)
                let column = new Column(cardElement, 'col-xl-2 col-md-3 col-sm-6 col-12 px-md-2 mb-3')
                document.getElementById(this.section).appendChild(column.get)
            })
        })
    }
}


export default Manager