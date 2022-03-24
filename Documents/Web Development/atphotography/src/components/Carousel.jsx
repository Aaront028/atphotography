import React from "react";

function Carousel() {
    return (
        <div id="carousel-travel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/beach.jpg" alt="beach"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/hawaii.jpg" alt="hawaii"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/kyoto.jpg" alt="kyoto"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/osaka.jpg" alt="osaka"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/dorset.jpg" alt="dorset"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/brussels.jpg" alt="brussels"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel-travel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-travel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
}

export default Carousel;