/* eslint-disable no-undef */

describe("Custom rendering", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able to move to the last page and back to the first one using prev/next buttons", async () => {
    await expect(element(by.id("custom-render"))).toBeVisible();
    await element(by.id("custom-render")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("custom-prev"))).toBeNotVisible();
    await expect(element(by.id("custom-next"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toHaveText("1/3");

    await element(by.id("custom-next")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("custom-prev"))).toBeVisible();
    await expect(element(by.id("custom-next"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toHaveText("2/3");

    await element(by.id("custom-next")).tap();

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("custom-prev"))).toBeVisible();
    await expect(element(by.id("custom-next"))).toBeNotVisible();
    await expect(element(by.id("custom-dots"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toHaveText("3/3");

    await element(by.id("custom-prev")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("custom-prev"))).toBeVisible();
    await expect(element(by.id("custom-next"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toHaveText("2/3");

    await element(by.id("custom-prev")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("custom-prev"))).toBeNotVisible();
    await expect(element(by.id("custom-next"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toBeVisible();
    await expect(element(by.id("custom-dots"))).toHaveText("1/3");
  });
});
