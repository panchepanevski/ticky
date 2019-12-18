import React from 'react';
import NavigationButton from '../../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button'
};

export function Button() {
  return <NavigationButton onClick={action('clicked')}></NavigationButton>;
}
