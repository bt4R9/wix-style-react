import * as React from 'react';

export interface LinearProgressBarProps {
  value?: number | string;
  error?: boolean;
  showProgressIndication?: boolean;
  errorMessage?: string;
  light?: boolean;
}

declare const LinearProgressBar: React.SFC<LinearProgressBarProps>;
export default LinearProgressBar;
