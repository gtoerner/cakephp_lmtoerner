<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Softball");


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
        background: lightgray; }
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    .branch {
        text-align: center;
    }
    .ga { background: lightgreen; }
    .dontuse { background: lightpink; }
    .pending { background: lightyellow; }

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
</style>
<div>
<h1>Softball Uniforms</h1>
</div>
<br/>
<div>
    Geragear softball uniforms are made of high quality, soft, stretchy, breathable, dri-wicking 100% polyester that is machine washable and won't fade.<br>
    Fully customizable: Add a logo, include a design. Any color, any style
    <br>
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
            <img src="/img/baseballjersey-henley.jpg"
                 alt="softball jersey"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Pullover Jersey<br>Henley Collar
    </div>
    <div class="td">
            <img src="/img/softballjersey2.png"
                 alt="softball jersey"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Crewneck Pullover
    </div>
    <div class="td">
            <img src="/img/softballjersey.jpg"
                 alt="softball jersey"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Button Down Jersey
    </div>
    <div class="td">
            <img src="/img/SoftballPants.png"
                 alt="softball pants"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Fancy Striped Pants
    </div>
</div>

<div span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>
