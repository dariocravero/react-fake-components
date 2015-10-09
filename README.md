# react-fake-components

[![Build Status](https://travis-ci.org/dariocravero/react-fake-components.svg)](https://travis-ci.org/dariocravero/react-fake-components)

Fake a number of React components at will

```
import fakeComponents from 'react-fake-components';

fakeComponents(2) // => [<span />, <span />]
fakeComponents(2, 'Other') // => [<Other />]
```

MIT license
