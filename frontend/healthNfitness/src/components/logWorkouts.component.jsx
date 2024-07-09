import React, { useState } from 'react'
import { FormControl, Input, FormLabel, interactivity } from '@chakra-ui/react'
import axios from 'axios'
const LogWorkoutsComponent = () => {
    const [workoutType, setWorkoutType] = useState("")
     const [duration, setDuration] = useState("")
     const [Intensity, setIntensity] = useState("")
     const [notes, setNotes] = useState("")
     const [errro, setError] = useState("")
     const [loading, setLoading] = useState(false)

     const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)

        const workoutLog = {
            userId: 1,
            type: workoutType,
            duration: duration,
            Intensity: Intensity,
            notes: notes
        }

        try {
            const response = await axios.post("endpoint", workoutLog)
            // reset all the filds
            setType('');
            setDuration('');
            setIntensity('');
            setNotes('');
        } catch (error) {
            setError(error.response ? error.response.data : 'Workout log failed') 
        }
        finally{ 
            setLoading(false)
        }

     }
  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
    <Heading as="h1" size="lg" mb={6} textAlign="center">
      Log Your Workout
    </Heading>
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="type" isRequired>
          <FormLabel>Workout Type</FormLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            {/* Add more workout types as needed */}
          </Select>
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>
        <FormControl id="intensity" isRequired>
          <FormLabel>Intensity</FormLabel>
          <Select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
            <option value="">Select Intensity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes</FormLabel>
          <Input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </FormControl>
        {error && <Box color="red.500">{error}</Box>}
        <Button
          type="submit"
          colorScheme="teal"
          size="md"
          width="full"
          isLoading={loading}
        >
          Log Workout
        </Button>
      </VStack>
    </form>
  </Box>
  )
}

export default LogWorkoutsComponent
