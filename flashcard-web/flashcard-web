import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.pandai.org/app/sign-in');
  await page.getByRole('textbox', { name: 'Email/Username' }).click();
  await page.getByRole('textbox', { name: 'Email/Username' }).fill('dayanaamirah2020');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('82COMPUTERpong');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  // Tunggu hingga proses Sign In selesai dan Dashboard dimuatkan
  await page.waitForLoadState('networkidle');

  // Cuba klik butang Close jika popup muncul (timeout 5 saat)
  try {
    await page.getByRole('button', { name: 'Close' }).click({ timeout: 5000 });
  } catch (error) {
    console.log('Tiada popup Close muncul, teruskan ke langkah seterusnya.');
  }
  await page.getByRole('link', { name: ' Practice' }).click();
  await page.locator('div:nth-child(4) > .card > .card-content > .card-body').click();
// 1. Klik Start untuk masuk ke subjek (Langkah 3.3)
await page.getByRole('link', { name: 'Start' }).nth(5).click();
await page.waitForLoadState('networkidle');

// 2. Klik pada TAB 'Flashcard' supaya butang 'Practice Flashcard Now' muncul
// Ini adalah langkah kritikal yang sering tertinggal
const flashcardTab = page.getByRole('tab', { name: /Flashcard/i });
if (await flashcardTab.isVisible()) {
    await flashcardTab.click();
    await page.waitForTimeout(1000); // Tunggu tab bertukar
}

// 3. Sekarang baru klik butang 'Practice Flashcard Now' (Langkah 3.4)
await page.getByText('Practice Flashcard Now').first().click();

// 1. Klik Start (Langkah 3.3)
const startBtn = page.getByRole('link', { name: 'Start' }).nth(5);
await startBtn.click();

// 2. Tunggu sehingga halaman baru dimuatkan sepenuhnya
await page.waitForLoadState('networkidle');

// 3. DEBUG: Ambil screenshot untuk lihat apa yang ada di skrin sekarang
// (Fail ini akan tersimpan dalam folder test-results)
await page.screenshot({ path: 'debug-flashcard-screen.png' });

// 4. CUBAAN KLIK: Guna CSS selector yang lebih spesifik jika 'text' gagal
// Kadangkala teks dipecahkan oleh elemen <span> atau <strong>
const flashcardBtn = page.locator('a:has-text("Practice Flashcard Now"), button:has-text("Practice Flashcard Now")').first();

// 5. Semak jika elemen wujud sebelum klik
if (await flashcardBtn.count() > 0) {
    await flashcardBtn.scrollIntoViewIfNeeded();
    await flashcardBtn.click({ timeout: 5000 });
} else {
    // Jika masih tak jumpa, kemungkinan besar kita perlu klik "Topik" dahulu
    console.log("Teks 'Practice Flashcard Now' tidak dijumpai. Mencuba klik manual pada kad pertama...");
    await page.locator('.card').first().click(); // Klik kad pertama sebagai alternatif
    await page.waitForTimeout(2000);
    await page.getByText(/Practice Flashcard Now/i).first().click();
}
// Tambah ini: Tunggu sehingga network stabil
await page.waitForLoadState('networkidle');

// Baris 22: Tambah filter visible: true
// Guna getByText tanpa parameter 'name'
await page.getByText('Practice Flashcard Now').first().click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'Not quite remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'Still forgot' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'Still forgot' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'Got it!' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('link', { name: 'Show answer' }).click();
  await page.getByRole('link', { name: 'I easily remember' }).click();
  await page.getByRole('button', { name: 'Continue to Quick recap!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('group').filter({ hasText: 'Not clean' }).locator('#radio_18430').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Used to describe a situation' }).locator('#radio_18431').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Untidy, not organized, and' }).locator('#radio_18432').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Not containing any things or' }).locator('#radio_18433').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Not containing any things or' }).locator('#radio_18434').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Wanting or needing food' }).locator('#radio_18435').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Working hard, or giving your' }).locator('#radio_18436').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Making very little noise' }).locator('#radio_18437').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Unhappy because you are not' }).locator('#radio_18438').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Next ' }).click();
  await page.getByRole('group').filter({ hasText: 'Unwise, stupid, or not' }).locator('#radio_18439').check();
  await page.getByRole('button', { name: 'Save Answer' }).click();
  await page.getByRole('button', { name: 'Submit Answer' }).click();
  await page.getByRole('button', { name: 'Return to deck' }).click();
  await page.getByRole('link', { name: 'View' }).click();
});
