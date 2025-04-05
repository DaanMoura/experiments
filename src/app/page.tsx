"use client";

import { Flex, styled } from "$/jsx";
import Aurora from "@/components/Aurora/Aurora";
import Noise from "@/components/Noise/Noise";
import Magnet from "@/components/Magnet/Magnet";
import { motion } from "motion/react";
import AnimatedLoadingButtonShowcase from "@/components/showcase/AnimatedLoadingButtonShowcase";
import ColorGeneratorShowcase from "@/components/showcase/ColorGeneratorShowcase";

const Title = styled("h1", {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "5rem",
    lineHeight: "1",
    textAlign: "center",
  },
});

const AnimatedLink = styled("a", {
  base: {
    transition: "all 0.2s ease-in-out",
    color: "zinc.100",

    "&:hover": {
      color: "amber.200",
    },
  },
});

const Subtitle = styled(motion.h2, {
  base: {
    fontFamily: "Instrument Serif",
    fontWeight: "400",
    fontSize: "2rem",
    lineHeight: "1.2",
    mt: -3,
    ml: 4,
  },
});

const Home = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      backgroundColor="zinc.950"
      color="zinc.100"
      overflowY="auto"
    >
      <Aurora amplitude={1.0} blend={1} speed={0.1} />
      <Noise
        patternSize={500}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={4}
        patternAlpha={28}
      />

      <Flex
        direction="column"
        gap={4}
        width="100%"
        my={16}
        zIndex={1}
        alignItems="center"
      >
        <Flex direction="column" alignItems="center">
          <Title>Experiments</Title>
          <Magnet magnetStrength={5}>
            <AnimatedLink href="https://github.com/daanmoura" target="_blank">
              <Subtitle whileHover={{ scale: 1.1 }}>by Daniel Moura</Subtitle>
            </AnimatedLink>
          </Magnet>
        </Flex>

        <Flex
          direction="column"
          gap={8}
          minWidth="350px"
          width="40vw"
          maxWidth="400px"
          mx={2}
          pb={4}
          zIndex={1}
          alignItems="center"
        >
          <AnimatedLoadingButtonShowcase />
          <ColorGeneratorShowcase />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
