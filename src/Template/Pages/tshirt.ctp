<?php
//$this->extend('/Layout/teamsportbase');
$this->assign('title', "T-Shirts");
?>
<style>
    mtable {
        border: 1px solid black;
        border-collapse: collapse;
    }

    mth {
        text-align: center;
        border: 1px solid black;
        border-collapse: collapse;
        background: lightgray;
    }

    mtd {
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
<div>
    <h1>T-Shirts</h1>
    <br/>
</div>
<div>
    T-Shirt design and prints have come a long way since the original yellow smiley face was printed on a shirt.
    Sublimation printing and newer screen print technologies have revolutionized the custom T-Shirt industry.
    With sublimation, literally the sky is the limit - any color, any design, can be printed on any style of shirt.
    We have a vast selection of T-Shirts to choose from that can be fully customized.
    <br><br>
    Geragear T-shirts are made with high quality fabric, available in 100% polyester or 100% cotton.
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
        <img src="/img/crewneck-tshirt.jpg"
             alt="crewneck"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Crewneck
    </div>
    <div class="td">
        <img src="/img/long-sleevecewneck-tshirt.jpg"
             alt="longsleeve crewneck"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Longsleeve Crewneck
    </div>
    <div class="td">
        <img src="/img/ringer-tshirt.jpg"
             alt="classic ringer"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Classic Ringer
    </div>
    <div class="td">
        <img src="/img/pocket-tshirt.jpg"
             alt="pocket T"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Pocket T
    </div>

    <div class="td">
        <img src="/img/henley-collartshirt.jpg"
             alt="Henley Collar"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Henley Collar
    </div>
    <div class="td">
        <img src="/img/ragalnsleevetshirt.jpg"
             alt="raglan sleeve"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Raglan Sleeve
    </div>
    <div class="td">
        <img src="/img/v-necktshirt.jpg"
             alt="V neck"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>V-Neck
    </div>
    <div class="td">
        <img src="/img/scoopneck-tshirt.jpg"
             alt="Scoop neck"
             style="width:150px;height:150px;"
             class="img-responsive">
        <br>Scoop Neck
    </div>

</div>


<p span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a><br><br>
</p>

<div class="flex-table">
    <div class="myth" style="width: 100%">T-Shirt Material & Design Specifications</div>
</div>

<!-- <div style="overflow-x: auto"> -->
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
