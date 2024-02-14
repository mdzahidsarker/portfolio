// software JS
const software = [
  {
    name: "SolidWork",
    img: "./assets//skill/sw.png",
  },
  {
    name: "Ansys",
    img: "./assets//skill/ansys.png",
  },
  {
    name: "MATLAB",
    img: "./assets//skill/matlab.png",
  },
  {
    name: "Adobe Illustrator",
    img: "./assets//skill/ai.png",
  },
  {
    name: "Adobe PhotoShop",
    img: "./assets//skill/ps.png",
  },
];

const softwareHTML = software
  .map((item) => {
    return `
    <div class="skills_data">
        <div class="skills_titles">
            <span class="single_skill_icon external-logo">
                <img src="${item.img}" alt="${item.name}">
            </span>
            <h3 class="skills_name">${item.name}</h3>
        </div>
        <div class="skills_bar"></div>
    </div>
    `
  })
  .join();

document.getElementById("software").innerHTML = softwareHTML;

// language Js
const language = [
  {
    name: "HTML",
    icon: "fab fa-html5",
  },
  {
    name: "CSS",
    icon: "fab fa-css3",
  },
  {
    name: "Java Script",
    icon: "fab fa-js-square",
  },
  {
    name: "C++",
    icon: "fab fa-cuttlefish",
  },
  {
    name: "Python",
    icon: "fab fa-python",
  },
];

const languageHTML = language
  .map((item) => {
    return `
        <div class="skills_data">
            <div class="skills_titles">
                <span class="single_skill_icon">
                  <i class="${item.icon}"></i>
                </span>
                <h3 class="skills_name">${item.name}</h3>
            </div>
            <div class="skills_bar"></div>
        </div>
    `
  })
  .join();

document.getElementById("language").innerHTML = languageHTML;
