import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProjectLinks = ({ liveUrl, repositoryUrl }) => (
  <div className="flex flex-wrap gap-3 mt-5">
    <a className="rounded-lg bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-blue-100" href={liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>
    <a className="rounded-lg border border-white-50 px-4 py-2 font-semibold text-white transition-colors hover:bg-black-100" href={repositoryUrl} target="_blank" rel="noreferrer">View code ↗</a>
  </div>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const ticketRef = useRef(null);
  const productRef = useRef(null);

  useGSAP(() => {
    [ticketRef.current, productRef.current].forEach((card, index) => {
      gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: index * 0.15, scrollTrigger: { trigger: card, start: "top bottom-=100" } });
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <p className="text-blue-50 uppercase tracking-[0.2em] text-sm mb-3">Featured work</p>
        <div className="showcaselayout">
          <article ref={ticketRef} className="first-project-wrapper">
            <div className="image-wrapper"><img src="/images/projects/ticket-support-system.jpeg" alt="Customer Support Ticketing CRM dashboard" decoding="async" fetchPriority="high" /></div>
            <div className="text-content">
              <h2>Customer Support Ticketing CRM</h2>
              <p className="text-white-50 md:text-xl">A full-stack ticketing platform for creating, searching, filtering, updating, and tracking customer support issues.</p>
              <p className="text-blue-50">Python · FastAPI · SQLAlchemy · PostgreSQL · JavaScript · HTML/CSS</p>
              <ProjectLinks liveUrl="https://ticket-system-gh7m.onrender.com/" repositoryUrl="https://github.com/Talib3102/Ticket_System" />
            </div>
          </article>

          <div className="project-list-wrapper overflow-hidden">
            <article className="project" ref={productRef}>
              <div className="image-wrapper bg-[#FFEFDB]"><img src="/images/projects/product-management-system.jpeg" alt="Product Management System product list" loading="lazy" decoding="async" /></div>
              <h2>Product Management System</h2>
              <p className="mt-3 text-white-50">A Java and Spring Boot application for managing products, categories, inventory, validation, and CRUD workflows.</p>
              <p className="mt-3 text-blue-50">Java · Spring Boot · Spring Data JPA · MySQL · Thymeleaf</p>
              <ProjectLinks liveUrl="https://productmanagementsystem-kzle.onrender.com/" repositoryUrl="https://github.com/Talib3102/productManagementSystem" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
