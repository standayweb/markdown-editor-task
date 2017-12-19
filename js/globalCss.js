// @flow
import { css } from 'glamor';

// declare only some simple css which is hard to declare at component level
css.global('html ', { boxSizing: 'border-box' });
css.global('*, *:before, *:after', { boxSizing: 'inherit' });
css.global('body', {
  fontFamily: '"Open Sans", sans-serif',
  lineHeight: '24px',
  overflowX: 'hidden',
});
css.global('h1, h2, h3, h4, p', { margin: 0 });

// styling for react-split-pane, there may be a better way/place
css.global('.Resizer', {
  background: '#000',
  opacity: 0.2,
  zIndex: 1,
  backgroundClip: 'padding-box',
});

css.global('.Resizer:hover', {
  transition: 'all 2s ease',
});

css.global('.Resizer.vertical', {
  width: 11,
  margin: '0 -5px',
  borderLeft: '5px solid rgba(255, 255, 255, 0)',
  borderRight: '5px solid rgba(255, 255, 255, 0)',
  cursor: 'col-resize',
});

css.global('.Resizer.vertical:hover', {
  borderLeft: '5px solid rgba(0, 0, 0, 0.5)',
  borderRight: '5px solid rgba(0, 0, 0, 0.5)',
});
