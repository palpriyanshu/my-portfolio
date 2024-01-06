import React from "react";
import "./Footer.scss"
import {Text} from "@chakra-ui/react";

const Footer = () => {
     return <footer className="footer">
         <Text>
             <p>Design By: <span className="highlight">Brittany Chiang</span></p>
         </Text>
         <Text>
             <p>
                 Build By: <span className="highlight">Priyanshu Pal</span>
             </p>
         </Text>
    </footer>
}

export default Footer