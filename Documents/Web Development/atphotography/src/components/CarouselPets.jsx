import React from "react";

function CarouselPets() {
    return (
        <div id="carousel-pets" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/simba2.jpg" alt="simba2"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/simba.jpg" alt="simba"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/dog.jpg" alt="dog"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="imagesg/deer.jpg" alt="deer"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/cat.jpg" alt="cat"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/bruno.jpg" alt="bruno"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/bruno2.jpg" alt="bruno"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/mac.jpg" alt="mac"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="images/mac2.jpg" alt="mac"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel-pets" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-pets" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    );
}

export default CarouselPets;