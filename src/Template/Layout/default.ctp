<?php

$cakeDescription = 'L.M.Toerner';
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

    <?= $this->Html->css(['/bootstrap/css/bootstrap.min.css', 
        '/font-awesome/css/font-awesome.min.css', 'css', 'stylesheet', 
        '/jquery/swiper/css/swiper.min.css', '/jquery/swiper/css/opencart.css']); ?>

    <?= $this->Html->script(['/jquey/jquery-2.1.1.min.js', 
        '/bootstrap/js/bootstrap.min.js', '/jquery/swiper/js/swiper.jquery.js', 'common']); ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>

</head>
<body>
    <header>
<nav id="top">
    <div class="container">


        <div id="top-links" class="nav pull-right">
            <ul class="list-inline">

                <li><a href="/pages/contact" title="Contact"><i class="fa fa-phone"></i>
                    <span class="hidden-xs hidden-sm hidden-md">708-829-0631</span></a></li>
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
                    <?php echo $this->Html->image("lmtoerner.jpg", [
                        'alt' => "L.M.Toerner",
                        'url' => ['controller' => 'Pages', 'action' => 'display', 'home', '_full' => true],
                        ['class' => 'img-responsive']
                    ]); ?>
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

                <li><?php echo $this->Html->link('About', '/pages/about', ['class' => '']);?></li>
                <li><?php echo $this->Html->link('Contact', '/pages/contact', ['class' => '']);?></li>

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
                    <li><a href="/pages/contact">Contact Us</a></li>
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
        <p> L.M.Toerner, LLC © 2018</p>
    </div>
    </footer>
    
</body>
</html>
