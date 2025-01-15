import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { websiteData, scriptingData, filterOptions } from "./data.js";
import "./style.scss";

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1); // Default to website data
  const [hoverValue, setHoverValue] = useState(null); // Track hover index

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoverValue(index);
  }

  // Determine which data to filter
  const filterItem =
    filteredvalue === 1
      ? websiteData // Show website data
      : filteredvalue === 2 // If filter "SCRIPTING"
      ? scriptingData // Show only scripting data
      : [];

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={20} />}
      />

      <div className="portfolio__content">
        {/* Filter options */}
        <ul className="portfolio__content__filter">
          {filterOptions.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Display the filtered portfolio cards */}
        <div className="portfolio__content__cards">
          {filterItem.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                {/* Conditionally render image or file based on the data */}
                {filteredvalue === 1 ? (
                  <a>
                    <img src={item.image} alt={item.name} />
                  </a>
                ) : (
                  <a href={item.file} target="_blank" rel="noopener noreferrer">
                    <button>Download {item.name}</button>
                  </a>
                )}
              </div>

              {/* Overlay for hover */}
              <div className="overplay">
                {index === hoverValue && (
                  <div>
                    <p>{item.name}</p>
                    {filteredvalue === 1 && (
                      <button
                        onClick={() => {
                          if (item.link) {
                            window.open(item.link, "_blank");
                          } else {
                            alert("Link tidak tersedia");
                          }
                        }}
                      >
                        Demo
                      </button>
                    )}
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
