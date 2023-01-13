import fs from "fs"
import path from "path"

const deploySDK = require('./deploySDK.js');

export const analysis = (context, api) => deploySDK.analysis(context, api);

export const beforeDeploy = (context, api) => {
  const path = context.config.retailPath + '/mods/CustomSuits/';

  if(fs.existsSync(path))
  {
    fs.readdirSync(path).forEach(file => {
      fs.unlinkSync(path + file);
    });
  }

  api.logger.info('Custom suits cleared');

  return deploySDK.beforeDeploy(context, api);
};

export const afterDeploy = (context, api) => deploySDK.afterDeploy(context, api);

export const cachingPolicy: ModScript["cachingPolicy"] = {
  affected: []
}