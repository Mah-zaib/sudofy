const createNav=()=>{
    let nav =document.querySelector('.navbar')
    nav.innerHTML=`
    <div class="nav">
    <img src="https://mpng.subpng.com/20180926/qau/kisspng-computer-icons-scalable-vector-graphics-applicatio-tynor-wrist-splint-ambidextrous-rs-274-wrist-s-5bac3149dcb297.944285061538011465904.jpg " class="logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand,product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="https://www.kindpng.com/picc/m/33-338711_circle-user-icon-blue-hd-png-download.png" alt=""></a>
            <a href="#"><img src="http://cdn.onlinewebfonts.com/svg/img_287768.png"alt=""></a>
            
        </div>
    </div>
    <ul class="links-class">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Products</a></li>
        <li class="link-item"><a href="#" class="link">About us</a></li>


      </ul>`
}
createNav();