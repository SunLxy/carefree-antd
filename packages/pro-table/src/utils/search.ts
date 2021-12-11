import request from './../server';

// 调查询接口
export const onSearch = async ({ Api, main, tableConfig }) => {
  const { setBatchValue, getValue, tableLoading } = main;
  const { table } = tableConfig || {};

  const api = Api['table'] || {};
  if (!api.url) {
    return;
  }

  try {
    tableLoading(true);
    setBatchValue({
      table_page: (table || {}).page || 1,
      table_pageSize: (table || {}).page || 20,
    });
    let fig = true;
    if (api.before) {
      fig = api.before(main);
    }

    if (!fig) {
      tableLoading(false);
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
      tableLoading(false);
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
    tableLoading(false);
  } catch (err) {
    tableLoading(false);
  }
};
