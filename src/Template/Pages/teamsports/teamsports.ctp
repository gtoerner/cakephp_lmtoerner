<?php
//$this->extend('/Layout/teamsportbase');

$this->assign('title', "Polo Shirts");


?>

<style>
    table {
        border-collapse: collapse;
    }
    th {
        text-align: center;
        border-collapse: collapse;
        background: lightgray; }
    td {
        border-collapse: collapse;
        text-align: center;
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
<h1>Team Sports</h1>
</div>
<br/>
<div>
    Geragear can suit up your team with top quality custom uniforms.  All our gear is made with 100% Polyester Dri-Fit Wicking technology<br>
    Fully custom - any color, design, style, or pattern.  Add logos, name, numbers, etc.  All Material is machine washable<br><br>
    Geragear can accomodoate most sports: Basketball, Baseball, Cycling, Football, Hockey, Rugby, Soccer, Softball, Volleyball<br>
    Don't see your sport listed: <a href="/contact">contact </a>us to inquire.
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
            <a class="dropdown-item-text" href="/pages/teamsports/baseball">
                <img src="/img/material_baseballbat.png"
                     alt="baseball image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Baseball
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/basketball">
                <img src="/img/material_Basketball.png"
                     alt="Basketball image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Basketball
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/cycling">
                <img src="/img/material_Bike.png"
                     alt="Bike image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Cycling
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/football">
                <img src="/img/material_FootballHelmet.png"
                     alt="Football image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Football
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/hockey">
                <img src="/img/material_HockeyStick.png"
                     alt="Hockey image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Hockey
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/rugby">
                <img src="/img/material_Football.png"
                     alt="Rugby image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Rugby
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/soccer">
                <img src="/img/material_Soccerball.png"
                     alt="Soccer image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Soccer
            </a>
    </div>
    <div class="td">
            <a class="dropdown-item-text" href="/pages/teamsports/softball">
                <img src="/img/material_Baseball.png"
                     alt="softball image"
                     style="width:50px;height:50px;"
                     class="img-responsive"><br>
                Softball
            </a>
    </div>
 <div>
