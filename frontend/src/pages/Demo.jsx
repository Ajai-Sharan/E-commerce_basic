import React from 'react'
import { Button, CloseButton, Dialog, Portal, Box,VStack,Text, Input   } from "@chakra-ui/react"

const Demo = () => {
    return (
        <Dialog.Root key={"UpdateBox"} placement={"center"}>
            <Dialog.Trigger asChild>
                <Button variant="outline" size="sm">
                    Open Dialog
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Update Product</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Box
                                as="form"
                                p={6}
                                borderWidth="1px"
                                borderRadius="lg"
                                boxShadow="lg"
                            >
                                <VStack spacing={4}>
                                    <Box width="100%">
                                        <Text mb={2} fontWeight="medium">Product Name</Text>
                                        <Input
                                            name="name"
                                            placeholder="Enter product name"
                                            size="lg"
                                        // value={newProduct.name}
                                        // onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                        />
                                    </Box>

                                    <Box width="100%">
                                        <Text mb={2} fontWeight="medium">Price</Text>
                                        <Input
                                            name="price"
                                            placeholder="Enter price"
                                            size="lg"
                                            type='text'
                                            inputMode='numeric'
                                        // value={newProduct.price}
                                        // onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                        />
                                    </Box>

                                    <Box width="100%">
                                        <Text mb={2} fontWeight="medium">Image URL</Text>
                                        <Input
                                            name="imageUrl"
                                            placeholder="Enter image URL"
                                            size="lg"
                                        // value={newProduct.image}
                                        // onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                        />
                                    </Box>

                                    <Button
                                        mt={4}
                                        type="submit"
                                        colorScheme="blue"
                                        alignSelf="flex-start"
                                        width="full"
                                    // onClick={(e) => handleOnClick(e)}
                                    >
                                        Create Product
                                    </Button>
                                </VStack>
                            </Box>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                            </Dialog.ActionTrigger>
                            <Button>Save</Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}

export default Demo
