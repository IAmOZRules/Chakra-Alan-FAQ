import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = ({ toggleColorFlag }) => {
    return (
        <Flex align="center" boxShadow="base" p="4" mb="2" bg="#FE9201">
            <Box p="2">
                <Heading fontSize="6xl" color="white">Frequently Asked Questions</Heading>
            </Box>
            <Spacer />
            <Box>
                <ColorModeSwitcher border="2px" borderColor="#1a202c" toggleColorFlag={toggleColorFlag} />
            </Box>
        </Flex>
    )
}

export default Navbar
