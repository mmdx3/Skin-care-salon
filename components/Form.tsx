import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Full Name" className="input" />
      <input type="text" placeholder="Email address" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <textarea className="textarea mb-2 " placeholder="Your message" />
      <button type="submit" className="btn self-start">Send message</button>
    </form>
  );
};

export default Form;
