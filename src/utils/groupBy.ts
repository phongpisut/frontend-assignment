/* eslint-disable @typescript-eslint/no-explicit-any */

  function getPropValue(obj: any, dotPath: any) {
    let returnData = obj;

    dotPath.split(".").forEach((subPath: any) => {
      returnData = returnData[subPath] || `Property ${subPath} not found`;
    });

    return returnData;
  }

  const groupBy = (x: any[], key: any)  =>
    x.reduce(
      (
     
        r: any, 
        v: any,
        _: unknown,
        __: unknown,
        k = getPropValue(v, key)
      ) => ((r[k] || (r[k] = [])).push(v), r),
      {}
    );

  export default groupBy;
