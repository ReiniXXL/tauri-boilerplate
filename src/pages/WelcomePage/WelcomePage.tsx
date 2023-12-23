import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { Technology, TechStack } from "@/pages/WelcomePage/components";

const WelcomePage: React.FC = () => {
  return (
    <Flex justifyContent="center" flexDirection="column" h="100%">
      <Box as="section" whiteSpace="nowrap" textAlign="center">
        <Heading size="2xl">Welcome to</Heading>
        <Heading size="lg" color="orange.300">
          People Manager
        </Heading>
      </Box>

      <Box display="flex" flexDirection="column" gap={6} w="140%">
        <TechStack label="Tasks">
          <Technology label="1 on 1" image="technologies/tauri.svg" />
          <Technology label="development" image="technologies/tauri.svg" />
          <Technology label="reference" image="technologies/tauri.svg" />
        </TechStack>

        <TechStack label="Reporting">
          <Technology
            label="Employee Stats"
            image="technologies/chakra-ui.svg"
          />
          <Technology label="Interactions" image="technologies/chakra-ui.svg" />
          <Technology label="Satisfaction" image="technologies/chakra-ui.svg" />
          <Technology label="Performance" image="technologies/chakra-ui.svg" />
        </TechStack>

        <TechStack label="Employees">
          <Technology label="Create" image="technologies/zustand.png" />
          <Technology label="Update" image="technologies/zustand.png" />
          <Technology label="Delete" image="technologies/zustand.png" />
        </TechStack>

        <TechStack label="Competencies">
          <Technology label="Create" image="technologies/chakra-ui.svg" />
          <Technology label="Update" image="technologies/chakra-ui.svg" />
          <Technology label="Delete" image="technologies/chakra-ui.svg" />
        </TechStack>

        <TechStack label="Strategy">
          <Technology label="Vision" image="technologies/chakra-ui.svg" />
          <Technology label="Mission" image="technologies/chakra-ui.svg" />
          <Technology label="Goals" image="technologies/chakra-ui.svg" />
        </TechStack>

        <TechStack label="Templates">
          <Technology label="Meetings" image="technologies/chakra-ui.svg" />
          <Technology label="Surveys" image="technologies/chakra-ui.svg" />
          <Technology label="Documents" image="technologies/chakra-ui.svg" />
        </TechStack>
      </Box>
    </Flex>
  );
};

export default WelcomePage;
