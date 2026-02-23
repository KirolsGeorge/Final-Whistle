import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    popoverarget?: string;
    popover?: string;
    anchorName?: string;
    positionAnchor?: string;
  }
}
