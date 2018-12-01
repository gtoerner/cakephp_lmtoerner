<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Soccer");


?>

<h1>Soccer</h1>

<?php
$this->assign('productImage1', '<img src="/img/soccershorts1.jpg"
                         style="width:225px;height:225px;"
                         alt="Soccer Shorts" title="Soccer Shorts" class="img-responsive">');

$this->assign('productName1', 'Soccer Shorts');
        
$this->assign('productDetails1', '<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice1', 'Price: $18.00 - $30.00
    <p>* Prices will vary depending on material, order size and customization</p>') ;



$this->assign('productImage2', "<img src='/img/soccerjersey.jpg' style='width:175px;height:225px;'
        alt='Soccer Jersey' title='Soccer Jersey' class='img-responsive'>");

$this->assign('productName2', 'Soccer Jersey');
        
$this->assign('productDetails2', '<li>220gsm-300gsm polyester fabric</li>
    <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $45.00 - $60.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/soccer-socks.png"
                         style="width:225px;height:225px;"
                         alt="Soccer Socks" title="Soccer Socks" class="img-responsive">');

$this->assign('productName3', 'Soccer Socks');
        
$this->assign('productDetails3', '<li>Spandex / Nylon / Cotton</li>
    <li>Compression </li>');

$this->assign('productPrice3', 'Price: $10.00 - $15.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;
?>