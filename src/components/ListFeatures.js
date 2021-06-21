import {
  Box,
  Container,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
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
    <Box py={18}>
      <Container maxW="container.lg" px="4">
        <Stack direction={{ base: "Column", md: "row" }} sx={{ gap: "3rem" }}>
          <Box alignItems="center">
            <img
              src={working}
              alt="Illustration with a computer on the desk"
              width="400"
              height="295"
            />
          </Box>
          <Box>
            <Heading mb="6">
              The most useful resource ever created for designers
            </Heading>
            <List spacing={3}>
              <SimpleGrid columns={2}>
                {list.map((el, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="teal.300" />
                      {el}
                    </ListItem>
                  );
                })}
              </SimpleGrid>
            </List>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListFeatures;
