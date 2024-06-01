declare module 'katex' {
    interface KatexOptions {
      displayMode?: boolean;
      throwOnError?: boolean;
      errorColor?: string;
      macros?: Record<string, string>;
      minRuleThickness?: number;
      maxSize?: number;
      maxExpand?: number;
      allowedProtocols?: string[];
    }
  
    export function render(tex: string, element: HTMLElement, options?: KatexOptions): void;
    export function renderToString(tex: string, options?: KatexOptions): string;
  }
  