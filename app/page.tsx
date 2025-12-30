'use client'

import { Box, Button, Heading, Input, VStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const [cash, setCash] = useState('')
  const [tax, setTax] = useState(0)

  const calculateTax = () => {
    const cashValue = parseFloat(cash) || 0
    const taxValue = cashValue * 0.05 // 5% GST for chai
    setTax(taxValue)
  }

  return (
    <Box p={8} maxW="400px" mx="auto" mt={10}>
      <Heading color="orange.600" mb={6} textAlign="center">
        ☕ चायवाला बुक्स
      </Heading>
      
      <VStack spacing={4} align="stretch">
        <Text fontWeight="bold" fontSize="lg">
          आज का नकद डालें
        </Text>
        
        <Input
          placeholder="₹"
          size="lg"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          type="number"
        />
        
        <Button
          colorScheme="orange"
          size="lg"
          onClick={calculateTax}
        >
          टैक्स कैलकुलेट करें
        </Button>
        
        {tax > 0 && (
          <Box p={4} bg="orange.50" borderRadius="md" mt={4}>
            <Text fontSize="xl" fontWeight="bold">
              आज का टैक्स: ₹{tax.toFixed(2)}
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              कुल: ₹{cash} | टैक्स (5%): ₹{tax.toFixed(2)}
            </Text>
          </Box>
        )}
        
        <Text fontSize="sm" color="gray.500" textAlign="center" mt={8}>
          अपना चाय का बिज़नेस आसान बनाएं
        </Text>
      </VStack>
    </Box>
  )
}