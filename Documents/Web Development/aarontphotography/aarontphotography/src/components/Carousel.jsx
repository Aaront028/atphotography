import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./img/beach.jpg" alt="beach"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/hawaii.jpg" alt="hawaii"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/kyoto.jpg" alt="kyoto"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/osaka.jpg" alt="osaka"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/dorset.jpg" alt="dorset"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./img/brussels.jpg" alt="brussels"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
}

export default Carousel;