"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dot1X = useSpring(cursorX, { stiffness: 500, damping: 30 });
  const dot1Y = useSpring(cursorY, { stiffness: 500, damping: 30 });
  const dot2X = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const dot2Y = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("mousemove", onMove);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (isDesktop) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "";
    }
    return () => {
      document.body.style.cursor = "";
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: dot1X,
          top: dot1Y,
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
          backgroundColor: "#C8A96E",
          opacity: 0.6,
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          left: dot2X,
          top: dot2Y,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
          backgroundColor: "#C8A96E",
          opacity: 0.3,
        }}
      />
    </>
  );
}
