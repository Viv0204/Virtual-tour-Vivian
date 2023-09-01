AFRAME.registerComponent('cursorListener',{
    schema: {
        selectElementId: {type: "string", default: ''}
    },
    init: function(){
        this.mouseEnterEvent()
        this.mouseLeaveEvent()
    },
    handlePlacesList: function(){
        var id = this.el.getAttribute('id')
        var placesId = ['newYorkCity', 'budapest', 'eiffelTower', 'tajMahal']
        if(placesId.includes(id)){
            var placeContainer = document.querySelector('#placecontainer')
            placeContainer.setAttribute('cursorListener', {selectElementId: id})
            this.el.setAttribute('material', {color: 'black', opacity: 1})
        }
    },
    mouseEnterEvent: function(){
        this.el.addEventListener('mouseenter', ()=> {
            this.handlePlacesList()
        })
    },
    mouseLeaveEvent: function(){
        this.el.addEventListener('mouseleave', ()=>{
            var {selectElementId} = this.data
            if(selectElementId){
                var el = document.querySelector(`#${selectElementId}`)
                var id = el.getAttribute('id')
                if(id===selectElementId){
                    el.setAttribute('material', {color: 'blue', opacity: 1})
                }
            }
        })
    }
})