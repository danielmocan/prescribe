import {escapeQuotes} from '../../src/utils';

describe('escapeQuotes', () => {
  it.skip('escapes quotes in js', () => {
    expect(escapeQuotes('var s=""')).to.equal('var s=\\"\\"');
    expect(escapeQuotes('"something"')).to.equal('\\"something\\"');
    expect(escapeQuotes('"WAT')).to.equal('\\"WAT');
  });

  it.skip("doesn't escape quotes that're already escaped", () => {
    expect(escapeQuotes('\"WAT')).to.equal('\\"WAT');
  });

  it('leaves quotes as provided', () => {
    expect(escapeQuotes('\"WAT')).to.equal('\"WAT');
  });
});
