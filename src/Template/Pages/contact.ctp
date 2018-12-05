<?php

//$this->extend('/Layout/default');

$this->assign('title', " Contact");


?>



<h1>Contact</h1>

<div id="information-contact" class="container">
    <ul class="breadcrumb">
        <li><a href="{% url 'index' %}"><i class="fa fa-home"></i></a></li>
        <li><a href="{% url 'contact' %}">Contact Us</a></li>
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
<?php
echo $this->Form->create($contact, ['type' => 'email']);
echo $this->Form->control('name');
echo $this->Form->control('email');
echo $this->Form->control('phone');
echo $this->Form->control('body');
echo $this->Form->button('Submit');
echo $this->Form->end();
?>
        </div>
    </div>