<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Rugby");


?>

<h1>Rugby</h1>

<?php
$this->assign('productImage1', '<img src="/img/rugby3.jpg"
                         style="width:225px;height:225px;"
                         alt="Rugby Jersey" title="Rugby Jersey" class="img-responsive"></br><img src="/img/rugby4.jpg"
                         style="width:225px;height:225px;"
                         alt="Rugby Jersey" title="Rugby Jersey" class="img-responsive">');

$this->assign('productName1', '');
        
$this->assign('productDetails1', '');

$this->assign('productPrice1', '') ;



$this->assign('productImage2', '<img src="/img/rugby1.jpg"
                         style="width:225px;height:225px;"
                         alt="Rugby Jersey" title="Rugby Jersey" class="img-responsive">');

$this->assign('productName2', 'Rugby Jersey');
        
$this->assign('productDetails2', '<li>220gsm-300gsm polyester fabric</li>
    <li>Double Stitched for extra strength</li>
    <li>Resistant to pull and drag</li>
    <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $45.00 - $60.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/1rshort1.jpg"
                         style="width:225px;height:225px;"
                         alt="Rugby Shorts" title="Rugby Shorts" class="img-responsive">');

$this->assign('productName3', 'Rugby Shorts');
        
$this->assign('productDetails3', '<li>Double Stitched for extra strength</li>
    <li>Resistant to pull and drag</li>
    <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice3', 'Price: $20.00 - $35.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;
?>