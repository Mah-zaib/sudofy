const createNav=()=>{
    let nav =document.querySelector('.navbar')
    nav.innerHTML=`
    <div class="nav">
    <img src="https://freshcreativeinc.com/wp-content/uploads/2017/08/Fresh_Logo-Green-White-2000-1.png" class="logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search items">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png" alt=""></a>
            <a href="#"><img src="http://cdn.onlinewebfonts.com/svg/img_287768.png"alt=""></a>
            
        </div>
    </div>
    <ul class="links-class">
        <li class="link-item"><a href="file:///E:/Desktop/E-commerce/E-COMMERCE.html" class="link">Home</a></li>
        <li class="link-item"><a href="file:///E:/Desktop/E-commerce/product.html#" class="link">Products</a></li>
        <li class="link-item"><a href="#" class="link">About us</a></li>
      </ul>`
}
createNav();