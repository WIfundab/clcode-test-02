# 🎉 Claude Code テストサイト - ドンキホーテ風デザイン

Claude Codeで作成された超派手なテストサイトです！🌟

## 🚀 デモサイト

👉 **ライブサイト**: https://wifundab.github.io/clcode-test-02

## ✨ 特徴

- 🌈 **レインボーグラデーション背景** - 動的に変化する美しいグラデーション
- ⚡ **ネオンボーダー効果** - 光るボーダーとパルスエフェクト
- 🎊 **浮遊アニメーション** - 絵文字が画面を舞い踊る
- 💥 **インタラクティブ効果** - クリックで爆発エフェクト
- ✨ **隠し機能** - キーボードショートカットで特殊効果

## 🎮 隠し機能

- **スペースキー**: 爆発エフェクト
- **Enterキー**: レインボーエフェクト
- **フィーチャーカードクリック**: ランダム光効果

## 🤖 Claude Code Actionで改善

このサイトはClaude Code Actionを使って自動改善できます！

### 🔧 改善の方法

1. **GitHub Issuesを使用**:
   - 新しいIssueを作成
   - ラベル `claude-improve` を追加
   - 改善要望を記述

2. **GitHub Actionsを手動実行**:
   - Actions タブ → "Claude Code Site Improvement"
   - "Run workflow" をクリック
   - 改善要望を入力

3. **コメントで追加要望**:
   - `claude-improve` ラベル付きIssueにコメント
   - 自動でClaude Codeが処理

### 📝 改善要望の例

- "もっとアニメーションを追加して"
- "モバイル表示を改善したい"
- "新しい色のテーマを追加"
- "音楽を追加してほしい"
- "3D効果を入れて"

## 🛠️ セットアップ

### 必要な環境

- GitHub repository
- GitHub Actions enabled
- Claude API key (secrets設定)

### 🔑 Secrets設定

GitHubリポジトリの Settings → Secrets and variables → Actions で以下を設定：

```
ANTHROPIC_API_KEY: your_claude_api_key_here
```

## 📁 ファイル構成

```
├── index.html          # メインHTML
├── style.css           # ドンキ風CSS
├── script.js           # アニメーション効果
├── .github/
│   └── workflows/
│       └── claude-code-improve.yml  # Claude Code Action
└── README.md           # このファイル
```

## 🎨 技術スタック

- **HTML5** - セマンティックマークアップ
- **CSS3** - アニメーションとグラデーション
- **Vanilla JavaScript** - インタラクティブ効果
- **GitHub Actions** - Claude Code自動改善
- **GitHub Pages** - ホスティング

## 🔄 開発フロー

1. **要望受付** - Issues/Comments/Manual trigger
2. **Claude処理** - API経由で改善案生成
3. **自動PR作成** - 改善されたコードでPull Request
4. **レビュー & マージ** - 手動確認後マージ
5. **自動デプロイ** - GitHub Pagesに反映

## 🎉 作成者

- **Claude Code** - AIペアプログラミングツール
- **作成日**: 2025年5月
- **テーマ**: ドン・キホーテ風の派手なデザイン

---

**🚀 このサイトを改善したいですか？**

[新しいIssueを作成](../../issues/new) して `claude-improve` ラベルを付けて改善要望を送ってください！

Claude Codeが自動で改善してくれます！✨