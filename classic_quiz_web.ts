import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.pandai.org/app/sign-in');
  await page.getByRole('textbox', { name: 'Email/Username' }).click();
  await page.getByRole('textbox', { name: 'Email/Username' }).fill('diyanaamirah2020');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('82COMPUTERpong');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email/Username' }).click();
  await page.getByRole('textbox', { name: 'Email/Username' }).fill('dayanaamirah2020');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('82COMPUTERpong');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // --- GANTIKAN BARIS 15 DENGAN KOD INI ---

// Cuba klik butang Close jika popup muncul, jika tiada ia akan skip dalam 5 saat
try {
  await page.getByRole('button', { name: 'Close' }).click({ timeout: 5000 });
} catch (e) {
  console.log('Popup tidak muncul, meneruskan ke langkah seterusnya.');
}

// --- SAMBUNG KOD ASAL DI BARIS 16 ---
  // --- GANTIKAN BARIS 25 DENGAN KOD INI ---

// 1. Tunggu sehingga sekurang-kurangnya satu kad subjek muncul di skrin
await page.waitForSelector('.card', { timeout: 15000 });

// 2. Gunakan locator teks yang lebih fleksibel (tidak sensitif pada ruang/ikon)
const subjectCard = page.getByText('English Listening Skills').first();

// 3. Scroll ke elemen tersebut sebelum klik (mengelakkan isu elemen di luar skrin)
await subjectCard.scrollIntoViewIfNeeded();
await subjectCard.click({ force: true });

// --- SAMBUNG KOD ASAL DI BARIS 26 ---
  await page.getByRole('button', { name: 'Back to classic quiz' }).click();
  await page.getByRole('checkbox', { name: 'I\'d like to provide feedback' }).uncheck();
  await page.getByRole('button', { name: 'Submit and open classic quiz' }).click();
  await page.getByRole('link', { name: 'Answer Quiz ' }).first().click();
  await page.getByRole('link', { name: 'Start' }).click();
  await page.locator('#radio1_48234_3').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_48238_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_48237_3').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_48241_4').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.locator('#radio1_48243_1').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Submit Answer' }).click();
  await page.getByRole('link', { name: 'Answer Next Quiz' }).click();
  await page.getByRole('button', { name: 'Yes!' }).click();
});
