'use strict';

// Disable the Ctrl+Shift+C keyboard shortcut that triggers clearauthorship.
// Hiding the toolbar button (done client-side in postAceInit) is not enough:
// Etherpad's ace2_inner.ts binds Ctrl+Shift+C to CMDS.clearauthorship when
// `clientVars.padShortcutEnabled.cmdShiftC` is truthy. Forcing that flag to
// false here stops the shortcut from reaching the clearauthorship command.
exports.clientVars = (hookName, {clientVars}) => {
  if (clientVars && clientVars.padShortcutEnabled) {
    clientVars.padShortcutEnabled.cmdShiftC = false;
  }
  return {};
};
