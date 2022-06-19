const variantBlue = {
  blue: {
    bg: "mecord-main",
    color: "white",
    fontWeight: "normal",
    rounded: "lg",
  },
};

const variantWhite = {
  white: {
    bg: "white",
    fontWeight: "normal",
    rounded: "lg",
  },
};

const Button = {
  variants: {
    ...variantBlue,
    ...variantWhite,
  },
};

export default Button;
