import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/manwlodr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setError("");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.log(error);
      setError("There was a problem submitting the form. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-bl from-[var(--background-dark)] to-[var(--background-dark)] text-[var(--text-color)] py-8 px-4"
    >
      <div className="max-w-4xl mx-auto bg-[var(--background-light)] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-500">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-[var(--input-background)] text-[var(--text-color)] rounded-md border border-[var(--border-color)] focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-[var(--input-background)] text-[var(--text-color)] rounded-md border border-[var(--border-color)] focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 bg-[var(--input-background)] text-[var(--text-color)] rounded-md border border-[var(--border-color)] focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 btn-submit"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div id="successMessage" className="text-green-500 mt-4">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}

        {error && (
          <div id="errorMessage" className="text-red-500 mt-4">
            {error}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
