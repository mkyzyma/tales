// eslint-disable-next-line import/no-unresolved
import * as sapper from '@sapper/app';

import '../node_modules/bulma/css/bulma.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

sapper.start({
  target: document.querySelector('#sapper'),
});
