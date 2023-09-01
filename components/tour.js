AFRAME.registerComponent('thumbnail', {
    init: function(){
        this.placecontainer = this.el
        this.createCards()
    },
    createCards: function(){
        var thumbnailReference = [
            {id: 'newYorkCity', title: 'New York City', img: 'assets/thumbnails/new_york_city.png'},
            {id: 'eiffelTower', title: 'Paris City', img: 'assets/thumbnails/eiffel_tower.jpg'},
            {id: 'budapest', title: 'Budapest City', img: 'assets/thumbnails/budapest.jpg'},
            {id: 'tajMahal', title: 'Agra City', img: 'assets/thumbnails/taj_mahal.png'},
        ]
        var previousPositionX = -60
        for (var item of thumbnailReference){
            var posX = previousPositionX + 25
            var posY = 0
            var posZ = -40
            var position = {x: posX, y: posY, z: posZ}
            previousPositionX = posX
            // border element
            var borderEl = this.createBorder(position, item.id)
            // thumbnail element
            var thumbnailEl = this.createThumbnails(item)
            borderEl.appendChild(thumbnailEl)
            // title element
            var titleEl = this.createTitleEl(position, item)
            borderEl.appendChild(titleEl)

            this.placecontainer.appendChild(borderEl)
        }
    },
    createBorder: function(position, id){
        var entityEl = document.createElement('a-entity')
        entityEl.setAttribute('id', id)
        entityEl.setAttribute('position', position)
        entityEl.setAttribute('visible', true)
        entityEl.setAttribute('geometry', {primitive: 'ring', radiusInner: 9, radiusOuter: 10})
        entityEl.setAttribute('material', {color: '#39ac73', opacity: 0.5})
        entityEl.setAttribute('cursorListener', {})
        return entityEl
    },
    createThumbnails: function(item){
        var entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible', true)
        entityEl.setAttribute('geometry', {primitive: 'circle', radius: 9})
        entityEl.setAttribute('material', {src: item.img})
        return entityEl
    },
    createTitleEl: function(position, item){
        var entityEl = document.createElement('a-entity')
        entityEl.setAttribute('text', 
        {font: 'exo2bold', align: 'center', width: 55, color: 'black', value: item.title})
        var elPosition = position
        elPosition.y= -30
        entityEl.setAttribute('position', position)
        entityEl.setAttribute('visible', true)
        return entityEl
    }
})