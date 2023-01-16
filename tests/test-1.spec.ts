import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('https://itogo.ru/')
  const isMobile = testInfo.project.name.includes('Mobile')
  await page.locator(!isMobile ? "(//nav[@class='header-navigation'])[1]" : "//emp-mobile-navigation").locator("//li[normalize-space()='Войти']").click()
  if(isMobile)
  {
    await page.locator(`text='Войти или зарегистрироваться'`).click()
  }
  await page.waitForTimeout(500)
  await expect(page.locator('mat-dialog-container >>visible=true')).toHaveScreenshot()
})