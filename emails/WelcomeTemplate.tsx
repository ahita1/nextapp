import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name } : { name : string }) => {
  return (
    <Html>
      <Preview>Welcome haha</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
                    <Text className="text-3xl font-bold">Hey {name} haha</Text>
                    <Link href="https://ahitafani833.com">www.ahitafani833.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// const body: CSSProperties = {
//   background : "#fff"
// }
// const heading: CSSProperties = {
//   fontSize : "32px"
// }

export default WelcomeTemplate;
