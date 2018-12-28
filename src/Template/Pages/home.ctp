<?php
//$this->extend('/Layout/default');

$this->assign('title', " Home");

//$this->assign('bodystyle', 'style="background-image:url(/img/photorugby1.jpeg)"')
?> 

<center>
    <h1><i>Your One Stop Shop for Uniforms, Team Gear, and Spirit Wear</i></h1>
    <!--
    <img src="/img/cover2.jpg" style="width:1100px;height:500px;"
    alt="L.M.Toerner Custom Sportwear" title="L.M.Toerner Custom Sportwear" class="img-responsive">
    -->
</center>

    <br><br>

    <div id="common-home" class="container">
    <div class="row">
    <div id="content" class="col-sm-12">
    <div class="swiper-viewport">
        <div id="slideshow0" class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(-2324px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide text-center swiper-slide-duplicate" data-swiper-slide-index="7"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/rugby"><img style="width:500px;height:325px;"
                        src="/img/photorugby1.jpeg" alt="Rugby" title="Rugby" class="img-responsive center-block"></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-prev" data-swiper-slide-index="0"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/baseball">
                        <picture>
                            <source srcset="/img/lmtbaseball-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtbaseball-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtbaseball-1024.jpg">
                        <img src="/img/lmtbaseball-1024.jpg" 
                        alt="Baseball" title="Baseball" class="img-responsive center-block">
                        </picture></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-active" data-swiper-slide-index="1"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/basketball">
                        <picture>
                            <source srcset="/img/lmtbasketball-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtbasketball-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtbasketball-1024.jpg">
                        <img src="/img/lmtbasketball-1024.jpg" 
                        alt="Basketball" title="Basketball" class="img-responsive center-block">
                        </picture></a>
                </div>
                <div class="swiper-slide text-center swiper-slide-next" data-swiper-slide-index="2"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/cycling">
                        <picture>
                            <source srcset="/img/lmtcycling-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtcycling-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtcycling-1024.jpg">
                        <img src="/img/lmtcycling-1024.jpg" title="Cycling" alt="Cycling" class="img-responsive center-block">
                    </picture></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="3"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/hockey">
                        <picture>
                            <source srcset="/img/lmthockey-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmthockey-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmthockey-1024.jpg">
                        <img src="/img/lmthockey-1024.jpg" alt="Hockey" title="Hockey" class="img-responsive center-block">
                        </picture></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="4"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/rugby">
                        <picture>
                            <source srcset="/img/lmtrugby-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtrugby-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtrugby-1024.jpg">
                        <img src="/img/lmtrugby-1024.jpg" alt="Rugby" title="Rugby" class="img-responsive center-block">
                        </picture></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="5"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/soccer">
                        <picture>
                            <source srcset="/img/lmtsoccer-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtsoccer-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtsoccer-1024.jpg">
                        <img src="/img/lmtsoccer-1024.jpg" alt="Soccer" title="Soccer" class="img-responsive center-block">
                        </picture></a>
                </div>
                <div class="swiper-slide text-center" data-swiper-slide-index="6"
                     style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/softball">
                        <picture>
                            <source srcset="/img/lmtsoftball-256.jpg" media="(max-width: 400px)">
                            <source srcset="/img/lmtsoftball-512.jpg" media="(max-width: 800px)">
                            <source srcset="/img/lmtsoftball-1024.jpg">
                        <img src="/img/lmtsoftball-1024.jpg" alt="Softball" title="Softball" class="img-responsive center-block"></a>
                </div>
              
                <div class="swiper-slide text-center swiper-slide-duplicate swiper-slide-duplicate-prev"
                     data-swiper-slide-index="0" style="width: 1132px; margin-right: 30px;"><a
                        href="/pages/baseball"><img style="width:1000px;height:500px;"
                        src="/img/lmtbaseball.jpg" alt="Baseball" title="Baseball" class="img-responsive center-block"></a>
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
        <!--
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
    -->
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
        <!--
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
    -->
            </script>
    <script type="text/javascript" src="//counter.websiteout.net/js/36/0/0/0">
    </script> 
    </div></div></div>
    
 
