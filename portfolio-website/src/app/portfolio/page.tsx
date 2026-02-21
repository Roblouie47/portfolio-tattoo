
import styles from './Portfolio.module.css';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.div className={styles.container} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
      <motion.section className={styles.hero} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <motion.h1 className={styles.title} initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          Tattoo Portfolio
        </motion.h1>
        <motion.p className={styles.subtitle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}>
          Showcasing the art and skill of a modern tattoo artist
        </motion.p>
      </motion.section>
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About</h2>
        <p>
          Welcome! I am a passionate tattoo artist dedicated to creating unique, meaningful, and beautiful tattoos. My work blends contemporary styles with classic techniques, ensuring every piece is a work of art.
        </p>
      </section>
      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul>
          <li>Black & Grey Realism</li>
          <li>Color Tattoos</li>
          <li>Fine Line</li>
          <li>Custom Designs</li>
          <li>Cover-ups</li>
        </ul>
      </section>
      <section className={styles.gallery}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <div className={styles.galleryGrid}>
          {/* Replace with real images */}
          {[1,2,3,4].map((num, idx) => (
            <motion.div
              className={styles.galleryItem}
              key={num}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <img src={`/tattoos/sample${num}.jpg`} alt={`Tattoo ${num}`} />
            </motion.div>
          ))}
        </div>
      </section>
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <form className={styles.contactForm}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </motion.div>
  );
}
"use client";
