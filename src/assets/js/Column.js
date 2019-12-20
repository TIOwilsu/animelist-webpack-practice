class Column{
    constructor(element,className){
        this.element = element
        this.className = className
    }
    get get(){
        let col = document.createElement('div')
        col.className = this.className
        col.innerHTML = this.element
        return col
    }
}

export default Column