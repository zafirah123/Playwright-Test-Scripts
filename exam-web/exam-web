import { test, expect } from '@playwright/test';

test('Exam Web Test', async ({ page }) => {
    // 1. Login & Navigasi
    await page.goto('https://app.pandai.org/login');
    // ... (Masukkan kod login engineer kat sini) ...

    // 2. Navigasi Terus ke Mathematics
    await page.goto('https://app.pandai.org/app/practice/mathematics');
    await page.waitForLoadState('networkidle');

    // 3. Klik Tab & Cari Exam
    try {
        const tabExam = page.locator('text=/Practice Exam/i').first();
        await tabExam.waitFor({ state: 'visible', timeout: 5000 });
        await tabExam.click({ force: true });
        
        await page.waitForTimeout(3000);
        
        const startBtn = page.locator('a:has-text("Start"), button:has-text("Start")').first();
        await startBtn.click({ force: true });
        
        const confirmBtn = page.locator('text=/Start Now|Flashcard Now/i');
        await confirmBtn.waitFor({ state: 'visible', timeout: 5000 });
        await confirmBtn.click({ force: true });
    } catch (e) {
        console.log('Ada gangguan navigasi, tapi kita cuba teruskan.');
    }

    // 4. Menjawab (Contoh ringkas)
    await page.getByRole('radio').first().check({ force: true });
    await page.getByRole('button', { name: /Save Answer/i }).click();

}); // INI SAJA SATU-SATUNYA PENUTUP DI HUJUNG
