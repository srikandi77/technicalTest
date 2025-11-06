import{test,expect} from "@playwright/test";

test("Test Case 3: Login User with incorrect email and password", async ({
  page,
}) => {
//     1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
await page.goto("http://automationexercise.com");
//3. Verify that home page is visible successfully
await expect(page.locator(".pull-left img[src='/static/images/home/logo.png']")).toBeVisible();
//4. Click on 'Signup / Login' button
await page.locator(".nav a[href='/login']").click();
//5. Verify 'Login to your account' is visible
await expect(page.locator(".login-form h2")).toBeVisible();
//6. Enter incorrect email address and password
await page.locator("form[action='/login'] input[name=email]").fill("ery@yahoo");
await page.locator("form[action='/login'] input[name=password]").fill("test");
//7. Click 'login' button
await page.locator("form[action='/login'] button[type=submit]").click();
//8. Verify error 'Your email or password is incorrect!' is visible
await expect(page.locator("form[action='/login'] p")).toBeVisible();
});