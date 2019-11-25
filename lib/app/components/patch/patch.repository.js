
const Data = require('../../shared/read-db-files');
const ScenarioBase = require('../../shared/bases/scenario-base');

/**
 * Get data from the json files under resources folder.
 */
class PatchRespository extends ScenarioBase {
  /**
   * Find Data for a specific request.
   * @param {object} request Body coming from the request.
   * @return {object} Returns the data for that specific request.
   */
  findData(request) {
    return this.provideScenarios(request, Data.dbByMethod('_patch'));
  }
}
module.exports = new PatchRespository();