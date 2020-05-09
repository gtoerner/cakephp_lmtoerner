<?php

$cakeDescription = 'GeraGear Custom Apparel';
?>
<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        <?= $cakeDescription ?>:
        <?= $this->fetch('title') ?>
    </title>
    <?= $this->Html->meta('icon') ?>

    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap" rel="stylesheet">
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"> -->

    <?= $this->Html->css('milligram.min.css') ?>
    <?= $this->Html->css('cake.css') ?>
    <?= $this->Html->css('all.css') ?> <!-- font-awsome -->

    <?= $this->Html->css('animate.css') ?>
    <?= $this->Html->css('owl.carousel.min.css') ?>
    <?= $this->Html->css('owl.theme.default.min.css') ?>
    <?= $this->Html->css('magnific-popup.css') ?>
    <?= $this->Html->css('flaticon.css') ?>
    <?= $this->Html->css('ionicons.min.css') ?>
    <?= $this->Html->css('icomoon.css') ?>
    <?= $this->Html->css('style.css') ?>
    <?= $this->Html->css('stylesheet.css') ?>
    <?= $this->Html->css('normalize.css') ?>


    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
</head>
<body <?= $this->fetch('bodystyle') ?> >
    <header>
        <div class="container pt-5">
            <div class="row justify-content-between">
                <div class="col">
                    <a class="navbar-brand" href="/"><span style="font-size: 45px; color: #23272b;">Geragear</span><br>
                        <span style="font-size: 25px;">Custom Apparel</span></a>
                </div>
                <div class="col d-flex justify-content-end">
                    <div class="social-media">
                        <p class="mb-0 d-flex">
                            <a href="https://www.facebook.com/geragearcustomapparel/" class="d-flex align-items-center justify-content-center"><span class="fab fa-facebook"><i class="sr-only">Facebook</i></span></a>
                            <a href="https://twitter.com/geragear1" class="d-flex align-items-center justify-content-center"><span class="fab fa-twitter"><i class="sr-only">Twitter</i></span></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"><span class="fab fa-instagram"><i class="sr-only">Instagram</i></span></a>
                            <a href="#" class="d-flex align-items-center justify-content-center"><span class="fab fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span> Menu
                </button>
                <!--
                <form action="#" class="searchform order-lg-last">
                    <div class="form-group d-flex">
                        <input type="text" class="form-control pl-3" placeholder="Search">
                        <button type="submit" placeholder="" class="form-control search"><span class="fa fa-search"></span></button>
                    </div>
                </form>
                -->
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav mr-auto">
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('Home', '/', ['class' => 'nav-link']);?></li>
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('TeamSports', '/pages/teamsports/teamsports', ['class' => 'nav-link']);?></li>
                        <!--<li class="nav-item dropdown">
                            <a href="/" class="nav-link dropdown-toggle"
                               data-toggle="dropdown" href="" role="button" aria-haspopup="false" aria-expanded="false">Team&nbsp;Sports</a>
                            <div class="dropdown-menu" style="">
                                <a class="dropdown-item-text" href="/pages/teamsports/baseball"> <span style="font-size: small">Baseball</span> </a>
                                <a class="dropdown-item-text" href="/pages/teamsports/basketball"><span style="font-size: small">Basketball</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/cycling"><span style="font-size: small">Cycling</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/football"><span style="font-size: small">Football</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/hockey"><span style="font-size: small">Hockey</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/rugby"><span style="font-size: small">Rugby</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/soccer"><span style="font-size: small">Soccer</span></a>
                                <a class="dropdown-item-text" href="/pages/teamsports/softball"><span style="font-size: small">Softball</span></a>

                                <a href="{% url 'products' %}" class="see-all">Show All Products</a>
                            </div>
                        </li>
                -->
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('T-Shirts', '/pages/tshirt', ['class' => 'nav-link']);?></li>
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('Polos', '/pages/polo', ['class' => 'nav-link']);?></li>
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('SweatShirts', '/pages/hoodies', ['class' => 'nav-link']);?></li>

                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('About', '/pages/about', ['class' => 'nav-link']);?></li>
                        <li class=<?= $this->fetch('navItem', 'nav-item') ?>><?php echo $this->Html->link('Contact', '/contact', ['class' => 'nav-link']);?></li>

                        <!--
                        <li class="nav-item"><a href="team.html" class="nav-link">Our team</a></li>
                        <li class="nav-item"><a href="project.html" class="nav-link">Project</a></li>
                        <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                        -->
                    </ul>
                </div>
            </div>
        </nav>
        <!-- END nav -->
    </header>

    <main>
        <div class="container clearfix">
            <?= $this->Flash->render() ?>
            <?= $this->fetch('content') ?>
        </div>

    </main>

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

    <?= $this->Html->script('jquery.min.js') ?>
    <?= $this->Html->script('jquery-migrate-3.0.1.min.js') ?>
    <?= $this->Html->script('popper.min.js') ?>
    <?= $this->Html->script('bootstrap.min.js') ?>
    <?= $this->Html->script('jquery.easing.1.3.js') ?>
    <?= $this->Html->script('jquery.waypoints.min.js') ?>
    <?= $this->Html->script('jquery.stellar.min.js') ?>
    <?= $this->Html->script('jquery.animateNumber.min.js') ?>
    <?= $this->Html->script('owl.carousel.min.js') ?>
    <?= $this->Html->script('jquery.magnific-popup.min.js') ?>
    <?= $this->Html->script('scrollax.min.js') ?>
    <?= $this->Html->script('google-map.js') ?>
    <?= $this->Html->script('main.js') ?>

</body>
</html>
