const tours= [
    {
        name: "",
        description: "",
        link: "",
        img: "./assets/tour",
        g_map: "",
    },
];

const toursHTML = tours.map((item) => {
    return`
    <div class="portfolio_content grid swiper-slide">
    <img src=".${item.img}" alt="${item.name}" class="portfolio_img">

    <div class="portfolio_data">
      <h3 class="portfolio_title">
        ${item.name}
      </h3>
      <p class="portfolio_description">
        ${item.description}
      </p>
      <a href="${item.link}" class="button button-flex button-small portfolio_button"
        target="_blank">
        G. Map
        <i class="fas fa-location-arrow"></i>
      </a>
      <a href="${item.link}" class="button button-flex button-small portfolio_button"
        target="_blank">
        Read
        <i class="	fas fa-angle-right button_icon"></i>
      </a>
    </div>
  </div>
    `;
}).join();

document.getElementById("tour").innerHTML = toursHTML;