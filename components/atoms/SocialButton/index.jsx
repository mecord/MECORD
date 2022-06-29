import { chakra, VisuallyHidden } from "@chakra-ui/react";

export const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color="mecord-main"
      data-testid="test"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
