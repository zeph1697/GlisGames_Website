export const fadeIn = (direction: string, delay: number, expand?: number) => {
  return {
    hidden: {
      y:
        direction === "up"
          ? expand
            ? expand
            : 80
          : direction === "down"
          ? -(expand ? expand : 80)
          : 0,
      opacity: 0,
      x:
        direction === "left"
          ? expand
            ? expand
            : 80
          : direction === "right"
          ? -(expand ? expand : 80)
          : 0,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
