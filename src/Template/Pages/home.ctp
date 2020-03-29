<?php
//$this->extend('/Layout/default');

//$this->assign('bodystyle', 'style="background-image:url(/img/photorugby1.jpeg)"')
$this->assign('title', " Home");
$this->assign('navItem', 'nav-item active');
?>
<p>
    <br>
 <!--I can Add stuff up here before I start the container which will traverse the whole row even to make it bigger thourhgt the entier roe-->
</p>

<div class="container">
    <div class="row justify-content-between">
        <div class="col-6">
            <br>
            <h1 class="mb-3" span style="text-align: center; font-size: 32px;">Quality Custom Apparel</h1>
            <h1 class="mb-3" span style="text-align: center; font-size: 32px;">Amazing Prices</h1>
            <br>
            <p span style="font-size: 15px; text-align: center;">
                We work directly with clothing maufacturers, eliminating the middleman and passing the savings onto you.<br>
                A Great quality product at a great price.<br>
            </p>
            <p><br></p>
            <p span style="font-size: 25px; text-align: center;">
                <a href="/contact">Get Started Today</a>
            </p>
            <p><br></p>
            <p><br></p>

            <p span style="font-size: 28px; text-align: center;">
                Teams
            </p>
            <p span style="font-size: 15px; text-align: center;">
                Customize your jersies to your liking.<br>
                Prices are all-inclusive - we don't nickle and dime <br>
                you to add a logo or other items
            </p>
            <p><br></p>
            <p span style="font-size: 28px; text-align: center;">
                Organizations
            </p>
            <p span style="font-size: 15px; text-align: center;">
                Add your company logo to any piece of clothing: t-shirt, polos, jackets, whatever the item we can acomodate most needs
            </p>

        </div>
        <div class="hero-wrap">
            <div class="home-slider owl-carousel">
                <div class="slider-item" style="background-image:url(/img/tshirt.jpg);">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center justify-content-center">
                            <div class="col ftco-animate">
                                <div class="text w-100 text-center">
                                    <h2>We are here to help you</h2>
                                    <h1 class="mb-3">Geragear</br>
                                        <span style="font-size: xx-large; ">Custom Apparel</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-item" style="background-image:url(img/hockey2.jpg);">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center justify-content-center">
                            <div class="col ftco-animate">
                                <div class="text w-100 text-center">
                                    <h2>Made to order</h2>
                                    <h1 class="mb-3">Custom Clothing</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider-item" style="background-image:url(img/rugbycover.jpg);">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-center justify-content-center">
                            <div class="col ftco-animate">
                                <div class="text w-100 text-center">
                                    <h2>We pride ourselves on</h2>
                                    <h1 class="mb-3">Quality</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</div>
