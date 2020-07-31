if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

function ready(){
    var  removeCartItemButtons = document.getElementsByClassName("btn-danger")
    for (var i = 0; i <removeCartItemButtons.length ; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    
    }

    var addToCartButtons = document.getElementsByClassName('button-item')
    for(var i = 0; i< addToCartButtons.length;i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function addToCartClicked(event){
    var shopItem = event.target
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var type = shopItem.dataset.id
    addItemToCart(title,type)
    
}

function addItemToCart(title,type){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title')
    console.log(type)
    for(var i = 0; i < cartItemsNames.length;i++){
        if(cartItemsNames[i].parentElement.dataset.id == 4){
            alert('Você já escolheu um prato feito')
            return
        }
        if(cartItemsNames[i].parentElement.dataset.id == type){
            alert('Só é possível adicionar um item de cada tipo')
            return
        }
    }
    if(type == 4 && cartItemsNames.length>0){
        alert('Você já escolheu ingredientes')
        return
    }
    var cartRowContents = `
    <div data-id="${type}"class="cart-item cart-column">
        <span class="cart-item-title">${title}</span>
    </div>
    <div class="cart-quantity cart-column">
        <button class="btn btn-danger" type="button">Remover</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
}