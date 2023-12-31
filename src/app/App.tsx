import React from 'react';
import {ChakraProvider, extendTheme, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import colorTheme from "../custom-theme";

const theme = extendTheme({
  colors: {
    brand: colorTheme.colors
  },
})
const App = () => {
  return <ChakraProvider theme={theme}>
    <Tabs variant={"unstyled"} align='end'>
      <TabList>
        <Tab>About</Tab>
        <Tab>Experience</Tab>
        <Tab>Work</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabIndicator mt="-1.5px"
                    height="2px"
                    bg="brand.accent.vibrant-blue"
                    borderRadius="1px"/>

      <TabPanels>
        <TabPanel>About</TabPanel>
        <TabPanel>Experience</TabPanel>
        <TabPanel>Work</TabPanel>
        <TabPanel>Contact</TabPanel>
      </TabPanels>
    </Tabs>
  </ChakraProvider>

}
export default App