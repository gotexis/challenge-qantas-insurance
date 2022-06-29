import { countdown } from "./countdown";


describe("countdown", () => {

  beforeAll(() => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date('2020-01-01T00:00:00.000Z'));
  });

  it("\"Expired\" if the expiryDate when less than zero days", () => {
    const expiryDate = "1995-12-17T03:24:00Z";
    const result = countdown(expiryDate);
    expect(result).toBe("Expired");
  });

  it("\"X days left\" when more than one day", () => {
    const expiryDate = "2020-01-16T00:00:00Z";
    const result = countdown(expiryDate);
    expect(result).toBe("15 days left");
  });

  it("\"X hour left\" when less than one day (1 hour)", () => {
    const expiryDate = "2020-01-01T01:24:00Z";
    const result = countdown(expiryDate);
    expect(result).toBe("1 hour left");
  });

  it("\"X hours left\" when less than one day (X hours)", () => {
    const expiryDate = "2020-01-01T06:24:00Z";
    const result = countdown(expiryDate);
    expect(result).toBe("6 hours left");
  });

  it("\"X day left\" when one day remains", () => {
    const expiryDate = "2020-01-02T01:00:00Z";
    const result = countdown(expiryDate);
    expect(result).toBe("1 day left");
  });

});
