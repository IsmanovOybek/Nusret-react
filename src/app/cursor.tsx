import React, { ReactNode, useEffect, useRef } from "react";

type CursorFollowerProps = {
  children: ReactNode;
};

const CursorFollower: React.FC<CursorFollowerProps> = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // silliqlik (0.1 = sekinroq, 0.2 = tezroq)
      const lerp = 0.2;
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * lerp;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {children}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "rgb(64, 145, 199)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default CursorFollower;
