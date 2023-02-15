import {
  withRuntimeProps,
  IViewerData,
} from '@wix/editor-elements-integrations';
import {
  IComponentMapperProps,
  IComponentProps,
  IComponentStateValues,
  IComponentControllerProps,
} from './Component.types';

const useViewerAccess = ({
  mapperProps,
  stateValues,
}: IViewerData<
  IComponentMapperProps,
  IComponentProps,
  IComponentStateValues
>): IComponentControllerProps => {
  // do smth with mapperProps and stateValues

  return {
    ...mapperProps,
    ...stateValues,
  };
};

export const getComponentProps = withRuntimeProps(useViewerAccess);

const MyComponent: React.FC<IComponentProps> = (props) => {
  return <div>My Component</div>;
};

export default MyComponent;
