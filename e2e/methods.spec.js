/* eslint-disable no-undef */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe("methods", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should be able use prev and next outside the carousel", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("methods"))).toBeVisible();
    await element(by.id("methods")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-prev")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-next")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-next")).tap();
    await element(by.id("scroll-to-next")).tap();
    await element(by.id("scroll-to-next")).tap();
    await element(by.id("scroll-to-next")).tap();

    // Page 6
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();

    await element(by.id("scroll-to-next")).tap();

    // Page 6
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();
  });

  it("should be able use scroll by a custom number of pages", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("methods"))).toBeVisible();
    await element(by.id("methods")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-plus-two")).tap();

    // Page 3
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-plus-two")).tap();

    // Page 5
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-plus-two")).tap();

    // Page 5
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-next")).tap();

    // Page 6
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeNotVisible();

    await element(by.id("scroll-minus-two")).tap();

    // Page 4
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-minus-two")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-minus-two")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  it("should be able use scroll by a page index", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("methods"))).toBeVisible();
    await element(by.id("methods")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-page-4")).tap();

    // Page 4
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-prev")).tap();
    await element(by.id("scroll-to-prev")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-page-4")).tap();

    // Page 4
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  it("should be able use scroll by a page index (loop)", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("methods-with-loop"))).toBeVisible();
    await element(by.id("methods-with-loop")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-page-4")).tap();

    // Page 4
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-prev")).tap();
    await element(by.id("scroll-to-prev")).tap();

    // Page 2
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("scroll-to-page-4")).tap();

    // Page 4
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });

  it("should be able to start and stop autoplay", async () => {
    await element(by.id("scrollview")).scrollTo("bottom");
    await expect(element(by.id("methods"))).toBeVisible();
    await element(by.id("methods")).tap();

    // Page 1
    await expect(element(by.id("slide-1"))).toBeVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeNotVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("start-autoplay")).tap();

    // Page 2
    await waitFor(element(by.id("slide-2")))
      .toBeVisible()
      .withTimeout(4000);
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeVisible();
    await expect(element(by.id("slide-3"))).toBeNotVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    // Page 3
    await waitFor(element(by.id("slide-3")))
      .toBeVisible()
      .withTimeout(4000);
    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();

    await element(by.id("stop-autoplay")).tap();

    await sleep(3000);

    // Page 3

    await expect(element(by.id("slide-1"))).toBeNotVisible();
    await expect(element(by.id("slide-2"))).toBeNotVisible();
    await expect(element(by.id("slide-3"))).toBeVisible();
    await expect(element(by.id("slide-4"))).toBeNotVisible();
    await expect(element(by.id("slide-5"))).toBeNotVisible();
    await expect(element(by.id("slide-6"))).toBeNotVisible();
    await expect(element(by.id("PinarPrevButton"))).toBeVisible();
    await expect(element(by.id("PinarNextButton"))).toBeVisible();
  });
});
