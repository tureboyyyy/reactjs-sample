/**
 * Created by Administrator on 2017-06-13.
 */

import request from '../../common/utils/request';

const PAGE_SIZE = 10;
export function fetch({ page }) {
  return request(`/api/orders?_page=${page}&_limit=${PAGE_SIZE}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function create(values) {
  console.log('service create', values)
  return request('/api/orders', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
