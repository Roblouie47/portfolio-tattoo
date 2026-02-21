
"use client";
// ...existing code...
import { useRef, useEffect, useState } from 'react';
import styles from './Portfolio.module.css';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState("");
  // Portfolio images array (add your image paths here)
  const portfolioImages = [
    "/upload/tattoo1.png",
    "/upload/tattoo2.png",
    "/upload/tattoo3.png",
    "/upload/tattoo4.png",
    "/upload/tattoo5.png",
    "/upload/tattoo6.png",
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onWheel = (e: WheelEvent) => {
      const maxScroll = section.scrollWidth - section.clientWidth;
      // If scrolling right and not at end, lock vertical scroll and scroll horizontally
      if (e.deltaY > 0 && section.scrollLeft < maxScroll) {
        section.scrollLeft += e.deltaY;
        section.style.overflowY = "hidden";
        e.preventDefault();
      // If scrolling left and not at start, lock vertical scroll and scroll horizontally
      } else if (e.deltaY < 0 && section.scrollLeft > 0) {
        section.scrollLeft += e.deltaY;
        section.style.overflowY = "hidden";
        e.preventDefault();
      } else {
        // At start or end, unlock vertical scroll
        section.style.overflowY = "auto";
      }
    };
    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="bg-white scroll-smooth h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-4 md:px-0 max-w-6xl mx-auto snap-start">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow">
            Express Yourself<br />
            <span className="text-primary">Through Ink</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Discover unique tattoo designs, book your next session, and explore our artist’s portfolio.
          </p>
          <a
            href="#booking"
            className="inline-block bg-white text-indigo-600 border-black px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition"
          >
            Book Now
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/tattoos/hero-tattoo.png"
            alt="Tattoo Hero"
            className="w-full max-w-md rounded-3xl shadow-lg"
            draggable="false"
          />
        </div>
      </section>
      {/* Portfolio Section */}
      <section
        id="portfolio"
        ref={sectionRef}
        className={`min-h-screen ${styles.portfolioSection} snap-start`}
      >
        <div className={styles.portfolioContainer}>
          {portfolioImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Tattoo ${idx + 1}`}
                className="w-screen h-screen object-cover"
                draggable="false"
              />
          ))}
        </div>
      </section>
      {/* About Me Section */}
      <section id="about" className="min-h-screen py-16 bg-gray-50 snap-start">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I’m <span className="font-semibold">Rob Louie Nicolas</span>, a passionate tattoo artist with years of experience turning ideas into art. My mission is to help you express your story through unique, custom tattoos.
            </p>
            <div className="flex flex-col gap-2 text-gray-700">
              <span><strong>Contact:</strong> 0929-792-9245</span>
              <span><strong>Email:</strong> roblouie47@email.com</span>
              <span className="flex items-center gap-2">
                <strong>Social:</strong>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
                  <img src="/upload/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
                  <img src="/upload/instagram-icon.png" alt="Instagram" className="w-8 h-8" />
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-12">
            <img
              src="/tattoos/about-me.png"
              alt="About Me"
              className="w-full max-w-xs rounded-2xl shadow-lg"
              draggable="false"
              width={320}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* Two Feature Boxes */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 my-24 max-w-6xl mx-auto">
        <div className="flex-1 min-w-[320px] h-105 bg-gray-100 rounded-3xl shadow-lg" /> {/* h-105 for 420px if configured in Tailwind */}
        <div className="flex-1 min-w-[320px] h-105 bg-gray-100 rounded-3xl shadow-lg" /> {/* h-105 for 420px if configured in Tailwind */}
      </div>
      {/* Booking Section */}
      <section id="booking" className="min-h-screen py-16 bg-black snap-start">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-indigo-600">Book Now</h2>
            <p className="text-lg text-gray-400 mb-6">
              Ready to get your next tattoo? Fill out the form below to book your session!
            </p>
            <form
              className="flex flex-col gap-4 mt-8"
              onSubmit={async (e) => {
                e.preventDefault();
                if (submitted) {
                  setToast("You have already submitted the form.");
                  setTimeout(() => setToast(""), 3000);
                  return;
                }
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  idea: formData.get("idea"),
                };
                const res = await fetch("/api/book", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (res.ok) {
                  setSubmitted(true);
                  setToast("Booking submitted successfully!");
                  setTimeout(() => setToast(""), 3000);
                  form.reset();
                } else {
                  setToast("Submission failed. Try again later.");
                  setTimeout(() => setToast(""), 3000);
                }
              }}
            >
              <input name="name" type="text" placeholder="Name" className="bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" required />
              <input name="email" type="email" placeholder="Email" className="bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" required />
              <input name="phone" type="text" placeholder="Phone" className="bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" required />
              <textarea name="idea" placeholder="Tattoo Idea / Placement" className="bg-white px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" rows={4} required />
              <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-primary-dark transition cursor-pointer">Submit</button>
            </form>
            {toast && (
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded shadow-lg z-50 text-lg animate-fade-in">
                {toast}
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center items-center">
          </div>
        </div>
      </section>
    </div>
  );
}

// ...existing code...
