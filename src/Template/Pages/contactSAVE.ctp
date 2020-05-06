<?php

//$this->extend('/Layout/default');

$this->assign('title', " Contact");


?>


<div id="information-contact" class="container">

    <div class="row">
        <div id="content" class="col-sm-12">
<br>
<!--            <form method="post" accept-charset="utf-8" action="/contact" class="form-horizontal">
                <input type="hidden" name="_csrfToken" autocomplete="off" value="b32ab730f41ba75ae043e79ded5d6621c1a7d120d7ddbdf2e891a106450cec40f02c02ddcd12441923205ac6b316a455d56ea2e24a961089e263433a22e168ac"> -->
            <?php
                echo $this->Form->create($contact);
?>
                <fieldset>
                    <legend>Contact Us</legend>
                    <p>
                        Please provide us with your contact information and we will be in touch shortly to discuss your needs
                    </p>
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
