<?php
//$this->extend('/Layout/teamsportbase');

$this->assign('title', " Hoodies");


?>
<style>
    table {
        border: 1px solid black;
        border-collapse: collapse;
    }

    th {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        background: lightgray;
    }

    td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    .branch {
        text-align: center;
    }

    .ga {
        background: lightgreen;
    }

    .dontuse {
        background: lightpink;
    }

    .pending {
        background: lightyellow;
    }

    .flex-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .mycenter {
        text-align: center;
    }

    /* Rows & cells */
    div.th, div.td {
        box-sizing: border-box;
        width: 25%;
        padding: 10px;
        border: 1px solid black;
    }

    div.th {
        font-weight: bold;
        background: lightgray;
        text-align: center;
    }
</style>
<div>
    <h1>Sweatshirts and Hoodies</h1>
    <br/>
</div>
<div>
    Geragear Sweatshirts and Hoodies are custom made with the finest material. Add a logo, include a design. Any color,
    any style
    <br><br>
    Available in 100% polyester or 100% cotton.
</div>
<div span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>

<div class="flex-table">
    <div class="th" style="width: 100%">Don't see what you are looking for?<br>We can accomodate most needs</div>
</div>

<div class="flex-table mycenter">
    <div class="td">
        <img src="/img/hoodie4.jpg"
             alt="hoodie"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Hoodie
    </div>
    <div class="td">
        <img src="/img/hoodie1.jpg"
             alt="hoodie"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Full Zip Hoodie
    </div>
    <div class="td">
        <img src="/img/hoodie3.jpg"
             alt="hoodie"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Pullover Hoodie
    </div>
    <div class="td">
        <img src="/img/hoodie.jpg"
             alt="hoodie"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Hoodie
    </div>

    <div class="td">
        <img src="/img/sweatshirt-crew.jpg"
             alt="sweatshirt"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Poly/Cotton Fleece<br>Crewneck Pullover
    </div>
    <div class="td">
        <img src="/img/hoodie-womengym.jpg"
             alt="hoodie"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Lycra Cotton/Spandex <br>Woman's Gym Hoodie
    </div>
    <div class="td">
        <img src="/img/fleece-printed.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Printed Fleece
    </div>
    <div class="td">
        <img src="/img/hoodie-silly.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Silly Design Hoodie
    </div>
</div>


<div span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>

<div class="flex-table">
    <div class="th" style="width: 100%">Hoodie Material & Design Specifications
    </div>
</div>

<div class="flex-table">

    <div class="th">Material</div>
    <div class="th">Material Weight</div>
    <div class="th">Description</div>
    <div class="th">Print Type Available</div>

    <div class="td">Cotton</div>
    <div class="td">150 - 500gsm <br>(6 - 18oz)</div>
    <div class="td">100% Combed Cotton<br>Machine Washable</div>
    <div class="td">SilkScreen<br>HeatPress<br>Applique<br>Embroidery</div>

    <div class="td">Polyester</div>
    <div class="td">150 - 500gsm <br>(6 - 18oz)</div>
    <div class="td">100% Polyester<br> Breathable<br> Stretchy<br> Dri-fit Wicking Technology<br>Machine Washable</div>
    <div class="td">Sublimation<br>SilkScreen<br>HeatPress<br>Applique<br>Embroidery</div>
</div>
