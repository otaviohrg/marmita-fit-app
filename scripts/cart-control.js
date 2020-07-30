if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready(){
    var removeOrderButtons = document.getElementsByClassName('btn-rm')
    console.log(removeOrderButtons)
    for (var i = 0; i <removeOrderButtons.length ; i++){
        var button = removeOrderButtons[i]
        button.addEventListener('click', removeOrder)
    
    }
}


function removeOrder(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}
