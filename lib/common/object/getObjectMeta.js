const proto = exports;
/**
 * getObjectMeta
 * @param {String} name - object name
 * @param {Object} options
 * @param {{res}}
 */

proto.getObjectMeta = async function getObjectMeta(name, options) {
  options = options || {};
  name = this._objectName(name);
  options.subres = 'objectMeta';
  const params = this._objectRequestParams('HEAD', name, options);
  params.successStatuses = [200];
  const result = await this.request(params);
  return {
    res: result.res
  };
};