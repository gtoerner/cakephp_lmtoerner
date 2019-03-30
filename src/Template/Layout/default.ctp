<?php

$cakeDescription = 'GeraGear Custom Apparel';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $cakeDescription ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>
    
<script src="/static/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<link href="/static/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
<script src="/static/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<link href="/static/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="/static/css" rel="stylesheet" type="text/css">
<link href="/static/stylesheet.css" rel="stylesheet">
<link href="/static/jquery/swiper/css/swiper.min.css" type="text/css" rel="stylesheet" media="screen">
<link href="/static/jquery/swiper/css/opencart.css" type="text/css" rel="stylesheet" media="screen">
<script src="/static/jquery/swiper/js/swiper.jquery.js" type="text/javascript"></script>
<script src="/static/common.js" type="text/javascript"></script>
<link href="/img/cart.png" rel="icon">

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('link') ?>
    <?= $this->fetch('script') ?>

</head>
<body <?= $this->fetch('bodystyle') ?> >
    <header>
<nav id="top">
    <div class="container">


        <div id="top-links" class="nav pull-right">
            <ul class="list-inline">

                <li><a href="/contact" title="Contact"><i class="fa fa-phone"></i>
                    <span class="hidden-xs hidden-sm hidden-md">708-829-0631</span></a></li>
                    
                <li class="dropdown"><a href="#account" title="My Account"
                                        class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <span
                        class="hidden-xs hidden-sm hidden-md">My Account</span> <span class="caret"></span></a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <?php
                        if ($this->request->session()->read('Auth.User.id'))
                        {
                            echo '<li><a href="/users/users/logout">Logout</a></li>';
                        }
                        else 
                        {
                            echo '<li><a href="/users/users/register">Register</a></li>';
                            echo '<li><a href="/users/users/login">Login</a></li>';
                        }
                        ?>
                            
                        
                    </ul>
                </li>

                <li><a href="#" title="Shopping Cart"><i
                        class="fa fa-shopping-cart"></i> <span
                        class="hidden-xs hidden-sm hidden-md">Shopping Cart</span></a></li>
                <li><a href="#" title="Checkout"><i
                        class="fa fa-share"></i> <span class="hidden-xs hidden-sm hidden-md">Checkout</span></a></li>
            </ul>
        </div>
    </div>
</nav>



    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div id="logo">
                    <?php echo $this->Html->image("geragear-268-75.jpg", [
                    'alt' => "GeraGear Custom Apparel",
                    'url' => ['controller' => 'Pages', 'action' => 'display', 'home', '_full' => true],
                    ['class' => 'img-responsive']
                    ]); ?>
                    <!--
                    <?php echo $this->Html->image("geragear.jpg", [
                        'alt' => "GeraGear Custom Apparel",
                        'url' => ['controller' => 'Pages', 'action' => 'display', 'home', '_full' => true],
                        ['class' => 'img-responsive']
                    ]); ?>
                    -->
                </div>
            </div>
            <div class="col-sm-pull-0">
                <div>
                    <h3><p>Don't see what you are looking for? </p>
                        <p> We can accommodate most needs.</p><p>  <a href="/contact" title="Contact">Contact us</a> for details</p></h3>
                </div>
            </div>
        </div>
<div class="col">
        <nav id="menu" class="navbar">
        <div class="navbar-header">
            <button type="button" class="btn btn-navbar navbar-toggle" data-toggle="collapse"
                    data-target=".navbar-ex1-collapse"><i class="fa fa-bars"></i></button>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
<!--
                <li><?php echo $this->Html->image("geragear-268-75.jpg", [
                    'alt' => "GeraGear Custom Apparel",
                    'url' => ['controller' => 'Pages', 'action' => 'display', 'home', '_full' => true],
                    ['class' => 'img-responsive']
                    ]); ?></li>
-->
                <li><a href="/">Home</a></li>

                <li class="dropdown"><a href="/" class="dropdown-toggle"
                                        data-toggle="dropdown">Team Sports</a>
                    <div class="dropdown-menu" style="">
                        <div class="dropdown-inner">
                            <ul class="list-unstyled">
                                <li><a href="/pages/baseball">Baseball</a></li>
                                <li><a href="/pages/basketball">Basketball</a></li>
                                <li><a href="/pages/cycling">Cycling</a></li>
                                <li><a href="/pages/football">Football</a></li>
                                <li><a href="/pages/hockey">Hockey</a></li>
                                <li><a href="/pages/rugby">Rugby</a></li>
                                <li><a href="/pages/soccer">Soccer</a></li>
                                <li><a href="/pages/softball">Softball</a></li>
                            </ul>
                        </div>
                        <!-- <a href="{% url 'products' %}" class="see-all">Show All Products</a> -->
                    </div>
                </li>

                <li><?php echo $this->Html->link('Polo Shirts', '/pages/polo', ['class' => '']);?></li>
                <li><?php echo $this->Html->link('T-Shirts', '/pages/tshirt', ['class' => '']);?></li>
                <li><?php echo $this->Html->link('Hoodies', '/pages/hoodies', ['class' => '']);?></li>
                <li><?php echo $this->Html->link('About', '/pages/about', ['class' => '']);?></li>
                <li><?php echo $this->Html->link('Contact', '/contact', ['class' => '']);?></li>

            </ul>
            </nav>
        </div>
    
</div>
    </div>
</header>


    <?= $this->Flash->render() ?>
    <div class="container clearfix">
        <?= $this->fetch('content') ?>
    </div>


    <footer>
        <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h5>Information</h5>
                <ul class="list-unstyled">
                    <li><?php echo $this->Html->link('About Us', '/pages/about', ['class' => '']);?></li>
                    <li><a href="/pages/delivery">Delivery Information</a></li>
                    <li><a href="/pages/pricing">Pricing</a></li>
                    <li><a href="/pages/privacy">Privacy Policy</a></li>
                    <li><a href="/pages/sizechart">Size Chart</a></li>
                    <li><a href="/pages/terms">Terms &amp; Conditions</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5>Customer Service</h5>
                <ul class="list-unstyled">
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/pages/returns">Returns</a></li>
                    <li><a href="/pages/sitemap">Site Map</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5>Extras</h5>
                <ul class="list-unstyled">
                    <!-- <li><a href="http://www.lmtoe.com/index.php?route=product/manufacturer">Brands</a></li> -->
                    <li><a href="/pages/voucher">Gift Certificates</a></li>
                    <li><a href="/pages/affiliate">Affiliate</a></li>
                    <li><a href="/pages/specials">Specials</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <!-- When the A-holes at hostgator get their shot together
                <h5>My Account</h5>
                <ul class="list-unstyled">
                    <li><a href="http://www.lmtoe.com/index.php?route=account/account">My Account</a></li>
                    <li><a href="http://www.lmtoe.com/index.php?route=account/order">Order History</a></li>
                    <li><a href="http://www.lmtoe.com/index.php?route=account/wishlist">Wish List</a></li>
                    <li><a href="http://www.lmtoe.com/index.php?route=account/newsletter">Newsletter</a></li>
                </ul>
                -->
            </div>
        </div>
        <hr>
        <p> GeraGear Custom Apparel © 2018</p>
    </div>
    </footer>
    
</body>
</html>
