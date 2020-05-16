<?php
//$this->extend('/Layout/teamsportbase');

$this->assign('title', "Polo Shirts");


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
        width: 50%;
        padding: 10px;
        border: 1px solid black;
    }

    div.th {
        font-weight: bold;
        background: lightgray;
        text-align: center;
    }

    div.myth, div.mytd {
        box-sizing: border-box;
        width: 25%;
        padding: 10px;
        border: 1px solid black;
    }

    div.myth {
        font-weight: bold;
        background: lightgray;
        text-align: center;
    }
</style>
<h1>Polo Shirts</h1>
<br/>
<div>
    Geragear Polos are custom made with the finest material. Add a logo, include a design. Any color, any style
    <br><br>
    Available in 100% polyester or 100% cotton.
    <br><br>
</div>
<div span style="font-size: 25px; text-align: center;">
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>

<div class="flex-table">
    <div class="th" style="width: 100%">Don't see what you are looking for?<br>We can accomodate most needs</div>
</div>

<div class="flex-table mycenter">
    <div class="td">
        <img src="/img/polo7.jpg"
             alt="polyester polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Athletic Cut
    </div>
    <div class="td">
        <img src="/img/polo1.jpg"
             alt="polyester polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Golf Polo<br>Athletic Cut
    </div>
    <div class="td">
        <img src="/img/polo-longsleeve.jpg"
             alt="polyester polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Long Sleeve<br>Athletic Cut<
    </div>
    <div class="td">
        <img src="/img/polo2.jpg"
             alt="polyester polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Polyester Loose Cut
    </div>

    <div class="td">
        <img src="/img/polo3.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Athletic Cut
    </div>
    <div class="td">
        <img src="/img/polo4.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Athletic Cut
    </div>
    <div class="td">
        <img src="/img/polo5.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Loose Cut
    </div>
    <div class="td">
        <img src="/img/polo6.jpg"
             alt="cotton polo"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>100% Cotton Loose Cut
    </div>
</div>

<div span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>

<div class="flex-table">
    <div class="myth" style="width: 100%">Polo Shirt Material & Design Specifications</div>
</div>

<div class="flex-table">
    <div class="myth">Material</div>
    <div class="myth">Material Weight</div>
    <div class="myth">Description</div>
    <div class="myth">Print Type Available</div>

    <div class="mytd">Cotton</div>
    <div class="mytd">120 - 190gsm (4.5 - 6.5oz)</div>
    <div class="mytd">100% Combed Cotton<br>Machine Washable</div>
    <div class="mytd">SilkScreen<br>HeatPress<br>Applique<br>Embroidery</div>

    <div class="mytd">Polyester</div>
    <div class="mytd">120 - 190gsm <br>(4.5 - 6.5oz)</div>
    <div class="mytd">100% Polyester<br> Breathable<br> Stretchy<br> Dri-fit Wicking Technology<br>Machine Washable</div>
    <div class="mytd">Sublimation<br>SilkScreen<br>HeatPress<br>Applique<br>Embroidery</div>
</div>
