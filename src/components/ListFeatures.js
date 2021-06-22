import {
  Box,
  Container,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import working from "../assets/working.svg";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  return (
    <Box as="section" bg="gray.50" py={24}>
      <Container maxW="container.lg">
        <Stack
          direction={{ base: "column", md: "row" }}
          sx={{ gap: "3rem" }}
          alignItems="center"
        >
          <Box flex="1">
            <img
              src={working}
              alt="Illustration with a computer on the desk"
              width="400"
              height="295"
              m="0"
            />
          </Box>
          <Box flex="1">
            <Heading mb="6">
              The most useful resource ever created for designers
            </Heading>
            <List
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}
            >
              {list.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListFeatures;
