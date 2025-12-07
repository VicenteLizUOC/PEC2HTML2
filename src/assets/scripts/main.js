/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import './header.js'; 
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
