import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../UIComponents/header'

export default function () {
  // before showing this page to the UI - Bring all the articles from the Blockchain to Frontend
  // create dynamic list of articles
  return (
    <div>
      <Header />
        {/* List of Article with Date and Heading - Button*/}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Day 1 - I learnt FE</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Day 2 - I learnt Smart Contract</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* Whenever I Click on Button - Popup will come to show me the Readings of Article */}
    </div>
  )
}
