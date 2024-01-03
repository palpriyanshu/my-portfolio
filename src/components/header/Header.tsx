import {ChakraProvider, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import About from "./About";
import React from "react";

const Header = () => {
    return <header>
            <TabList alignSelf='end' >
                <Tab>About</Tab>
                <Tab>Experience</Tab>
                <Tab>Work</Tab>
                <Tab>Contact</Tab>
            </TabList>
    </header>
}

export default Header