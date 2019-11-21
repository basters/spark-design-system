import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkSelectionInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: markdownLinkBuilder('input'),
  },
};

export const checkbox = () => (
  <SprkSelectionInput
    groupLabel="Checkbox Input"
    choices={[
      {
        label: 'Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Checkbox Item 3',
        name: 'check[]',
        value: 'item-2',
      },
    ]}
    variant="checkbox"
  />
);

checkbox.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};
