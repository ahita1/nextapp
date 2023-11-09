import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name } : { name : string }) => {
  return (
    <Html>
      <Preview>Welcome haha</Preview>
      <Body>
        <Container>
                  <Text>Hey {name} haha</Text>
                  <Link href="https://ahitafani833.com">www.ahitafani833.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
