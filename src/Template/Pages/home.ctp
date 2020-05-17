<?php
//$this->extend('/Layout/default');

//$this->assign('bodystyle', 'style="background-image:url(/img/photorugby1.jpeg)"')
$this->assign('title', " Home");
$this->assign('navItem', 'nav-item active');
?>
<style>
    * {
        box-sizing: border-box;
    }

    .row::after {
        content: "";
        clear: both;
        display: block;
    }

    [class*="col-"] {
        float: left;
        padding: 15px;
    }

    html {
        font-family: "Lucida Sans", sans-serif;
    }

    /* For desktop: */
    .col-1 {
        width: 8.33%;
    }

    .col-2 {
        width: 16.66%;
    }

    .col-3 {
        width: 25%;
    }

    .col-4 {
        width: 33.33%;
    }

    .col-5 {
        width: 41.66%;
    }

    .col-6 {
        width: 50%;
    }

    .col-7 {
        width: 58.33%;
    }

    .col-8 {
        width: 66.66%;
    }

    .col-9 {
        width: 75%;
    }

    .col-10 {
        width: 83.33%;
    }

    .col-11 {
        width: 91.66%;
    }

    .col-12 {
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        [class*="col-"] {
            width: 100%;
        }
    }

    .flex-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .mycenter {
        text-align: center;
    }

    .mycolor {
        color: white;
    }

    /* Rows & cells */
    div.th, div.td {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        /*border: 1px solid black; */
    }

    div.th {
        font-weight: bold;
        background: lightgray;
        text-align: center;
    }
</style>

<div>
    <br>
    <!--I can Add stuff up here before I start the container which will traverse the whole row even to make it bigger thourhgt the entier roe-->
</div>

<div>
    <div class="td">
        <br>
        <h1 class="mb-3" span style="font-size: 32px;">Quality Custom Apparel</h1>
        <h1 class="mb-3" span style="font-size: 32px;">Amazing Prices</h1>
        <br>
        <p span style="font-size: 15px;">
            We work directly with clothing maufacturers, eliminating the middleman and passing the savings onto you.
            A Great quality product at a great price.<br>
        </p>
        <p><br></p>
        <p span style="font-size: 25px;">
            <a href="/contact">Get Started Today</a>
        </p>
        <p><br></p>
        

        <p span style="font-size: 28px;">
            Teams
        </p>
        <p span style="font-size: 15px;">
            Customize your jersies to your liking.<br>
            Prices are all-inclusive - we don't nickle and dime <br>
            you to add a logo or other items
        </p>
        <p><br></p>
        <p span style="font-size: 28px;">
            Organizations
        </p>
        <p span style="font-size: 15px;">
            Add your company logo to any piece of clothing: t-shirt, polos, jackets, whatever the item we can acomodate
            most needs
        </p>

    </div>
    <p><br></p>
    <p span style="font-size: 25px;">
        <a href="/contact">Get Started Today</a>
    </p>
    <p><br></p>
    <div class="td">
        <div class="home-slider owl-carousel">
            <div class="slider-item" style="background-image:url(/img/tshirt.jpg);">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-center justify-content-center">
                        <div class="col ftco-animate">
                            <div class="text w-100 text-center">
                                <h2 class="mb-3">Geragear</h2><br>
                                <h2>We are here to help you</h2>
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
                                <h2>Made to order</h2><br>
                                <h2 class="mb-3">Custom Clothing</h2>
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
                                <h2>We pride ourselves on</h2><br>
                                <h2 class="mb-3">Quality</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
