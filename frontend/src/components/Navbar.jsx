import {
    Container,
    Flex,
    HStack,
    Button,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";


const Navbar = () => {

    return (
        <Container maxW={"1140px"} mt={4} px={4} bg={useColorModeValue("gray.100", "gray.900")}  borderRadius="lg">
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Text
                    fontSize={{ base: "22px", sm: "28px" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient="to-r"
                    gradientFrom="cyan.400"
                    gradientTo="blue.500"
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>

                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button 
                            bg={useColorModeValue("gray.100", "gray.900")}
                        >
                            <CiSquarePlus 
                                fontSize={20} 
                                color={useColorModeValue("black","white")}
                            />
                        </Button>
                    </Link>
                    <ColorModeButton />
                </HStack>

            </Flex>
        </Container>
    );
};

export default Navbar;