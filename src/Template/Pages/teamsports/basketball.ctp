<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Basketball");


?>

<h1>Basketball</h1>

<?php
$this->assign('productImage1', '<img src="/img/basketball-reversable.png"
                         style="width:225px;height:225px;"
                         alt="Basketball Pactice Jersey" title="Basketball Pactice Jersey" class="img-responsive">');

$this->assign('productName1', 'Basketball Pactice Jersey');
        
$this->assign('productDetails1', '<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>
                            <li>Reversable</li>
                            <li>Colors: Red, Black.White, Blue, Pink, Orange and Purple</li>');

$this->assign('productPrice1', 'Price: $18.00 - $35.00
                        <p>* Prices will vary depending on material, order size and customization</p>') ;



$this->assign('productImage2', '<img src="/img/basketball-jersey-uniform.jpg"
                         style="width:225px;height:225px;"
                         alt="Basketball Jersey" title="Basketball Jersey" class="img-responsive">');

$this->assign('productName2', 'Basketball Jersey');
        
$this->assign('productDetails2', '
                            <li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $20.00 - $40.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/basketball-shorts-with-pockets.png"
                         style="width:225px;height:225px;"
                         alt="Basketball Shorts" title="Basketball Shorts" class="img-responsive">');

$this->assign('productName3', 'Basketball Shorts');
        
$this->assign('productDetails3', '<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>
                            <li>Elastic waistband provides a comfortable fit</li>
                            <li>Draw String closure</li>');

$this->assign('productPrice3', 'Price: $18.00 - $35.00
                            <p>* Prices will vary depending on material, order size and customization</p>') ;
?>