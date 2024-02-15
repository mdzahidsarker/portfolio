const projects= [
    {
        name: "FKDC Season-7",
        description: "FKDC Season-7 in India was exhilarating! 🏁Grateful for the experience and ready for more adventures! 🚗💨",
        link: "https://www.facebook.com/photo?fbid=933846161602424&set=pcb.933847141602326",
        img: "../../assets/project/fkdcs7.jpg",
    },
    {
        name: "Career Catalyst 1.0",
        description: "Excited for RCF's Career Catalyst event on BCS and life! Ready for insights and connections. ",
        link: "https://www.facebook.com/photo.php?fbid=370450488827315&set=pb.100075871003870.-2207520000&type=3",
        img: "../../assets/project/career catalyst1.0.jpg",
    },
    {
        name: "8<sup>th</sup> RCF Career Fair",
        description: "Looking forward to RCF's 8<sup>th</sup> Career Fair—a platform for growth and opportunities!",
        link: "https://www.ruetcareerforum.org/8th_RCF_CareerFair/",
        img: "../../assets/project/8thcareer fair.jpg",
    },
    {
        name: "1<sup>st</sup> Reunion of MEAAR",
        description: "The 1<sup>st</sup> reunion program of Dept. of Mechanical Engineering, RUET.",
        link: "https://facebook.com/photo/?fbid=3155969581292134&set=pcb.3155970681292024",
        img: "../../assets/project/1stMEAAR.jpg",
    },
    {
        name: "ICMIM-2022",
        description: "The 5<sup>th</sup> International Conference on Mechanical Industrial and Materials Engineering, 2022",
        link: "https://icmime-ruet.ac.bd/index.html",
        img: "../../assets/project/icmime-2022.jpg",
    },
    {
        name: "7<sup>th</sup> RCF Career Fair",
        description: "Looking forward to RCF's 7<sup>th</sup> Career Fair—a platform for growth and opportunities!",
        link: "https://www.ruetcareerforum.org/careerfair/",
        img: "../../assets/project/7thrcfcareerfair.jpg",
    },
];

const projectsHTML = projects.map((item) => {
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
        Check out
        <i class="uil uil-arrow-right button_icon"></i>
      </a>
    </div>
  </div>
    `;
}).join();

document.getElementById("project_event").innerHTML = projectsHTML;