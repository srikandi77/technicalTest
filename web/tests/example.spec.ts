import { test, expect } from "@playwright/test";

function extractNumber(str: string) {
  const m = str.match(/-?[\d,]+(\.\d+)?/);
  return m ? Number(m[0].replace(/,/g, "")) : NaN;
}

test.only("Test Case 13: Verify Product quantity in Cart", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  //3. Verify that home page is visible successfully
  await expect(
    page.locator(".logo img[src='/static/images/home/logo.png']")
  ).toBeVisible();
  //4. Click 'View Product' for any product on home page
  const firstProductDescription = await page
    .locator(".features_items > div:nth-of-type(2) .productinfo p")
    .innerText();
  const firstProductPrice = await page
    .locator(".features_items > div:nth-of-type(2) .productinfo h2")
    .innerText();

  console.log(firstProductDescription);
  console.log(firstProductPrice);
  await page.locator(".features_items > div:nth-of-type(2) .choose").click();
  //5. Verify product detail is opened
  const productDetailDescription = await page
    .locator(".product-information h2")
    .innerText();
  const productDetailPrice = await page
    .locator(".product-information span > span")
    .innerText();
  await expect(page.locator(".product-information h2")).toBeVisible();
  await expect(productDetailDescription).toBe(firstProductDescription);
  await expect(productDetailPrice).toBe(firstProductPrice);
  await expect(page).toHaveScreenshot("productDetail.png", {
    mask: [page.locator(".product-information span > span")],
    maxDiffPixelRatio: 0.1,
  });
  //6. Increase quantity to 4
  const qty = 4;
  await page.locator("#quantity").fill(`${qty}`);
  //7. Click 'Add to cart' button
  await page.locator(".btn-default.cart").click();
  // 8. Click 'View Cart' button
  await page.locator(".text-center a[href='/view_cart']").click();
  //9. Verify that product is displayed in cart page with exact quantity
  const productCartDescription = await page
    .locator("#product-1 .cart_description a")
    .innerText();
  const productCartPrice = await page
    .locator("#product-1 .cart_price p")
    .innerText();
  const productCartQty = await page
    .locator("#product-1 .cart_quantity button")
    .innerText();
  await expect(page.locator(".cart_quantity button.disabled")).toBeVisible();
  await expect(productCartDescription).toBe(productDetailDescription);
  await expect(productCartPrice).toBe(productDetailPrice);
  await expect(productCartQty).toBe(`${qty}`);
  const total = qty * extractNumber(productCartPrice);
  const productCartTotal = await page
    .locator("#product-1 .cart_total p")
    .innerText();
  await expect(productCartTotal).toBe(`Rs. ${total}`);
});

test("Test Case 6: Contact Us Form", async ({ page }) => {
  await page.goto("http://automationexercise.com");
  //3. Verify that home page is visible successfully
  await expect(
    page.locator(".logo.pull-left img[src='/static/images/home/logo.png']")
  ).toBeVisible();
  //4. Click on 'Contact Us' button
  await page.locator(".nav a[href='/contact_us']").click();
  //5. Verify 'GET IN TOUCH' is visible
  await expect(page.locator(".contact-form h2.title")).toBeVisible();
  //6. Enter name, email, subject and message
  await page.locator("input[name='name'].form-control").fill("ery");
  await page
    .locator("input[name=email].form-control")
    .fill("sri3kandi@yahoo.com");
  await page
    .locator("input[name='subject'].form-control")
    .fill("Hello playwright this is my testing");
  await page
    .locator("textarea[name='message'].form-control")
    .fill("Let's see how far i can go with this new skill?");
  //7. Upload file
  await page.setInputFiles(
    "input[name=upload_file].form-control",
    "E:/training_at/ery/web/tests/Data/bunga.jpg"
  );
  //8. Click 'Submit' button
  await page.locator("input[name=submit].btn").click();
  //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
  //await expect(page.locator(".status.alert.alert-success")).toBeVisible();
  // 11. Click 'Home' button and verify that landed to home page successfully
  //await page.locator(".fa.fa-angle-double-left").click();
});
