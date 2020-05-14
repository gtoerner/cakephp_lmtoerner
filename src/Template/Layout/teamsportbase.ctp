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

    .myflex-table {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .mycenter {
        text-align: center;
    }

    /* Rows & cells */
    div.mytd {
        box-sizing: border-box;
        width: 75%;
        padding: 10px;

    }

    div.myth {
        box-sizing: border-box;
        width: 25%;
        padding: 10px;
    }
</style>

<div class="myflex-table">
    <div class="myth">

        <nav id="sidebar">
            <div class="sidebar-header">
                <h4 span style="text-align: center">TeamSports</h4>
            </div>

            <ul class="list-unstyled components" span style="text-align: center; font-size: small">
                <li class="nav-item">
                    <a class="dropdown-item-text" href="/pages/teamsports/baseball">Baseball</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/basketball">Basketball</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/cycling">Cycling</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/football">Football</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/hockey">Hockey</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/rugby">Rugby</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/soccer">Soccer</a>
                </li>
                <li>
                    <a class="dropdown-item-text" href="/pages/teamsports/softball">Softball</a>
                </li>
                <li><br></li>
            </ul>
        </nav>

        <div span style="font-size: medium">
            <br>
            Don't see your sport listed?  We can accomodate most needs.  <a href="/contact">Contact </a> us to inquire
        </div>
    </div>
    <div class="mytd">
        <?= $this->fetch('content') ?>
    </div>

</div>
