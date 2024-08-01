// src/components/Fun.jsx
import React, { useState, useEffect } from 'react';
import { Box, Input, Text } from '@chakra-ui/react';

export default function Fun(props) {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Example of fetching data from a placeholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setDisplayValue(newValue); // Update display value immediately
  };

  return (
    <Box p={4} textAlign="center">
      <Text mt={14} fontSize="4xl" fontWeight="bold">
        Fun
      </Text>
      <Input
        mt={4}
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        size="lg"
        variant="outline"
        width="100%"
        maxWidth="400px"
        mx="auto"
      />
      <Text mt={4} fontSize="2xl" fontWeight="medium">
        Display: {displayValue}
      </Text>
    </Box>
  );
}
