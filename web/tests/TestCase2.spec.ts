import { test, expect } from "@playwright/test";

test("Test Case 2: Login User with correct email and password", async ({
  page,
}) => {
  //1. Launch browser
  //2. Navigate to url 'http://automationexercise.com'
  await page.goto("https://automationexercise.com/");
  //3. Verify that home page is visible successfully
  await expect(
    page.locator(".logo.pull-left img[src='/static/images/home/logo.png']")
  ).toBeVisible();
  //4. Click on 'Signup / Login' button
  await page.locator(".navbar-nav a[href='/login']").click();
  //5. Verify 'Login to your account' is visible
  await expect(page.locator(".login-form h2")).toBeVisible();
  //6. Enter correct email address and password
  await page
    .locator("form[action='/login'] input[name=email]")
    .fill("ery@yahoo.com");
  await page
    .locator("form[action='/login'] input[name='password']")
    .fill("test");
  //7. Click 'login' button
  await page.locator("form[action='/login'] button[type='submit']").click();
  //8. Verify that 'Logged in as username' is visible
  await expect(page.locator(".navbar-nav .fa-user")).toBeVisible();
  // // 9. Click 'Delete Account' button
  // await page.locator("li a[href='/delete_account']").click();
  // //10. Verify that 'ACCOUNT DELETED!' is visible
  // await expect(page.locator("h2.title.text-center b")).toBeVisible();
});
