// Piepieonline's standard SMF ModSDK deployment script v1.1 

import fs from "fs"
import path from "path"

fs.copyDirSync = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      entry.isDirectory() ?
          fs.copyDirSync(srcPath, destPath) :
          fs.copyFileSync(srcPath, destPath);
  }
}

export const analysis = (context, api) => Promise.resolve();
export const beforeDeploy = (context, api) => Promise.resolve();

export const afterDeploy: ModScript["afterDeploy"] = async function (context, api) {
  const modID = context.deployInstruction.id;

  api.logger.info('Deploying SDK content');
  
  if(fs.existsSync(context.modRoot + '/sdk/content/'))
  {
    fs.copyDirSync(context.modRoot + '/sdk/content/', context.config.retailPath + '/mods');
  }
  
  const modSDKContentMagicString = '(ModSDKContent)';
  context.config.modOptions[modID].forEach(selectedOption => {
    if(selectedOption.endsWith(modSDKContentMagicString))
    {
      let selectedOptionPath = 'content_' + selectedOption.replace(modSDKContentMagicString, '').trim().replace(/[\s:]/g, '_').replace(/[\(\)]/g, '').toLowerCase();
      api.logger.info('Deploying extra content: ' + selectedOption);
      fs.copyDirSync(context.modRoot + '/sdk/' + selectedOptionPath, context.config.retailPath + '/mods');
    }
  })

  api.logger.info('SDK content deployed');

  return Promise.resolve();
};

export const cachingPolicy: ModScript["cachingPolicy"] = {
  affected: []
}