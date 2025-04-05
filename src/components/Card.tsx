import { styled } from "$/jsx";
import { motion } from "motion/react";

const Root = styled("article", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    borderRadius: 8,
    backgroundColor: "zinc.950/50",
    // boxShadow: "0 0 0 1px zinc.950",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "amber.100/12",
    color: "zinc.100",
    width: "100%",
    minW: "350px",
    py: 3,
    px: 6,
  },
});

const Title = styled("h1", {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "2rem",
    lineHeight: "1",
  },
});

const Paragraph = styled("p", {
  base: {
    color: "zinc.300",
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    mb: 2,
  },
});

const RestartIcon = styled(motion.button, {
  base: {
    color: "zinc.300",
    backgroundColor: "zinc.900",
    borderRadius: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 2,
    height: 8,
    width: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "zinc.100/30",
    cursor: "pointer",
  },
});

export const Card = {
  Root,
  Title,
  Paragraph,
  RestartIcon,
};
