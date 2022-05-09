export interface SucceeResult {
  errcode: number;
  errmsg: 'ok';
  data: any;
}

export function createSuccessResponse(data: any): SucceeResult {
  return {
    errcode: 200,
    errmsg: 'ok',
    data,
  };
}
