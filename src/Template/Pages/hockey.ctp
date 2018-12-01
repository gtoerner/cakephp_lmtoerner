<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Hockey");


?>

<h1>Hockey</h1>

<?php
$this->assign('productImage1', '<img src="/img/hockey-socks.png"
                         style="width:175px;height:225px;"
                         alt="Hockey Socks" title="Hockey Socks" class="img-responsive">');

$this->assign('productName1', 'Hockey Socks');
        
$this->assign('productDetails1', '<li>Print options: Sublimated / Embroidery</li>
                            <li>Fully customizable</li>');

$this->assign('productPrice1', 'Price: $18.00 - $35.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;



$this->assign('productImage2', "<img src='/img/hockey1.jpg' style='width:225px;height:225px;'
        alt='Hockey Jersey' title='Hockey Jersey' class='img-responsive'>");

$this->assign('productName2', 'Hockey Jersey');
        
$this->assign('productDetails2', '<li>Authentic jersey neck lace</li>
                            <li>Built-in gussets for added mobility</li>
                            <li>Double layers at shoulders and elbows</li>
                            <li>Double needle stitching on critical seams</li>
                            <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $50.00 - $75.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', "<img src='/img/hockey-shell.jpg' style='width:175px;height:225px;'
        alt='Hockey Shell' title='Hockey Shell' class='img-responsive'>");

$this->assign('productName3', 'Hockey Shell');
        
$this->assign('productDetails3', '<li>Durable 420 denier coated nylon</li>
                            <li>Adjustable belt closure</li>
                            <li>Braid Accents on side panels</li>
                            <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice3', 'Price: $35.00 - $50.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;
?>