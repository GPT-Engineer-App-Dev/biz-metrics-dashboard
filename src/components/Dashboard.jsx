import React from 'react';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={5}>
      <Heading mb={4}>Business Dashboard</Heading>
      <SimpleGrid columns={3} spacing={10}>
        <Box bg="brand.700" p={4} borderRadius="md">
          <Text fontSize="xl" color="white">Sales</Text>
          <Heading fontSize="2xl" color="white">$5,000</Heading>
        </Box>
        <Box bg="brand.700" p={4} borderRadius="md">
          <Text fontSize="xl" color="white">Revenue</Text>
          <Heading fontSize="2xl" color="white">$15,000</Heading>
        </Box>
        <Box bg="brand.700" p={4} borderRadius="md">
          <Text fontSize="xl" color="white">Other Metrics</Text>
          <Heading fontSize="2xl" color="white">Data</Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;