import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Glass UI',
    brandUrl: 'https://github.com/your-username/glass-ui',
    brandImage: null,
  },
}); 