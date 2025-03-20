import { Spinner, Text, VStack } from "@chakra-ui/react"

const Demo = () => {
  return (
    <VStack colorPalette="teal" mt={"100px"}>
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading😴...</Text>
    </VStack>
  )
}

export default Demo;