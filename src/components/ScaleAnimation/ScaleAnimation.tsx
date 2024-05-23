import { animated, useInView } from "@react-spring/web";

type ScaleAnimationProps = {
  delay: number;
};

const ScaleAnimation = ({
    delay,
  children,
}: React.PropsWithChildren<ScaleAnimationProps>) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        scale: 0,
      },
      to: {
        scale: 1,
        delay: delay,
      }, 
      config: {
        duration: 900,
      },
    }),
    {
      rootMargin: '0% 0%',
    }, 
  );

  return (
    <animated.div ref={ref} style={springs}>
      {children}
    </animated.div>
  );
};

export default ScaleAnimation;
