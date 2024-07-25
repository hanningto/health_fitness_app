// WaterIntakeGraph.jsx
import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Box, Heading } from "@chakra-ui/react";

const WaterIntakeGraph = () => {
  const { waterIntake } = useSelector((state) => state.waterIntake);

  // Format data for the graph
  const formattedData = waterIntake.map((intake) => {
    const intakeDate = new Date(intake.intake_date).toLocaleDateString();
    return {
      date: intakeDate,
      amount: intake.intake_amount,
    };
  });

  return (
    <Box p={5} bg="gray.50" borderRadius="md" boxShadow="md" mt={10}>
      <Heading textAlign="center" mb={6} color="teal.600">
        Daily Water Intake
      </Heading>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WaterIntakeGraph;
