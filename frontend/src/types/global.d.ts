export {};

declare global {
  interface Window {
    __portfolioBootComplete?: boolean;
    __portfolioLenis?: {
      scrollTo: (
        target: string | number | HTMLElement,
        options?: {
          offset?: number;
          duration?: number;
          lerp?: number;
        }
      ) => void;
    };
  }
}
