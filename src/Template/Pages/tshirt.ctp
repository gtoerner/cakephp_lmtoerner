<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Softball");


?>

<h1>Softball</h1>

<?php
$this->assign('productImage1', "<img src='/img/t-shirt1.jpg' style='width:225px;height:225px;'
                                     alt='T-Shirt' title='T-Shirt' class='img-responsive'>");

$this->assign('productName1', 'Dri Fit T-Shirt');

$this->assign('productDetails1', '
<li>Quick Dry</li>
<li>Fully customizable</li>
<li>Any color or style</li>
<li>Print options: Sublimated
</li>');

		$this->assign('productPrice1', 'Price: $20.00 - $30.00
<p>* Prices will vary depending on material, order size and customization</p>');


		$this->assign('productImage2', "<img src='/img/t-shirt2.jpg' style='width:225px;height:225px;'
                                             alt='T-Shirt' title='T-Shirt' class='img-responsive'>");

$this->assign('productName2', 'Dri Fit T-Shirt');

$this->assign('productDetails2', '
<li>Quick Dry</li>
<li>Fully customizable</li>
<li>Any color or style</li>
<li>Print options: Sublimated</li>');

$this->assign('productPrice2', 'Price: $20.00 - $30.00
<p>* Prices will vary depending on material, order size and customization</p>');


$this->assign('productImage3', '<img src="/img/t-shirt3.jpg"
                                     style="width:225px;height:225px;"
                                     alt="T-Shirt" title="T-Shirt" class="img-responsive">');

$this->assign('productName3', 'Dri Fit T-Shirt');

$this->assign('productDetails3', '
<li>Quick Dry</li>
<li>Fully customizable</li>
<li>Any color or style</li>
<li>Print options: Sublimated</li>');

$this->assign('productPrice3', 'Price: $20.00 - $30.00
<p>* Prices will vary depending on material, order size and customization</p>');
?>