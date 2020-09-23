import * as React from 'react';

import { ResponsableDispatch } from './responsable.action';
import {
  ResponsableDispatchContext,
  ResponsableStateContext,
  ResponsableState
} from './responsable.context';

export const useResponsableDispatch = (): ResponsableDispatch => {
  const context = React.useContext(ResponsableDispatchContext);

  if (context === undefined) {
    throw new Error(
      'useResponsableDispatch must be used within a ResponsableDispatchProvider'
    );
  }
  return context;
};

export const useResponsableState = (): ResponsableState => {
  const context = React.useContext(ResponsableStateContext);
  if (context === undefined) {
    throw new Error(
      'useResponsableState must be used within a ResponsableStateProvider'
    );
  }
  return context;
};
