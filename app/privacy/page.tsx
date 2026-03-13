export default function Privacy() {
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
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: "-1px" }}>プライバシーポリシー</h1>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 48 }}>最終更新: 2026年3月13日</p>

        {[
          {
            title: "1. 収集する情報",
            body: "当サービスは以下の情報を収集します。\n・メールアドレス（先行登録・アカウント登録時）\n・アップロードされた画像ファイル（動画生成処理のみに使用、生成後即時削除）\n・アクセスログ（IPアドレス、ブラウザ情報、利用状況）\n・決済情報（Stripeが直接管理。当サービスはカード番号を保持しません）",
          },
          {
            title: "2. 情報の利用目的",
            body: "収集した情報は以下の目的で利用します。\n・サービスの提供・改善\n・ユーザーへのお知らせ・サポート対応\n・不正利用の防止\n・利用状況の分析（匿名化した上で使用）",
          },
          {
            title: "3. 第三者への提供",
            body: "運営者は、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供しません。\n\nなお、以下のサービスを利用しています。\n・Resend（メール送信）: https://resend.com/privacy\n・Stripe（決済）: https://stripe.com/jp/privacy\n・Vercel（インフラ）: https://vercel.com/legal/privacy-policy",
          },
          {
            title: "4. アップロード画像の取り扱い",
            body: "アップロードされた画像は動画生成処理にのみ使用し、生成完了後に自動的に削除されます。画像を学習データとして使用することはありません。",
          },
          {
            title: "5. Cookieの使用",
            body: "当サービスはセッション管理・アクセス解析のためにCookieを使用します。ブラウザの設定でCookieを無効化することが可能ですが、一部機能が制限される場合があります。",
          },
          {
            title: "6. 情報の開示・訂正・削除",
            body: "ユーザーは自身の個人情報の開示・訂正・削除を請求できます。下記のお問い合わせ先までご連絡ください。",
          },
          {
            title: "7. お問い合わせ",
            body: "プライバシーに関するお問い合わせは以下までお願いします。\nメール: support@shortsai.net",
          },
        ].map((sec) => (
          <div key={sec.title} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 900, marginBottom: 12, color: "#f0f0f0" }}>{sec.title}</h2>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.9, whiteSpace: "pre-line" }}>{sec.body}</p>
          </div>
        ))}
      </div>

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #1e1e1e" }}>
        <p style={{ color: "#333", fontSize: 12 }}>© 2026 ShortsAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
