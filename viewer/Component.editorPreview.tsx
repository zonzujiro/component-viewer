import {
  createComponentEditorPreviewEntry,
  withComponentEditorPreview,
} from '@wix/editor-elements-integrations';
import { usePreviewState } from '@wix/editor-elements-preview-utils';
import { getProps as getStaticProps } from './MyComponent.dependencies';
import MyComponent from './MyComponent';

const editorPreviewDependencies = { add: ['compPreviewState'] };

const props = withEditorPreviewDependencies(
  getStaticProps,
  editorPreviewDependencies,
  (viewerProps, dependencies) => {
    const { compPreviewState } = dependencies;

    return {
      ...viewerProps,
      previewWrapperProps: {
        haduken: 'BAANG!',
        compPreviewState,
      },
    };
  }
);

function withComponentEditorPreview(
  WrappedComponent: React.ComponentType<IComponentProps>
): IComponentPreviewWrapper<IComponentProps> {
  return ({ previewWrapperProps = {}, ...viewerProps }) => {
    const { compPreviewState, haduken } = previewWrapperProps;

    useHaduken(haduken);

    usePreviewState(viewerProps.id, compPreviewState, {
      disabled: {
        selectors: `.${classes.navButton}`,
        type: 'plural',
      },
    });

    return <WrappedComponent {...viewerProps} />;
  };
}

export default createComponentEditorPreviewEntry({
  dependencies: { props },
  wrapper: withComponentEditorPreview(MyComponent),
});
