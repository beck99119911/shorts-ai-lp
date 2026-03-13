export default function Tokusho() {
  const rows = [
    { label: "販売業者", value: "茂木正之" },
    { label: "代表者", value: "茂木正之" },
    { label: "所在地", value: "千葉県松戸市新松戸3-209" },
    { label: "電話番号", value: "メールにてお問い合わせください（公開請求があれば遅滞なく開示します）" },
    { label: "メールアドレス", value: "shortsai@outlook.jp" },
    { label: "サービス名", value: "ShortsAI" },
    { label: "サービスURL", value: "https://shortsai.net" },
    { label: "販売価格", value: "FREE: ¥0 / STD: ¥680（税込）/月 / PRO: ¥1,480（税込）/月\n※β版期間中は全プラン無料" },
    { label: "支払い方法", value: "クレジットカード（Visa / Mastercard / American Express / JCB）" },
    { label: "支払い時期", value: "月次・前払い。契約日から毎月同日に自動更新" },
    { label: "サービス提供時期", value: "決済完了後、即時利用可能" },
    { label: "キャンセル・返金", value: "いつでもキャンセル可能。キャンセル後は当月末まで利用できます。\n原則として返金は行いません。" },
    { label: "動作環境", value: "インターネット接続環境および最新バージョンのWebブラウザ" },
    { label: "その他特記事項", value: "β版期間中は全プランを無料で提供します。有料化の際は事前にメールでお知らせします。" },
  ];

  return (
    <main style={{ background: "#0c0c0c", color: "#f0f0f0", fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif", minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(12,12,12,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center" }}>
          <a href="/" style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px", textDecoration: "none", color: "#f0f0f0" }}>
            <span style={{ color: "#c8ff00" }}>Shorts</span>AI
          </a>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px 120px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: "-1px" }}>特定商取引法に基づく表記</h1>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 48 }}>最終更新: 2026年3月13日</p>

        <div style={{ background: "#111", border: "1px solid #222", borderRadius: 16, overflow: "hidden" }}>
          {rows.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                borderTop: i === 0 ? "none" : "1px solid #1a1a1a",
              }}
            >
              <div style={{ padding: "16px 20px", background: "#161616", fontSize: 13, color: "#888", fontWeight: 700, lineHeight: 1.6 }}>
                {row.label}
              </div>
              <div style={{ padding: "16px 20px", fontSize: 13, color: "#ccc", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #1e1e1e" }}>
        <p style={{ color: "#333", fontSize: 12 }}>© 2026 ShortsAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
