/* eslint-disable no-undef */

describe("Basic carousel example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to move to the last page and back to the first one using prev/next buttons", async () => {
    await expect(element(by.id("basic"))).toBeVisible();
    await element(by.id("basic")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
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
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();

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
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  describe("disabled controls", () => {
    it("should be able to disable prev/next buttons", async () => {
      await element(by.id("scrollview")).scrollTo("bottom");
      await expect(element(by.id("disabled-controls"))).toBeVisible();
      await element(by.id("disabled-controls")).tap();

      // Page 1
      await expect(element(by.id("slide-1"))).toBeVisible();
      await expect(element(by.id("slide-2"))).toBeNotVisible();
      await expect(element(by.id("slide-3"))).toBeNotVisible();
      await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
      await expect(element(by.id("PinarNextButton"))).toBeNotVisible();
    });
  });
});
