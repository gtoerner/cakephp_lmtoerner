<?php
$this->extend('/Layout/teamsportbase');
$this->assign('title', " Football");


?>

<h1>Football</h1>

<?php
$this->assign('productImage1', '<img src="/img/amerfootball3.jpg"
                         style="width:225px;height:225px;"
                         alt="American Football" title="American Football" class="img-responsive">');

$this->assign('productName1', '');
        
$this->assign('productDetails1', '');

$this->assign('productPrice1', '') ;



$this->assign('productImage2', "<img src='/img/amerfootball.jpg' style='width:225px;height:225px;'
        alt='Football Jersey & Pants' title='Football Jersey & Pants' class='img-responsive'>");

$this->assign('productName2', 'Football Jersey & Pants');
        
$this->assign('productDetails2', '<li>Resistant to pull and drag</li>
                            <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $50.00 - $75.00
                            <p> Jersey Only: $35.00 - $50.00</p>
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '');

$this->assign('productName3', '');
        
$this->assign('productDetails3', '');

$this->assign('productPrice3', '') ;
?>