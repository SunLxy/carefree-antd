import request from './../server';

// 调查询接口
export const onSearch = async ({ Api, main, tableConfig }) => {
  const { setBatchValue, getValue, setValue, updateComponent } = main;
  const { table } = tableConfig || {};

  const api = Api['table'];
  if (!api.url) {
    return;
  }

  const updateLoading = (loadin: boolean) => {
    setValue('loading', loadin);
    updateComponent(['table']);
  };

  try {
    updateLoading(true);
    setBatchValue({
      table_page: (table || {}).page || 1,
      table_pageSize: (table || {}).page || 20,
    });
    let fig = true;
    if (api.before) {
      fig = api.before(main);
    }

    if (!fig) {
      updateLoading(false);
      return;
    }

    let params: any = {
      page: getValue('table_page'),
      pageSize: getValue('table_pageSize'),
      ...getValue('search'),
    };

    if (api.requestBefore) {
      params = api.requestBefore(main);
    }
    const response = await request[api.method || 'GET'](`${api.url}`, {
      ...(api.options || {}),
      module: api.module,
      data: params,
    }).catch((res) => {
      updateLoading(false);
    });
    if (api.requestAfter) {
      api.requestAfter({ response, main });
    } else {
      if (response && response.code === 200) {
        const { rows, total } = response.data || {};
        setBatchValue({
          table_dataSource: rows || [],
          table_total: total || 0,
        });
      }
    }
    updateLoading(false);
  } catch (err) {
    updateLoading(false);
  }
};
