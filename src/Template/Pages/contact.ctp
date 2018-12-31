<?php

//$this->extend('/Layout/default');

$this->assign('title', " Contact");


?>



<h1>Contact</h1>

<div id="information-contact" class="container">
    <ul class="breadcrumb">
        <li><a href="/"><i class="fa fa-home"></i></a></li>
        <li><a href="/contact">Contact Us</a></li>
    </ul>
    <div class="row">
        <div id="content" class="col-sm-12">
            <h1>Contact Information</h1>
            <h3>Our Location</h3>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-3"><img src="/img/lmtoerner-268x50.jpg"
                                                   alt="L.M.Toerner, LLC" title="L.M.Toerner, LLC"
                                                   class="img-thumbnail"></div>
                        <div class="col-sm-3"><strong>L.M.Toerner, LLC</strong><br>
                            <address>
                                337 Wisconsin Ave<br>
                                Oak Park, IL 60302
                            </address>
                            <a href="https://maps.google.com/maps?q=United%20States&amp;hl=en-gb&amp;t=m&amp;z=15"
                               target="_blank" class="btn btn-info"><i class="fa fa-map-marker"></i> View Google Map</a>
                        </div>
                        <div class="col-sm-3"><strong>Telephone</strong><br>
                            708-829-0631<br>
                            <br>
                        </div>
                        <div class="col-sm-3">
                        </div>
                    </div>
                </div>
            </div>

<!--            <form method="post" accept-charset="utf-8" action="/contact" class="form-horizontal">
                <input type="hidden" name="_csrfToken" autocomplete="off" value="b32ab730f41ba75ae043e79ded5d6621c1a7d120d7ddbdf2e891a106450cec40f02c02ddcd12441923205ac6b316a455d56ea2e24a961089e263433a22e168ac"> -->
            <?php
                echo $this->Form->create($contact);
?>
                <fieldset>
                    <legend>Contact Us</legend>
                    <div class="form-group required">
  <!-- setting control-label class makes it have red astrisk next to the label
                        <label class="col-sm-1 control-label" for="name">Name:</label> -->
                        <label class="col-sm-1" for="name">Name:</label>
                        <div class="col-sm-10">
                            <input type="text" name="name" required="required" id="name" class="form-control">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-group required">
                        <label class="col-sm-1" for="email">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" name="email" required="required" id="email" class="form-control">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-group required">
                        <label class="col-sm-1" for="phone">Phone:</label>
                        <div class="col-sm-10">
                            <input type="tel" name="phone" required="required" id="phone" class="form-control">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="form-group required">
                        <label class="col-sm-1" for="body">Message:</label>
                        <div class="col-sm-10">
                            <textarea name="body" required="required" id="body" rows="10" class="form-control"></textarea>
                        </div>
                    </div>
                </fieldset>
                <div class="buttons">
                    <!-- <div class="pull-right">   -->
                    <label class="col-sm-1 control-label"></label>
                    <div class="col-sm-10">  
                        <input class="btn btn-primary" type="submit" value="Submit">
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
