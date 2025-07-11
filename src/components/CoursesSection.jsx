import React, { useState, useContext, useEffect, useRef } from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaCss3Alt,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import styles from "./CoursesSection.module.css";
import { ThemeContext } from "../assets/store/Themecontext";
import { gsap } from "gsap";

const allCourses = [
  { name: "Scratch", color: "#6366F1", icon: <FaLaptopCode /> },
  { name: "Coding 101", color: "#60A5FA", icon: <FaCode /> },
  { name: "AI for Kids", color: "#F97316", icon: <FaRobot /> },
  { name: "Basic CSS", color: "#22C55E", icon: <FaCss3Alt /> },
  { name: "Web Security", color: "#6B7280", icon: <FaShieldAlt /> },
  { name: "Science", color: "#A78BFA", icon: <FaRobot /> },
  { name: "Python", color: "#F87171", icon: <FaCode /> },
  { name: "React Basics", color: "#38BDF8", icon: <FaLaptopCode /> },
  { name: "Node.js", color: "#34D399", icon: <FaCode /> },
  { name: "Cyber Safety", color: "#A855F7", icon: <FaShieldAlt /> },
  { name: "Math Genius", color: "#FBBF24", icon: <FaRobot /> },
  { name: "Ethical Hacking", color: "#9CA3AF", icon: <FaShieldAlt /> },
];

const CoursesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const coursesPerPage = 6;
  const { darkMode } = useContext(ThemeContext);

  // Refs for cards to animate
  const cardsRef = useRef([]);

  const nextCourses = () => {
    const next = startIndex + coursesPerPage;
    if (next < allCourses.length) setStartIndex(next);
  };

  const prevCourses = () => {
    const prev = startIndex - coursesPerPage;
    if (prev >= 0) setStartIndex(prev);
  };

  const visibleCourses = allCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  // Animate cards whenever visibleCourses changes
  useEffect(() => {
    // Clear previous refs
    cardsRef.current = cardsRef.current.slice(0, visibleCourses.length);

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [visibleCourses]);

  return (
    <div
      className={`${styles.coursesWrapper} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <div className={styles.coursesHeader}>
        <h5>Your Saved Courses</h5>
        <div className={styles.navButtons}>
          <button
            onClick={prevCourses}
            disabled={startIndex === 0}
            aria-label="Previous Courses"
          >
            <BiChevronLeft size={28} />
          </button>
          <button
            onClick={nextCourses}
            disabled={startIndex + coursesPerPage >= allCourses.length}
            aria-label="Next Courses"
          >
            <BiChevronRight size={28} />
          </button>
        </div>
      </div>

      <Row>
        {visibleCourses.map((course, idx) => (
          <Col
            key={idx}
            md={6}
            lg={4}
            className="mb-3"
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <Card
              style={{ backgroundColor: course.color }}
              className={`text-white shadow-sm ${styles.courseCard}`}
            >
              <Card.Body className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className={styles.courseIcon}>{course.icon}</div>
                  <div>
                    <div className={styles.courseLabel}>Continue Learning</div>
                    <h6 className="mb-0">{course.name}</h6>
                  </div>
                </div>
                <FaArrowRight />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoursesSection;
