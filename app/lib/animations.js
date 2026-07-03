export const fadeIn = (direction = "up", duration = 0.5, delay = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const hoverScale = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" },
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.12)",
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};
