/** using svg with VITE */
/// <reference types="vite-plugin-svgr/client" />

/** using svg with CRA */
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
