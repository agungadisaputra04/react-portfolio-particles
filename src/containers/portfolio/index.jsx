import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import port1 from "../../assets/port1.png";
import port from "../../assets/port.png";
import port2 from "../../assets/port2.png";
import "./style.scss";

const portdata = [
  {
    id: 1,
    name: "Ecommerce NIKE",
    image: port1,
    link: "",
  },
  {
    id: 2,
    name: "BENTO COFFE",
    image: port,
    link: "",
  },
  {
    id: 3,
    name: "HEALTY LIFE",
    image: port2,
    link: "",
  },
  {
    id: 2,
    name: "Ecommerce",
    image: port1,
    link: "",
  },
];

const file = [
  {
    id: 4,
    name: "REPORTING",
    image: port1,
    link: "",
    desc: "",
  },
];

const filterData = [
  {
    filterid: 1,
    label: "All",
  },
  {
    filterid: 2,
    label: "Development",
  },
  {
    filterid: 3,
    label: "Design",
  },
  {
    filterid: 4,
    label: "SCRIPTING",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoverValue, setHandleValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHandleValue(index);
  }

  console.log("=========");
  console.log(hoverValue);
  console.log("=========");

  // Perubahan hanya di bagian ini
  const filterItem =
    filteredvalue === 1
      ? portdata // Tampilkan semua data
      : filteredvalue === 4 // Jika filter "SCRIPTING"
      ? [...portdata, ...file] // Gabungkan portdata dengan file
      : portdata.filter((item) => item.id === filteredvalue);

  console.log(filterItem);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="portfolio "
        icon={<BsInfoCircleFill size={20} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterid === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterid)}
              key={item.filterid}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterItem.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>

              <div className="overplay">
                {index === hoverValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Demo</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__content__cards">
          {filterItem.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>

              <div className="overplay">
                {index === hoverValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Demo</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
