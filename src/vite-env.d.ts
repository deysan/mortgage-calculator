/// <reference types="vite/client" />

import { Detail } from './types';

interface CustomEventMap {
  updateForm: CustomEvent<Detail>;
}

declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void;
  }
}

export {};
