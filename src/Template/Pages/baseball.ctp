<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Baseball");


?>

<h1>Baseball</h1>

<?php
$this->assign('productImage1', '');

$this->assign('productName1', '');
        
$this->assign('productDetails1', '');

$this->assign('productPrice1', '') ;



$this->assign('productImage2', "<img src='/img/baseballtop1.jpg' style='width:225px;height:225px;'
        alt='Baseball Jersey' title='Baseball Jersey' class='img-responsive'>");

$this->assign('productName2', 'Baseball Jersey');
        
$this->assign('productDetails2', '<li>Cut & sewn with buttons or pullover</li>
                            <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $30.00 - $50.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/custom-baseball-pants-for-men.png"
                         style="width:225px;height:225px;"
                         alt="Baseball Pants" title="Baseball Pants" class="img-responsive">');

$this->assign('productName3', 'Baseball Pants');
        
$this->assign('productDetails3', '<li>Zippered fly and snap closure for easy on/off</li>
                            <li>Elastic waistband provides a comfortable fit</li>
                            <li>Welt pockets offer convenient storage</li>');

$this->assign('productPrice3', 'Price: $25.00 - $40.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;
?>