import { ColorPalleteSchema } from "@/schemas/color-generation";
import { styled } from "$/jsx";
import { motion } from "motion/react";
import { cva } from "$/css";

const colorGridStyle = cva({
  base: {
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
  },
});

const colorItemStyle = cva({
  base: {
    mt: 4,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: "center",
    // justifyContent: "center",
    textAlign: "center",
    fontSize: "0.775rem",
    width: 24,
    borderRadius: 12,
  },
});

const ColorBox = styled("div", {
  base: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});

interface Props {
  pallete: ColorPalleteSchema;
}

export default function ColorPallete({ pallete }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={colorGridStyle()}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {pallete.map((color, index) => (
        <motion.div
          className={colorItemStyle()}
          variants={{
            hidden: { opacity: 0, scale: 0.6 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            type: "spring",
            bounce: 0.25,
            visualDuration: 1,
          }}
          key={index}
        >
          <ColorBox style={{ backgroundColor: color.hex }}></ColorBox>
          <span>{color.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
