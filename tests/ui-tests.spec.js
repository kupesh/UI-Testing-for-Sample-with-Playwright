const { test, expect } = require('@playwright/test');

test.describe('UI Testing for SingerSL', () => {

  test('Verify SingerSL homepage title', async ({ page }) => {
    await page.goto('https://www.singersl.com', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/SINGER Sri Lanka/); // Partial match for title
  });

  test('Check if main navigation menu is visible', async ({ page }) => {
    await page.goto('https://www.singersl.com', { waitUntil: 'domcontentloaded' });
    expect(await page.locator('nav').first().isVisible()).toBeTruthy(); // First nav element
  });

  test('Verify the footer section is visible', async ({ page }) => {
    await page.goto('https://www.singersl.com', { waitUntil: 'domcontentloaded' });
    
    // Scroll to bottom to force footer to load
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForSelector('footer', { timeout: 10000 });
    expect(await page.locator('footer').isVisible()).toBeTruthy();
  });
  
});