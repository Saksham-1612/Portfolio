import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("run");
    emailjs
      .send(
        "service_d2pkacj",
        "template_c2ndd1u",
        {
          from_name: form.name,
          to_name: "Saksham",
          from_email: form.email,
          to_email: "saksham16dec@gmail.com",
          message: form.message,
        },
        "4oXOOF1mHNwHpBUgl"
      )
      .then(() => {
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "Message sent sucessfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setIsLoading(false);
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        //show error message
        setCurrentAnimation("idle");
        console.log(error);
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message did not sent correctly",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Jhon"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
          />
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Jhon@example.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
          />
          <label htmlFor="message" className="text-black-500 font-semibold">
            Message
          </label>
          <input
            type="text"
            name="message"
            className="input"
            placeholder="Your message"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlue={handleBlur}
          />
          <button className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? "Sending.." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
