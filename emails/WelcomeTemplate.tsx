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
      <Preview>Hey Soll Welcome haha</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="text-3xl font-bold">Hey Soll haha</Text>
            <Text>I have made the website that you can easily access diffrent games that works on diffrent platforms</Text>
            <Text className="text-purple-600"> Can you please take look at the website that i made...</Text>
            <Link href="https://ahita-soll-game-list.vercel.app/">Ahita-Soll-Game</Link>
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
