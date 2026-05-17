import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.pandai.org/app/sign-in');
  await page.getByRole('textbox', { name: 'Email/Username' }).click();
  await page.getByRole('textbox', { name: 'Email/Username' }).fill('dayanaamirah2020');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('82COMPUTERpong');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
try {
    const closeButton = page.getByRole('button', { name: 'Close' });
    await closeButton.click({ timeout: 3000 });
} catch (e) {
    // 2. Kalau button tak jalan, tekan 'Escape' pada keyboard (Cara paling berkesan tutup modal)
    await page.keyboard.press('Escape');
    console.log('Tekan Escape untuk tutup modal #onshow');
}

// 3. Tunggu sekejap untuk animation modal tu hilang
await page.waitForTimeout(1000);

// 4. Klik Practice (Guna force: true jika masih sangkut)
await page.getByRole('link', { name: ' Practice' }).click({ force: true });
  await page.getByRole('link', { name: 'element 02 English 86' }).click();
 // Klik tab Topical Test
await page.getByRole('tab', { name: 'Topical Test' }).click();

// 1. Tunggu sehingga network stabil (data test dah habis download)
await page.waitForLoadState('networkidle');

// 2. Gunakan locator yang lebih "kuat"
// Kadang-kadang 'Solve' tak ada dalam description, kita cuba cari 'Start' yang visible sahaja
await page.getByRole('link', { name: 'Start', exact: true }).first().click();

// ATAU jika masih gagal, guna force click:
// await page.getByRole('link', { name: 'Start' }).filter({ hasText: 'Start' }).first().click({ force: true });
// 1. Tunggu sehingga 'Loading' spinner hilang (jika ada)
await page.waitForLoadState('networkidle');

// 2. Tunggu sehingga teks "Question" atau sebarang teks soalan muncul
await page.waitForSelector('text=Question', { timeout: 10000 }).catch(() => console.log('Teks Question tak muncul-muncul'));

// 3. Sekarang baru cari radio button
await page.locator('input[type="radio"]').first().click({ force: true });
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29356_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29361_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29358_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29355_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Submit Answer' }).click();
  await page.getByText('Close').click();
  await page.getByRole('link', { name: 'Answer Next Test' }).click();
  await page.locator('#radio1_29494_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29501_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29503_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29504_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29492_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Submit Answer' }).click();
  await page.getByText('Close', { exact: true }).click();
  await page.locator('#exit-exam-btn').click();
  await page.getByRole('tab', { name: 'Topical Test' }).click();
  await page.getByRole('link', { description: 'Answer again', exact: true }).click();
  await page.locator('#radio1_29360_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29356_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29361_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29358_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_29355_2').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Submit Answer' }).click();
  await page.getByText('Close').click();
  await page.locator('#exit-exam-btn').click();
  await page.getByRole('tab', { name: 'Topical Test' }).click();
  await page.getByRole('link', { description: 'View answer', exact: true }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
});
