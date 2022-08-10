import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useAnimate } from "hooks";
import React, { FC } from "react";

interface RoadmapCardProps {
  justifyContent: string;
  animation: string;
  title: string;
  description: string;
  color: string;
  colorDark: string;
}

const RoadmapCard: FC<RoadmapCardProps> = ({
  justifyContent,
  animation,
  title,
  description,
  color,
  colorDark,
}) => {
  const { isAnimated, dom } = useAnimate();

  const { colorMode } = useColorMode();

  return (
    <Flex
      ref={dom}
      w="80%"
      justifyContent={justifyContent}
      className={isAnimated ? "animate__animated animate__" + animation : ""}
    >
      <Flex
        w={["full", "full", "50%"]}
        bgGradient={
          colorMode === "light"
            ? `linear(to-b, ${color}.100, ${color}.200, ${color}.300, ${color}.400)`
            : `linear(to-b, ${color}.300, ${color}.500, ${color}.700, ${color}.900)`
        }
        rounded="2xl"
        m={2}
        px={16}
        py={4}
        justifyContent="center"
        flexDir="column"
        shadow="lg"
      >
        <Text fontSize={["md", "md", "2xl"]} fontWeight="bold">
          {title}
        </Text>
        <Text mt={2} fontSize={["xs", "xs", "md"]}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RoadmapCard;
