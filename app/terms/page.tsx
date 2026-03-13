export default function Terms() {
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
        <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: "-1px" }}>利用規約</h1>
        <p style={{ color: "#555", fontSize: 13, marginBottom: 48 }}>最終更新: 2026年3月13日</p>

        {[
          {
            title: "第1条（適用）",
            body: "本規約は、ShortsAI（以下「当サービス」）の利用に関して、運営者とユーザーとの間に適用されます。ユーザーは本規約に同意した上で当サービスを利用するものとします。",
          },
          {
            title: "第2条（サービスの内容）",
            body: "当サービスは、ユーザーがアップロードした画像をもとにAIがナレーション・字幕・動画を自動生成するSaaSツールです。生成物の著作権はユーザーに帰属しますが、当サービスの機能・品質については保証しません。",
          },
          {
            title: "第3条（禁止事項）",
            body: "ユーザーは以下の行為を行ってはなりません。\n・法令または公序良俗に違反する行為\n・当サービスのシステムに過大な負荷をかける行為\n・不正アクセスまたはクラッキング行為\n・第三者の権利（著作権・肖像権等）を侵害するコンテンツのアップロード\n・スパム・誹謗中傷・差別的コンテンツの生成目的での利用",
          },
          {
            title: "第4条（料金・支払い）",
            body: "有料プランの料金は当サービスの料金ページに記載の通りです。支払いはクレジットカードによる前払い（月次）とします。β版期間中は全プランを無料で提供します。",
          },
          {
            title: "第5条（キャンセル・返金）",
            body: "有料プランはいつでもキャンセル可能です。キャンセル後は当月末まで利用できます。原則として返金は行いませんが、当サービスの重大な障害による場合は個別に対応します。",
          },
          {
            title: "第6条（サービスの変更・停止）",
            body: "運営者は事前通知なくサービスの内容を変更・停止することがあります。これによりユーザーに生じた損害について、運営者は責任を負いません。",
          },
          {
            title: "第7条（免責事項）",
            body: "当サービスが生成したコンテンツの正確性・品質・第三者への権利侵害について、運営者は一切の責任を負いません。ユーザーは自己の責任においてコンテンツを利用・公開するものとします。",
          },
          {
            title: "第8条（準拠法・管轄）",
            body: "本規約は日本法に準拠します。本規約に関する紛争は、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。",
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
