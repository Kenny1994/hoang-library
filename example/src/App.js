import React, { Component } from 'react'
import {AppProvider} from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';

import ExampleComponent from 'hoang-library'

const theme = {
  colors: {
    topBar: {
      background: '#0b4697'
    },
    colorScheme: 'dark'
  },
  logo: {
    width: 124,
    topBarSource:
      'https://avada-popups.firebaseapp.com/images/AvadaLogo-white.png?b24ff4e9b7bedd9c1ec9046df5a366be',
    contextualSaveBarSource:
      'https://avada-popups.firebaseapp.com/images/AvadaLogo-back.png?b24ff4e9b7bedd9c1ec9046df5a366be',
    url: '/',
    accessibilityLabel: 'AVADA Size Chart'
  }
};

export default class App extends Component {
  render () {
    return (
      <AppProvider
        theme={theme}
        i18n={translations}
      >
        <div>
          <ExampleComponent />
        </div>
      </AppProvider>

    )
  }
}
