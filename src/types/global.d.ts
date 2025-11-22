// Global type definitions for the project

declare global {
  interface Window {
    // Chart.js library
    Chart?: any;

    // Calculator functions
    calculateDamage?: () => void;
    calculateGaiaEffects?: () => void;
    createGaiaChart?: () => void;

    // Stella Sora character database functions
    renumberRows?: () => void;
    resetFilters?: () => void;
  }

  interface NodeJS {
    Timeout: number;
  }

  // CustomEvent constructor for browser environments
  interface CustomEventInit<T = any> {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
    detail?: T;
  }

  class CustomEvent<T = any> {
    readonly type: string;
    readonly detail: T;
    constructor(_type: string, _eventInitDict?: CustomEventInit<T>);
  }
}

export {};
