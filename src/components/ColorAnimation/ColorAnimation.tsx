import { animated, useInView } from "@react-spring/web";


const ColorAnimation = ({
  children,
}: React.PropsWithChildren) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        backgroundColor: '#fff',
      },
      to: {
        backgroundColor: '#EBF0E4',
        delay: 100,
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

export default ColorAnimation;
