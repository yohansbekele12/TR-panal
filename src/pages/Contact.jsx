import React from "react";
import ContactInf from "../Components/ContactInf";
import Form from "../Components/Form";

function Contact() {
  return (
    <div
      id="contact"
      className="contact-section ui scroll-mt-16 min-h-screen flec item-center justify-center"
    >
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl ui   rounded-md text-[#333] font-[sans-serif]">
        <ContactInf />
        <Form />
      </div>
    </div>
  );
}

export default Contact;
