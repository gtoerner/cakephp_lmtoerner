<?php
//$this->extend('/Layout/default');

$this->assign('title', " Home");


?> 

<h1>L.M.Toerner is the </h1>

    <br><br>

    <div id="common-home" class="container">
    <div class="row">
    <div id="content" class="col-sm-12">
    <div class="swiper-viewport">
        <div id="slideshow0" class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(-2324px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide text-center swiper-slide-duplicate" data-swiper-slide-index="7"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'rugby' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photorugby1.jpeg' %}" alt="Rugby" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-prev" data-swiper-slide-index="0"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'baseball' %}"><img
                        src="{% static 'image/catalog/photobaseball.jpeg' %}" style="width:500px;height:325px;"
                        alt="Baseball" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-active" data-swiper-slide-index="1"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'basketball' %}"><img
                        src="{% static 'image/catalog/photobasketball.jpeg' %}" style="width:500px;height:325px;"
                        alt="Basketball" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-next" data-swiper-slide-index="2"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'cycling' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photocycling.jpeg' %}" alt="Cycling" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="3"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'hockey' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photohockey.jpeg' %}" alt="Hockey" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="4"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'rugby' %}"><img
                        src="{% static 'image/catalog/photorugby1.jpeg' %}" style="width:500px;height:325px;"
                        alt="Rugby" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="5"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'soccer' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photosoccer.jpeg' %}" alt="Soccer" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="6"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'softball' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photosoftball.jpeg' %}" alt="Softball" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="7"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'rugby' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photorugby2.jpeg' %}" alt="Rugby" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-prev"
                     data-swiper-slide-index="0" style="width: 1132px; margin-right: 30px;"><a
                        href="{% url 'baseball' %}"><img style="width:500px;height:325px;"
                        src="{% static 'image/catalog/photobaseball.jpeg' %}" alt="Baseball" class="img-responsive center-block"></a>
                </div>
            </div>
        </div>
        <div class="swiper-pagination slideshow0 swiper-pagination-clickable swiper-pagination-bullets"><span
                class="swiper-pagination-bullet"></span><span
                class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span
                class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span
                class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span
                class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
        <div class="swiper-pager">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
    <script type="text/javascript">
    $('#slideshow0').swiper({
        mode: 'horizontal',
        slidesPerView: 1,
        pagination: '.slideshow0',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 2500,
        autoplayDisableOnInteraction: true,
        loop: true
    });
    </script>

    <div class="swiper-viewport">
        <div id="carousel0" class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper"></div>
        </div>
        <div class="swiper-pagination carousel0 swiper-pagination-clickable swiper-pagination-bullets"></div>
        <div class="swiper-pager">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
    <script type="text/javascript">
    $('#carousel0').swiper({
        mode: 'horizontal',
        slidesPerView: 5,
        pagination: '.carousel0',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 2500,
        loop: true
    });
    </script>
    </div></div></div>