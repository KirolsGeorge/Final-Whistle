import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    popovertarget?: string;
    popover?: string;
    anchorName?: string;
    positionAnchor?: string;
  }
}
