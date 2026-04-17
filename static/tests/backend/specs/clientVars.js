'use strict';

const assert = require('assert').strict;
const plugin = require('../../../..');

describe(__filename, function () {
  it('disables cmdShiftC in clientVars (regression for #4)', function () {
    const clientVars = {padShortcutEnabled: {cmdShiftC: true, cmdShiftB: true}};
    plugin.clientVars('clientVars', {clientVars});
    assert.equal(clientVars.padShortcutEnabled.cmdShiftC, false);
    // Other shortcuts must be untouched.
    assert.equal(clientVars.padShortcutEnabled.cmdShiftB, true);
  });

  it('tolerates clientVars without padShortcutEnabled', function () {
    const clientVars = {};
    assert.doesNotThrow(() => plugin.clientVars('clientVars', {clientVars}));
  });
});
