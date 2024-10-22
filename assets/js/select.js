// ラジオボタンのグループごとの処理を共通化する関数
function setupRadioGroup(radioName) {
    document.querySelectorAll(`input[name="${radioName}"]`).forEach(radio => {
        radio.addEventListener('change', function () {
            // 画像を全てリセット（opacity: 1）
            document.querySelectorAll(`input[name="${radioName}"] + label img`).forEach(img => {
                img.style.opacity = '1';
            });

            // 選択されていない画像をopacity: 0.2に設定
            document.querySelectorAll(`input[name="${radioName}"]`).forEach(r => {
                if (!r.checked) {
                    r.nextElementSibling.querySelector('img').style.opacity = '0.2';
                }
            });
        });
    });
}

// 1stラウンド（先鋒戦）
setupRadioGroup("entry.503852800");

// 2ndラウンド（次鋒戦）
setupRadioGroup("entry.1174206961");

// 3rdラウンド（大将戦）
setupRadioGroup("entry.2109344639");
// ラジオボタンのグループごとの処理を共通化する関数
function setupRadioGroup(radioName) {
    document.querySelectorAll(`input[name="${radioName}"]`).forEach(radio => {
        radio.addEventListener('change', function () {
            // 画像を全てリセット（opacity: 1）
            document.querySelectorAll(`input[name="${radioName}"] + label img`).forEach(img => {
                img.style.opacity = '1';
            });

            // 選択されていない画像をopacity: 0.2に設定
            document.querySelectorAll(`input[name="${radioName}"]`).forEach(r => {
                if (!r.checked) {
                    r.nextElementSibling.querySelector('img').style.opacity = '0.2';
                }
            });
        });
    });
}

// 1stラウンド（先鋒戦）
setupRadioGroup("entry.503852800");

// 2ndラウンド（次鋒戦）
setupRadioGroup("entry.1174206961");

// 3rdラウンド（大将戦）
setupRadioGroup("entry.2109344639");
