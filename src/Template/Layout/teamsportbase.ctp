    <div class="container">
    <div class="row justify-content-md-center">
        <div class="col col-lg-6 col-auto">
            <strong>
                <ul>
                    <li>220gsm-300gsm polyester fabric or custom fabrics</li>
                    <li>Fast-drying Cool DRI technology for comfort</li>
                    <li>Machine Washable</li>

                    <li>Fully customizable - any design, color, style, pattern, and any size</li>
                    <li>Add logo, name, numbers, etc</li>
                    <li>Prices will vary depending on material, order size and customization</li>
                    <li>Other material also available - please enquire

                </ul>

                <br>
                <p>
                    <a href="/pages/contact" title="Contact us"><i class="fa fa-phone"></i>
                        <span class="hidden-xs hidden-sm hidden-md">Contact us </span></a>
                    for questions or if you are ready to place an order
                </p>
            </strong>

            <br>


            <div class="product-thumb">
                <div class="image">
                    <?= $this->fetch('productImage1') ?>
                   
                </div>
                <div>

                    <div class="caption">
                        <h4><?= $this->fetch('productName1') ?></h4>
                        <p>
                        <ul>
                            <?= $this->fetch('productDetails1') ?>

                        </ul>
                        </p>
                        <p class="price"><?= $this->fetch('productPrice1') ?></p>

                    </div>

                </div>

            </div>
        </div>


        <div class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="product-thumb">
                <div class="image">
                    <?= $this->fetch('productImage2') ?>
                </div>
                <div>

                    <div class="caption">
                        <h4><?= $this->fetch('productName2') ?></h4>
                        <p>
                        <ul>
                            <?= $this->fetch('productDetails2') ?>
                        </ul>
                        </p>
                        <p class="price"><?= $this->fetch('productPrice2') ?></p>

                    </div>
    
                </div>

            </div>

            
            <div class="product-thumb">
                <div class="image">
                    <?= $this->fetch('productImage3') ?>
                </div>
                <div>

                    <div class="caption">
                        <h4><?= $this->fetch('productName3') ?></h4>
                        <p>
                        <ul>

                            <?= $this->fetch('productDetails3') ?>

                        </ul>
                        </p>
                        <p class="price"><?= $this->fetch('productPrice3') ?></p>

                    </div>
 
                </div>

            </div>


        </div>

    </div>


</div>