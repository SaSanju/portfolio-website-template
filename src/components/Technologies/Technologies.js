import React from 'react';
import {
  DiAngularSimple,
  DiNodejs, DiReact, 
  DiMongodb, DiMysql, DiHeroku
} from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';
import { BiLogoFirebase, BiLogoAws } from "react-icons/bi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range a technologies in the web development world.
      From Back-end To UI Designs
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple style={{ 'color': '#dd1b16' }} size="3rem" />
          <DiReact style={{ 'color': '#57d2f3' }} size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Angular, Vue, React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs style={{ 'color': '#72a960' }} size="3rem" />
          <DiMongodb style={{ 'color': '#449935' }} size="3rem" />
          <DiMysql style={{ 'color': '#7fb0be' }} size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, MongoDB, MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BiLogoAws style={{ 'color': '#fffffe' }} size="3rem" />
          <DiHeroku style={{ 'color': '#4d1f9c' }} size="3rem" />
          <VscAzure style={{ 'color': '#0085cf' }} size="3rem" />
          <BiLogoFirebase style={{ 'color': '#ff9e00' }} size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Platforms</ListTitle>
          <ListParagraph>
            Experience with <br />
            AWS, Azure, Firebase, Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
