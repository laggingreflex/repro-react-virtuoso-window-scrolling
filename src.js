import { createElement as h } from 'react';
import { render } from 'react-dom';
import { Virtuoso } from 'react-virtuoso';

render(h(App), document.getElementById('app'));

function App() {
  return h(Virtuoso, {
    useWindowScroll: true,
    totalCount: 1000,
    itemContent: i => `Item ${i}`,
  })
}
