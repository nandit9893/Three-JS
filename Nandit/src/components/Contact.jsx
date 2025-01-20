import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(form.name === "" || form.email === "" || form.message === "") {
      return;
    } 
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_FIRST_SECURE_KEY, import.meta.env.VITE_SECOND_SECURE_KEY, {
        from_name: form.name,
        to_name: "Nandit Sharma",
        from_email: form.email,
        to_email: "nanditsharma063@gmail.com",
        message: form.message,
      }, import.meta.env.VITE_THIRD_SECURE_KEY
    ).then(() => {
      setLoading(false);
      alert("Thank you, I will get back to you soon");
      setMessageSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
    });
    setMessageSent(false);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea required rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <div className="flex justify-between items-center">
            <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" type="submit">{loading ? "Sending..." : "Send"}</button>
            {messageSent ? <p className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">Thank you I will get you soon!!</p> : null}
          </div>
        </form>
      </motion.div>
      <motion.div className="xl:flex-1  xl:h-auto md:h-[550px] h-[350px]" variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas/>
      </motion.div>
    </div>
  );
};

export default SectionWraper(Contact, "contact");