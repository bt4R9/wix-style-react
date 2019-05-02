import * as React from 'react';
import {CSSProperties} from "react";

export interface LayoutProps {
  gap?: string;
  cols?: number;
  justifyItems?: string;
  alignItems?: string;
}

export const Layout: React.SFC<LayoutProps>;

export interface CellProps {
  span?: number;
  vertical?: boolean;
}

export const Cell: React.SFC<CellProps>;
