import { animated, useInView, useSpring } from "@react-spring/web";
import { useEffect, useRef } from "react";


const AppearAnimation = ({
  children,
}: React.PropsWithChildren) => {

  const [ref, inView] = useInView({
    rootMargin: "0% 0%",

  });

  const directionRef = useRef("down");

  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
  }));

  useEffect(() => {
    if (inView && directionRef.current === "down") {
      api.start({
        opacity: 1,
        transform: "translateY(0px)",
        config: {
            duration: 800,
          },
      }, );
      directionRef.current = "up";
    } else if (!inView && directionRef.current === "up") {
      api.start({
        opacity: 0,
        transform: "translateY(100px)",
        config: {
            duration: 0,
          },
      });
      directionRef.current = "down";
    }
  }, [inView, api]);

  return (
    <animated.div ref={ref} style={styles}>
      {children}
    </animated.div>
  );
};

export default AppearAnimation;
