/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_VIRALSWEEP_AFFILIATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}