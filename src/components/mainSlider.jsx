import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import {StaticQuery, graphql} from "gatsby"

import {Container, Navbar, Nav, Button, Col, Row} from "react-bootstrap"

const AutoplaySlider = withAutoplay(AwesomeSlider);

function onTransitionEnd({currentSlide}) {
  console.log(currentSlide)
}

export default () => (
  <StaticQuery
    query={graphql`
      query Slider {
        allFile(filter: {sourceInstanceName: {eq: "images"}, dir: {regex: "/slider/"}}) {
          edges {
            node {
              id,
              childImageSharp {
                fluid(maxWidth: 2000) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <AutoplaySlider
        cssModule={AwesomeSliderStyles} 
        play={false}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
        onTransitionEnd={onTransitionEnd}
        >
        {data.allFile.edges.map(node => (
          <div data-src={node.node.childImageSharp.fluid.src}>
            <Container>
              <Row>
                <Col>
                  <h2>Header!</h2>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </AutoplaySlider>
    )}
  />
)