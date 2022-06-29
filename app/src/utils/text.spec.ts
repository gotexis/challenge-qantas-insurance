import { capitalizeEachWord } from './text';

describe("text utils", () => {

  it.each([
    ["hello mmmWorld", "Hello Mmmworld"],
    ["hello world", "Hello World"],
    ["foo 1234bDSfar XYC", "Foo 1234bdsfar Xyc"],
    // TODO: can add many more test cases here
  ])("capitalizes each word", (str, expected) => {
    expect(capitalizeEachWord(str)).toEqual(expected);
  })

});
