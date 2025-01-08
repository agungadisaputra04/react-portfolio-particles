import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader"; // Pastikan file ini benar

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader headerText="Contact " icon={<BsInfoCircleFill size={20} />} />
    </section>
  );
};

export default Contact;
