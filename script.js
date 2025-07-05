// 元号データ（明治以降）
const eraData = [
    { name: '令和', startYear: 2019, startMonth: 5, startDay: 1 },
    { name: '平成', startYear: 1989, startMonth: 1, startDay: 8 },
    { name: '昭和', startYear: 1926, startMonth: 12, startDay: 25 },
    { name: '大正', startYear: 1912, startMonth: 7, startDay: 30 },
    { name: '明治', startYear: 1868, startMonth: 1, startDay: 25 }
];

// DOM要素の取得
const westernYearInput = document.getElementById('western-year');
const japaneseYearInput = document.getElementById('japanese-year');
const japaneseEraSelect = document.getElementById('japanese-era');
const convertToJapaneseBtn = document.getElementById('convert-to-japanese');
const convertToWesternBtn = document.getElementById('convert-to-western');
const westernResult = document.getElementById('western-result');
const japaneseResult = document.getElementById('japanese-result');

// イベントリスナーの設定
convertToJapaneseBtn.addEventListener('click', convertWesternToJapanese);
convertToWesternBtn.addEventListener('click', convertJapaneseToWestern);

// Enterキーでも変換できるように
westernYearInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertWesternToJapanese();
    }
});

japaneseYearInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertJapaneseToWestern();
    }
});

// 西暦から和暦への変換
function convertWesternToJapanese() {
    const westernYear = parseInt(westernYearInput.value);
    
    // 入力値の検証
    if (!westernYear || westernYear < 1868 || westernYear > 9999) {
        showResult(westernResult, 'エラー: 1868年から9999年までの4桁の数字を入力してください。', 'error');
        return;
    }
    
    // 元号を特定
    const era = getEraForWesternYear(westernYear);
    if (!era) {
        showResult(westernResult, 'エラー: 対応していない年です。', 'error');
        return;
    }
    
    // 和暦年を計算
    const japaneseYear = westernYear - era.startYear + 1;
    
    // 結果を表示
    const resultText = `${westernYear}年は${era.name}${japaneseYear}年です。`;
    showResult(westernResult, resultText, 'success');
}

// 和暦から西暦への変換
function convertJapaneseToWestern() {
    const selectedEra = japaneseEraSelect.value;
    const japaneseYear = parseInt(japaneseYearInput.value);
    
    // 入力値の検証
    if (!selectedEra) {
        showResult(japaneseResult, 'エラー: 元号を選択してください。', 'error');
        return;
    }
    
    if (!japaneseYear || japaneseYear < 1 || japaneseYear > 99) {
        showResult(japaneseResult, 'エラー: 1から99までの数字を入力してください。', 'error');
        return;
    }
    
    // 選択された元号のデータを取得
    const era = eraData.find(e => e.name === selectedEra);
    if (!era) {
        showResult(japaneseResult, 'エラー: 無効な元号です。', 'error');
        return;
    }
    
    // 西暦年を計算
    const westernYear = era.startYear + japaneseYear - 1;
    
    // その元号が有効な期間内かチェック
    if (!isValidEraYear(era, westernYear)) {
        showResult(japaneseResult, 'エラー: その年は該当する元号の期間外です。', 'error');
        return;
    }
    
    // 結果を表示
    const resultText = `${selectedEra}${japaneseYear}年は${westernYear}年です。`;
    showResult(japaneseResult, resultText, 'success');
}

// 西暦年に対応する元号を取得
function getEraForWesternYear(westernYear) {
    for (const era of eraData) {
        if (westernYear >= era.startYear) {
            return era;
        }
    }
    return null;
}

// その元号が指定された西暦年で有効かチェック
function isValidEraYear(era, westernYear) {
    const eraIndex = eraData.indexOf(era);
    if (eraIndex === -1) return false;
    
    // 次の元号の開始年を取得
    const nextEra = eraIndex > 0 ? eraData[eraIndex - 1] : null;
    
    if (nextEra) {
        return westernYear >= era.startYear && westernYear < nextEra.startYear;
    } else {
        // 最新の元号（令和）の場合
        return westernYear >= era.startYear;
    }
}

// 結果を表示する関数
function showResult(element, text, type) {
    const resultText = element.querySelector('.result-text');
    resultText.textContent = text;
    
    // クラスをリセット
    element.className = 'result';
    
    // タイプに応じてクラスを追加
    if (type === 'success') {
        element.classList.add('success');
    } else if (type === 'error') {
        element.classList.add('error');
    }
    
    // アニメーション効果
    element.style.animation = 'none';
    element.offsetHeight; // リフロー
    element.style.animation = 'fadeIn 0.3s ease-out';
}

// 入力フィールドの制限
westernYearInput.addEventListener('input', function() {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
});

japaneseYearInput.addEventListener('input', function() {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
});

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // 入力フィールドにフォーカス
    westernYearInput.focus();
    
    // 初期メッセージを表示
    showResult(westernResult, '西暦を入力して「和暦変換」ボタンを押してください。', '');
    showResult(japaneseResult, '元号を選択して和暦を入力し、「西暦変換」ボタンを押してください。', '');
}); 