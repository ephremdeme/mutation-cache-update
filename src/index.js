import * as React from "react";

export const useAddMutation = (add_query, read_query, m_method, m_name) => {
  var a = m_method;
  m_method = { m_method };
  const [addItem, { loading, error, data }] = useMutation(add_query, {
    update: (cache, { data: m_method }) => {
      const val = cache.readQuery({ query: read_query });
      const fixtures = val[m_name];
      const test = {};
      test[m_name] = fixtures.concat([m_method[a]]);
      console.log(test);
      cache.writeQuery({
        query: read_query,
        data: test
      });
    }
  });
  const submit = value => {
    addItem({
      variables: value
    });
  };
  return [submit, { loading, error, data }];
};
