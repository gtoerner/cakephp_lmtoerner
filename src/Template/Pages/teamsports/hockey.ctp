<?php
$this->extend('/Layout/teamsportbase');

$this->assign('title', " Hockey");


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
<h1>Hockey Gear</h1>
</div>
<br/>
<div>
    Our hockey gear is made of high quality, durable, soft, stretchy, breathable, dri-wicking polyester material that is machine washable and won't fade.<br>
    Fully customizable: Add a logo, include a design. Any color, any style<br>
    Built-in gussets for added mobility.  Double layers at shoulders and elbows.  Double needle stitching on critical seams
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
            <img src="/img/hockey1.jpg"
                 alt="hockey jersey"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Hockey Jersey
    </div>
    <div class="td">
            <img src="/img/hockey2.jpg"
                 alt="hockey jersey"
                 style="width:150px;height:150px;"
                 class="img-responsive">
            <br>Hockey Jersey
    </div>
    <div class="td">
            <img src="/img/hockey-shell.jpg"
                 alt="hockey shell"
                 style="width:125px;height:150px;"
                 class="img-responsive">
            <br>Hockey Shell/Shorts
    </div>
    <div class="td">
            <img src="/img/hockey-socks.png"
                 alt="hockey socks"
                 style="width:125px;height:150px;"
                 class="img-responsive">
            <br>Hockey Socks
    </div>
</div>
<div span style="font-size: 25px; text-align: center;">
    <br>
    <a href="/contact">Get Started Today</a>
    <br><br>
</div>

