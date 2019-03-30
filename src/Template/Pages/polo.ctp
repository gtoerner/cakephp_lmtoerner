<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', "Polo Shirts");


?>

<h1>Baseball</h1>

<?php
$this->assign('productImage1', "<img src='/img/polo1.jpg' style='width:225px;height:225px;'
                                     alt='Polo Shirt' title='Polo Shirt' class='img-responsive'>");

$this->assign('productName1', 'Custom Sublimated Polo Shirt');

$this->assign('productDetails1', '<li>Any color, style or pattern/print</li>
<li>Add Logo or custom design</li>
<li>Print options: Sublimated </li>');

		$this->assign('productPrice1', 'Price: $25.00 - $40.00
<p>* Prices will vary depending on material, order size and customization</p>') ;



		$this->assign('productImage2', "<img src='/img/polo2.jpg' style='width:225px;height:225px;'
                                             alt='Polo Shirt' title='Polo Shirt' class='img-responsive'>");

$this->assign('productName2', 'Custom Sublimated Polo Shirt');

$this->assign('productDetails2', '<li>Any color, style or pattern/print</li>
<li>Add Logo or custom design</li>
<li>Print options: Sublimated </li>');

$this->assign('productPrice2', 'Price: $25.00 - $40.00
<p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/polo-coton.jpg"
                                     style="width:225px;height:225px;"
                                     alt="Polo Shirt" title="Polo Shirt" class="img-responsive">');

$this->assign('productName3', '100% Cotton Polo Shirt');

$this->assign('productDetails3', '<li>100% Cotton</li>
<li>Any color, style or pattern/print</li>
<li>Add Logo or custom design</li>
<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice3', 'Price: $25.00 - $40.00
<p>* Prices will vary depending on material, order size and customization</p>') ;
?>