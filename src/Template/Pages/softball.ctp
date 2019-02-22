<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Softball");


?>

<h1>Softball</h1>

<?php
$this->assign('productImage1', "<img src='/img/baseballtop2.jpg' style='width:225px;height:225px;'
                                     alt='Softball Jersey' title='Softball Jersey' class='img-responsive'>");

$this->assign('productName1', 'Softball Jersey');

$this->assign('productDetails1', '
<li>Cut & sewn with buttons or pullover</li>
<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill
</li>');

		$this->assign('productPrice1', 'Price: $30.00 - $50.00
<p>* Prices will vary depending on material, order size and customization</p>') ;


		$this->assign('productImage2', "<img src='/img/softballjersey.jpg' style='width:225px;height:225px;'
                                             alt='Softball Jersey' title='Softball Jersey' class='img-responsive'>");

$this->assign('productName2', 'Softball Jersey');

$this->assign('productDetails2', '
<li>Cut & sewn with buttons or pullover</li>
<li>220gsm-300gsm polyester fabric</li>
<li>Print options: Sublimated / Embroidery / Silk Printing / Tackle Twill</li>');

$this->assign('productPrice2', 'Price: $30.00 - $50.00
<p>* Prices will vary depending on material, order size and customization</p>') ;


$this->assign('productImage3', '<img src="/img/SoftballPants.png"
                                     style="width:225px;height:225px;"
                                     alt="Softball Pants" title="Softball Pants" class="img-responsive">');

$this->assign('productName3', 'Softball Pants');

$this->assign('productDetails3', '
<li>Zippered fly and snap closure for easy on/off</li>
<li>Elastic waistband provides a comfortable fit</li>
<li>Welt pockets offer convenient storage</li>');

$this->assign('productPrice3', 'Price: $25.00 - $35.00
<p>* Prices will vary depending on material, order size and customization</p>') ;
?>