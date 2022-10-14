addToCartButton=document.querySelectorAll(".card-btn");
document.querySelectorAll('.card-btn').forEach(function(addToCartButton){
    addToCartButton.addEventListener('click',function(){
        addToCartButton.classList.add('added');
        setTimeout((function() {
            addToCartButton.classList.remove('added');         
        },2000));
});
});