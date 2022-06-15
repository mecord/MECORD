import { Stack, Text, SimpleGrid, Box, Grid, GridItem } from "@chakra-ui/react";

const HospitalDashboard = () => {
  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      <Text>HospitalDashboard</Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Box colSpan={2} h="10" bg="gray.500" />
        <Box colSpan={2} h="10" bg="blue.500" />
      </Grid>
    </Stack>
  );
};

export default HospitalDashboard;
