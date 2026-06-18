import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
    await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('test-tipoca+0-1781765754014qwDn@amazon.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('fc#3vq%%zye$7kuy');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.locator('#nav-link-accountList-nav-line-1')).toContainText('Hello, ZAZ_User1');
});