# use-add-mutation-update
>Very simple and small hook for managing  Apollo client add mutation with cache update 

[![NPM](https://img.shields.io/npm/v/use-add-mutation-update.svg)](https://www.npmjs.com/package/use-add-mutation-update) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-add-mutation-update
```

## Usage

```jsx
import React, { Component } from "react";

import { useAddMutation } from "use-add-mutation-update";

const Example = () => {
  const [addNews, { error, loading, data }] = useAddMutation(
    ADD_NEWS,
    GET_NEWS,
    "add_news"/*mutation method name */,
    "get_news" /*query method name */
  );

  addNews({
      variables: value
    }) //So simple

  return <div>{example}</div>;
};
```

## License

MIT © [ephremdeme](https://github.com/ephremdeme)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
