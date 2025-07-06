const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGPImage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // OGP画像のHTMLファイルを読み込み
    const htmlPath = path.join(__dirname, 'images', 'ogp-image.html');
    await page.goto(`file://${htmlPath}`);
    
    // 1200x630のサイズでスクリーンショットを撮影
    await page.setViewport({ width: 1200, height: 630 });
    await page.screenshot({
        path: path.join(__dirname, 'images', 'ogp-image.png'),
        type: 'png',
        fullPage: false
    });
    
    console.log('OGP画像が生成されました: images/ogp-image.png');
    await browser.close();
}

// スクリプトが直接実行された場合のみ実行
if (require.main === module) {
    generateOGPImage().catch(console.error);
}

module.exports = generateOGPImage; 