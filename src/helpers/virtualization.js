const utils = require('../utils');

module.exports = {
  getDockerInfo: () => {
    utils.log('trace', 'getDockerInfo');
    return Promise.all([
      utils.run('docker --version').then(utils.findVersion),
      utils.which('docker'),
    ]).then(v => utils.determineFound('Docker', v[0], v[1]));
  },

  getDockerComposeInfo: () => {
    utils.log('trace', 'getDockerComposeInfo');
    return Promise.all([
      utils.run('docker-compose --version').then(utils.findVersion),
      utils.which('docker-compose'),
    ]).then(v => utils.determineFound('Docker Compose', v[0], v[1]));
  },

  getParallelsInfo: () => {
    utils.log('trace', 'getParallelsInfo');
    return Promise.all([
      utils.run('prlctl --version').then(utils.findVersion),
      utils.which('prlctl'),
    ]).then(v => utils.determineFound('Parallels', v[0], v[1]));
  },

  getPodmanInfo: () => {
    utils.log('trace', 'getPodmanInfo');
    return Promise.all([
      utils.run('podman --version').then(utils.findVersion),
      utils.which('podman'),
    ]).then(v => utils.determineFound('Podman', v[0], v[1]));
  },

  getVirtualBoxInfo: () => {
    utils.log('trace', 'getVirtualBoxInfo');
    return Promise.all([
      utils.run('vboxmanage --version').then(utils.findVersion),
      utils.which('vboxmanage'),
    ]).then(v => utils.determineFound('VirtualBox', v[0], v[1]));
  },

  getVMwareFusionInfo: () => {
    utils.log('trace', 'getVMwareFusionInfo');
    return utils
      .getDarwinApplicationVersion('com.vmware.fusion')
      .then(v => utils.determineFound('VMWare Fusion', v, 'N/A'));
  },
};
