
import biLogger from '@wix/web-bi-logger';

export const headerBiConf = {
  extension: 'wix-anywhere-bm',
  src: '151',
  wixHeaderAction: '8',
};

export const headerAndFooterBiLogger = biLogger
  .factory({ endpoint: headerBiConf.extension })
  .updateDefaults({ src: headerBiConf.src })
  .logger();



  