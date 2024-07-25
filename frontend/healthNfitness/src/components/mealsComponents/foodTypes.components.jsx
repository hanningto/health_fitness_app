import React, { useState } from 'react';
import { ChakraProvider, Box, Select, Text } from '@chakra-ui/react';

const options = [
    { value: 'Protein', label: 'Protein', description: ' foods, like meat, fish, eggs, and legumes, are essential for muscle repair, growth, and overall bodily functions. ' },
    { value: 'Carbohydrate', label: 'Carbohydrate ', description: 'Carbohydrate-rich foods, such as bread, pasta, and fruits, provide the primary source of energy for the body. They support brain function and physical activity by breaking down into glucose.'
 },
    { value: 'Vitamins', label: 'Vitamins ', description: 'Vitamin-rich foods, like citrus fruits and leafy greens, are crucial for immune function, energy production, and overall health. They aid in preventing deficiencies and supporting various bodily processes. ' },
    { value: 'Vegetables', label: 'Vegetables ', description: 'Vegetables, such as spinach, broccoli, and carrots, are packed with essential vitamins, minerals, and fiber. They promote digestive health, boost immunity, and reduce the risk of chronic diseases.' },
  ];

const FoodTypes = ({setSelectedFoodType}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  setSelectedFoodType(selectedOption)

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const option = options.find(opt => opt.value === selectedValue);
    setSelectedOption(option);
  };

  return (
    <Box>
      <Select placeholder="Select an option" onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {selectedOption && (
        <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
          <Text>{selectedOption.description}</Text>
        </Box>
      )}
    </Box>
  );
};

export default FoodTypes