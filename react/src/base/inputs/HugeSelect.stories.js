import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Huge Select',
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

export const hugeSelectBox = () => (
  <SprkSelectionInput
    label="Select Box Label"
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    variant="hugeSelect"
    name="select"
    valid={true}
    disabled={false}
    errorMessage="There is an error in the field."
    defaultValue=""
  />
);

hugeSelectBox.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};
