import {
  defineComponentDependencies,
  withStaticData,
} from '@wix/editor-elements-integrations';

export const getProps = withStaticData()();
export const getCSS = withStaticData()();
export const getSdkData = withStaticData()();

export default defineComponentDependencies({
  getProps,
  getCSS,
  getSdkData,
});
