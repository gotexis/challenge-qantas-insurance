import { idGenerator } from "./idGenerator";

describe("idGenerator", () => {
  it("returns a random string of given length", () => {
    const testLength: number = 20;
    const actual: string = idGenerator(testLength);

    expect(typeof actual).toEqual("string");
    expect(actual.length).toEqual(testLength);
  });
});
