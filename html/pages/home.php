<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <div class="home-page">
        <div class="header">
            <div class="col-9 right-img">
                    <?php include "html/slider/header.html" ?>
                <div class="header-info">
                    <h2>New Collection</h2>
                    <p>Who Make Your House Into Home !</p>
                    <a href="#">Shop Now</a>
                </div>
            </div>
            <div class="col-3 left-img img-hover">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src="img/lisa.jpg"alt="">
                </div>
            </div>
        </div>
        <div class="services">
            <div class="col-3 services-item-one">
                <div class="services-item" >
                    <a href="#">
                        <img src="img/icon/Delivary.png">
                        <div class="info">
                            <h3>Free Delivary</h3>
                            <p>Orders Over $100</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-3 services-item-two">
                <div class="services-item">
                    <a href="#">
                        <img src="img/icon/mony.png">
                        <div class="info">
                            <h3>Money Back Guarantee</h3>
                            <p>With A 30 Day</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-3 services-item-three">
                <div class="services-item ">
                    <a href="#">
                        <img src="img/icon/Support.png">
                        <div class="info">
                            <h3>Best Online Support</h3>
                            <p>Hours: 8AM -11PM</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-3 services-item-four">
                <div class="services-item ">
                    <a href="#">
                        <img src="img/icon/message.png">
                        <div class="info">
                            <h3>East & Free Returns</h3>
                            <p>Hours: 8AM -11PM</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="new-products ">
            <div class="col-4 new-products-item">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src ="img/products11.jpg" alt="" />
                </div>
                </div>
            <div class="col-4 new-products-item">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src ="img/products12.jpg" alt="" />
                </div>
            </div>
            <div class="col-4 new-products-item">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src ="img/products13.jpg" alt="" />
                </div>
            </div>
        </div>
        <div class="top-categories">
            <div class="section-name">
                <h2 class="top-categories-title">Top Categories</h2>
            </div>
            <?php include "html/slider/title.html"?>
        </div>
        <div class="new-products-two">
            <div class="col-6 new-products-two-item first">
                <div class="img-hover">
                    <div class="layer"></div>
                        <img src ="img/products21.jpg" alt="" />
                    <div class="item-info">
                        <h2><span>Mix & Match</span>Your Style</h2>
                        <a href="#">shop Now</a>
                    </div>
                </div>
            </div>
            <div class="col-6 new-products-two-item second">
                <div class="img-hover">
                        <div class="layer"></div>
                        <img src ="img/products22.jpg" alt="" />
                    <div class="item-info item-two">
                        <h2><span>Stylish</span> In Living Space</h2>
                        <a href="#">shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-products">
            <div class="section-name">
                <h2 class="top-categories-title">Top Of Week</h2>
            </div>
            <?php include "html/slider/product.html" ?>
        </div>  <!-- end our-products -->
        <div class="classic">
            <div class="col-4 classic-item">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src="img/classic1.jpg" alt=""/>
                </div>
            </div>
            <div class="col-4 classic-item">
                <div class="top-img">
                    <div class="img-hover">
                        <div class="layer"></div>
                        <img src="img/classic2.jpg" alt=""/>
                    </div>
                </div>
                <div class="bottom-img">
                    <div class="img-hover">
                    <div class="layer"></div>
                    <img src="img/classic3.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div class="col-4 classic-item">
                <div class="img-hover">
                    <div class="layer"></div>
                    <img src="img/classic4.jpg" alt=""/>
                </div>
            </div>
        </div><!--end classic div -->
        <div class="recent-news">
            <div class="section-name">
                <h2 class="top-categories-title">Recent News</h2>
            </div>
            <?php include "html/slider/news.html" ?>
        </div>  <!-- end our-products -->
        <div class="our-brands">
            <div class="section-name">
                <h2 class="top-categories-title">Our Brands</h2>
            </div>
            <?php include "html/slider/logo.html" ?>
        </div>
    </div><!-- end home page -->
    </body>
</html>