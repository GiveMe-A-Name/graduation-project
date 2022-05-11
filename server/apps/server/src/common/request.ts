export interface SucceeResult {
  errcode: number;
  errmsg: 'ok';
  data: any;
}

export function createSuccessResponse(data: any): SucceeResult {
  return {
    errcode: 0,
    errmsg: 'ok',
    data,
  };
}
