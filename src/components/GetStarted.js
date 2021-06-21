import { Badge, Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Box as="section" id="buy-now" py={20} bg="teal.900" color="white">
      <Container maxW="container.md" centerContent>
        <Badge mb="6">Get Started</Badge>
        <Heading mb="6">Get AlyraKit and save your time</Heading>
        <Text textAlign="center" mb="6">
          Stop wasting time trying to do it the "right way" and build a site
          from scratch. AlyraKit is faster, easier, and you still have complete
          control.
        </Text>
        <Button colorScheme="teal" size="lg">
          Buy now
        </Button>
      </Container>
    </Box>
  );
};

export default GetStarted;
