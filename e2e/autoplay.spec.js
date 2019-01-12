/* eslint-disable no-undef */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe("Autoplay feature", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should autoplay without loop enabled", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("autoplay-without-loop"))).toBeVisible();
    await element(by.id("autoplay-without-loop")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await sleep(3100);

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await sleep(3100);

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();

    await sleep(3100);

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();
  });

  it("should autolay with loop enabled", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("autoplay"))).toBeVisible();
    await element(by.id("autoplay")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await sleep(3100);

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await sleep(3100);

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await sleep(3100);

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });
});
