import { Ehou } from "../src/Ehou";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Ehou class", () => {
  let ehou: Ehou;

  beforeEach(() => {
    ehou = new Ehou(2024);
  });

  it("should correctly get current ehou", () => {
    const current = ehou.current;
    expect(current).to.not.be.undefined;
    expect(current?.year).to.equal(2024);
  });

  it("should correctly get last ehou", () => {
    const last = ehou.last;
    expect(last).to.not.be.undefined;
    expect(last?.year).to.equal(2023);
  });

  it("should correctly get next ehou", () => {
    const next = ehou.next;
    expect(next).to.not.be.undefined;
    expect(next?.year).to.equal(2025);
  });
});
