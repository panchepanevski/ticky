import React from 'react';
import { action } from '@storybook/addon-actions';
import Logo from '../../components/Logo';

export default {
  title: 'Logo'
};

export function LogoOnClick() {
  return <Logo onClick={action('clicked')}></Logo>;
}
