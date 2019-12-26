import Anime from '../anime/Anime'
import Card from '../card/Card'
import Column from '../column/Column'
import Request from '../request/Request'

class Controller{
    constructor(section){
        this.section = section
    }

    get getMyAnimeList(){
        const searchAnimes = new Request('https://api.jikan.moe/v3/search/anime?q=jojo&limit=16', 'GET')
        searchAnimes.json.then(json => {
            json.results.forEach((result) => {
                let anime = new Anime(result.image_url,result.title,result.score,result.episodes,result.synopsis)
                let card = new Card('myList',anime.getImage,anime.getTitle,anime.getScore,anime.getSynopsis,anime.getEpisodes)
                let cardElement = card.getElement
                let column = new Column(cardElement, 'col-xl-2 col-md-3 col-sm-6 col-12 px-md-2 mb-3')
                document.getElementById(this.section).appendChild(column.get)
            })
        })
    }
}


export default Controller