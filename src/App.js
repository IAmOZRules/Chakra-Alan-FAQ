import { scroller } from 'react-scroll';
import alanBtn from "@alan-ai/alan-sdk-web";
import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useRef, useEffect, useState } from 'react'

import Faq from './Faq';
import Navbar from './Navbar';

const App = () => {
    const alanBtnInstance = useRef(null);
    const [index, setIndex] = useState(null);
    const [toggleColorFlag, setToggleColorFlag] = useState(false);

    useEffect(() => {
        if (!alanBtnInstance.current) {
            alanBtnInstance.current = alanBtn({
                key: process.env.REACT_APP_API_TOKEN,
                onCommand: (commandData) => {
                    if (commandData.command === 'gotoFaq') {
                        scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
                            duration: 700,
                            delay: 100,
                            smooth: 'easeInOutQuart'
                        })
                        setIndex(commandData.faqId - 1)
                    } else if (commandData.command === 'toggleColorMode') {
                        setToggleColorFlag(flag => !flag)
                    }
                }
            });
        }
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Navbar toggleColorFlag={toggleColorFlag} />
            <Faq index={index} setIndex={setIndex} />
        </ChakraProvider>
    )
}

export default App;
