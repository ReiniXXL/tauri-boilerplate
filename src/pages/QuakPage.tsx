import { useAsteroidStore } from "@/stores/useAsteroidStore";
import { Text, Button, HStack, VStack, Image } from "@chakra-ui/react";
import React from "react";

const QuakPage = () => {
  const {
    asteroids,
    increaseAsteroids,
    decreaseAsteroids,
    removeAllAsteroids,
  } = useAsteroidStore();

  return (
    <>
      <Image src="./src/assets/images/technologies/zustand.png" width="200px" />
      <VStack>
        <Text>Quak Asteroids: {asteroids}</Text>

        <HStack>
          <Button onClick={() => increaseAsteroids()}>Add</Button>
          <Button onClick={() => decreaseAsteroids()}>Remove</Button>
        </HStack>
        <Button onClick={() => removeAllAsteroids()}>Remove all</Button>
      </VStack>
    </>
  );
};

export default QuakPage;
