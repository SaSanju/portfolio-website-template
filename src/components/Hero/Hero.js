import React from 'react';
import Typewriter from 'typewriter-effect';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          <Typewriter
            options={{
              strings: ['Sayak Bhattacharya\'s Portfolio'],
              cursor: "_",
              cursorClassName: "Typewriter_cursor",
              autoStart: true,
              loop: true
            }}
          />
        </SectionTitle>
        <SectionText>
          Showcasing JavaScript development skills featuring awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;