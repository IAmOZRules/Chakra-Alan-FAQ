import React from 'react'
import { Box, Text, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

const Faq = ({ index, setIndex }) => {
    return (
        <Flex direction="column" p="4">
            <Accordion allowToggle index={index}>
                {
                    FAQ_LIST.map(faq => (
                        <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
                            <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight='semibold' fontSize="4xl">{faq.question}</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel fontSize="xl" pb="4">{faq.answer}</AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Flex>
    )
}

export default Faq;
