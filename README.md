# Vue 3 + Pinia 練習專案：跨元件共享狀態

這是一個使用 Vue 3 + Pinia 建立的小練習專案，示範如何透過 Pinia 輕鬆實現 **跨元件共享資料** 的功能。

---

## 🔧 專案功能簡介

- 使用 Composition API 開發 Vue 元件
- 使用 Pinia 管理全域狀態（`count`）
- `CounterA.vue` 可以點擊按鈕讓 count +1
- `CounterB.vue` 會同步顯示最新的 count 值
- 示範多元件共享同一份 store 的觀念

---

## 📁 專案結構

\`\`\`
src/
├─ main.js                 # 初始化 Vue App 並掛載 Pinia
├─ App.vue                # 匯入元件 A / B
├─ components/
│   ├─ CounterA.vue        # 元件 A：按按鈕加 1
│   └─ CounterB.vue        # 元件 B：顯示同步的 count
└─ stores/
    └─ counter.js          # Pinia store：集中管理 count 資料
\`\`\`

---

## 🚀 快速開始

### 1. 安裝依賴套件

\`\`\`bash
npm install
\`\`\`

### 2. 啟動開發伺服器

\`\`\`bash
npm run dev
\`\`\`

瀏覽器預設開啟：http://localhost:5173

---

## 📦 使用技術

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/)（快速建構工具）

---

## 🎯 練習目的

- 熟悉 Vue 3 Composition API 語法
- 理解 Pinia 的 state、action、跨元件共用能力
- 建立元件間共享資料的實作經驗

---

## 🧠 延伸挑戰

想進一步學習？可以試著加入：

- ✅ 計數器加到 localStorage 儲存
- ✅ 加上 `v-model` 綁定輸入欄位
- ✅ 使用 Vue Router 切換畫面仍保持資料同步
- ✅ 加入 Pinia 的 getter 或異步 actions

---

📚 如果你對 Vue 或 Pinia 有興趣，也可以搭配官方教學深入了解：

- [Vue 官方教學](https://vuejs.org/guide/introduction.html)
- [Pinia 官方教學](https://pinia.vuejs.org/introduction.html)
