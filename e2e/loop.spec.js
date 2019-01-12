/* eslint-disable no-undef */

describe("loop", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it("should be able to go to Page 1 -> Page 2 -> Page 3 -> Page 1", async () => {
    await expect(element(by.id("loop"))).toBeVisible();
    await element(by.id("loop")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarNextButton")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarNextButton")).tap();

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarNextButton")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  it("should be able to go to Page 1 -> Page 3 -> Page 2 -> Page 1", async () => {
    await expect(element(by.id("loop"))).toBeVisible();
    await element(by.id("loop")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarPrevButton")).tap();

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarPrevButton")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarPrevButton")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  it("should be able to go to Page 1 -> Page 3 -> Page 1", async () => {
    await expect(element(by.id("loop"))).toBeVisible();
    await element(by.id("loop")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarPrevButton")).tap();

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("PinarNextButton")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });
});
