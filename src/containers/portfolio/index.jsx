import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeader
        headerText="portfolio "
        icon={<BsInfoCircleFill size={20} />}
      />
    </section>
  );
};

export default Portfolio;
