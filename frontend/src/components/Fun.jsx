import React, { useState, useEffect } from 'react';

export default function Fun(props) {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
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
    <div className="p-4 text-center">
      <h1 className="mt-14 text-4xl font-bold">Fun</h1>
      <input
        className="mt-4 block w-full max-w-lg mx-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p className="mt-4 text-2xl font-medium">Display: {displayValue}</p>
    </div>
  );
}
