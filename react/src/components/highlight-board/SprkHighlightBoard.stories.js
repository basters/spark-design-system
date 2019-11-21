import React from 'react';
import SprkHighlightBoard from './SprkHighlightBoard';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Highlight Board',
  component: SprkHighlightBoard,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkHighlightBoard'],
    info: markdownLinkBuilder('highlight-board'),
  },
};

export const defaultStory = () => (
  <SprkHighlightBoard
    imgSrc="https://spark-assets.netlify.com/desktop.jpg"
    imgAlt="desktop"
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="/gettingstarted/designers.html"
    ctaText2="Developers"
    ctaHref2="/gettingstarted/developers.html"
    idString="highlightboard-1"
  />
);

defaultStory.story = {
  name: 'Default',
};

export const noImage = () => (
  <SprkHighlightBoard
    variant="noImage"
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="#"
    ctaText2="Developers"
    ctaHref2="#"
    idString="highlightboard-2"
  />
);

noImage.story = {
  name: 'No Image',
};

export const stacked = () => (
  <SprkHighlightBoard
    variant="stacked"
    imgSrc="https://spark-assets.netlify.com/desktop.jpg"
    imgAlt="desktop"
    heading="Hello, Welcome To Spark Design System"
    ctaText="Designers"
    ctaHref="/gettingstarted/designers.html"
    ctaText2="Developers"
    ctaHref2="/gettingstarted/developers.html"
    idString="highlightboard-3"
  />
);

stacked.story = {
  name: 'Stacked',
};
