"use client";

import { useState, useEffect } from "react";

const steps = [
  { num: "01", title: "写真を選ぶ", desc: "今日撮った写真でいい。何枚でも。順番はあとで変えられる。", icon: "📸" },
  { num: "02", title: "テーマを一言", desc: "「旅行」「新商品」でいい。省略してもいい。あとはAIがやる。", icon: "⚡" },
  { num: "03", title: "投稿する", desc: "ナレーション・字幕・動画が自動で完成。TikTok・YouTube Shorts・Reelsにそのまま投稿できる。", icon: "🚀" },
];

const pains = [
  "CapCutで字幕をひとつひとつ打ち込んでいる",
  "声を録音するのが恥ずかしくて投稿できていない",
  "編集が面倒で、撮った写真がカメラロールに眠っている",
  "毎日投稿したいけど、動画作りに1時間かかっている",
  "投稿したいネタはあるのに、動画化できていない",
];

const comparisons = [
  { label: "ナレーション自動生成", us: true, cap: false, fliki: true },
  { label: "日本語字幕（自然な区切り）", us: true, cap: false, fliki: false },
  { label: "自分の写真をそのまま使える", us: true, cap: true, fliki: false },
  { label: "編集作業ゼロ", us: true, cap: false, fliki: false },
  { label: "縦型ショート動画に特化", us: true, cap: true, fliki: false },
  { label: "日本語向け最適化", us: true, cap: false, fliki: false },
];

const plans = [
  {
    name: "FREE",
    price: "¥0",
    period: "",
    limit: "月3セット",
    cta: "無料で試す",
    highlight: false,
  },
  {
    name: "STD",
    price: "¥680",
    period: "/月",
    limit: "月20セット",
    cta: "始める",
    highlight: true,
  },
  {
    name: "PRO",
    price: "¥1,480",
    period: "/月",
    limit: "無制限",
    cta: "始める",
    highlight: false,
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/waitlist').then(r => r.json()).then(d => setRemaining(d.remaining)).catch(() => {});
  }, []);

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      fetch('/api/waitlist').then(r => r.json()).then(d => setRemaining(d.remaining)).catch(() => {});
    } catch {
      setError("エラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ background: "#0c0c0c", color: "#f0f0f0", fontFamily: "'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif" }}>

      {/* ヘッダー */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(12,12,12,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#c8ff00" }}>Shorts</span>AI
          </span>
          <a href="#waitlist" style={{ background: "#c8ff00", color: "#0c0c0c", fontWeight: 900, fontSize: 13, padding: "8px 20px", borderRadius: 999, textDecoration: "none", letterSpacing: "0.5px" }}>
            先行登録 →
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <section style={{ paddingTop: 140, paddingBottom: 100, paddingLeft: 24, paddingRight: 24, textAlign: "center", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ display: "inline-block", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 999, padding: "6px 16px", fontSize: 12, color: "#c8ff00", fontWeight: 700, marginBottom: 32, letterSpacing: 1 }}>
          β版 先行登録受付中 — 先着100名{remaining !== null ? `（残り${remaining}名）` : ""}
        </div>

        <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 32, maxWidth: 800, margin: "0 auto 32px" }}>
          編集、<span style={{ color: "#c8ff00" }}>いらない。</span>
        </h1>

        <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "#888", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 48px" }}>
          写真を選んで、テーマを一言入れるだけ。<br />
          AIが<strong style={{ color: "#f0f0f0" }}>ナレーション・字幕・動画</strong>をぜんぶ作る。<br />
          あとは投稿するだけ。
        </p>

        <a href="#waitlist" style={{ display: "inline-block", background: "#c8ff00", color: "#0c0c0c", fontWeight: 900, fontSize: 18, padding: "18px 48px", borderRadius: 999, textDecoration: "none", letterSpacing: "-0.3px" }}>
          無料で先行登録する →
        </a>
        <p style={{ color: "#555", fontSize: 12, marginTop: 16 }}>クレジットカード不要。30秒で完了。</p>

        {/* デモ動画枠 */}
        <div style={{ marginTop: 72, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {["旅行", "グルメ", "新商品"].map((label) => (
            <div key={label} style={{ width: 160, aspectRatio: "9/16", background: "#161616", border: "1px solid #2a2a2a", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: 12, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8))" }} />
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ background: "rgba(200,255,0,0.15)", border: "1px solid #c8ff00", color: "#c8ff00", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, marginBottom: 6 }}>
                  テーマ: {label}
                </div>
                <p style={{ fontSize: 10, color: "#888" }}>デモ動画 近日公開</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ペインポイント */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "#c8ff00", fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 24, textAlign: "center" }}>PROBLEM</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 48, textAlign: "center", letterSpacing: "-1px" }}>
            投稿したいのに、<br /><span style={{ color: "#888" }}>できていない理由がある</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {pains.map((pain, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, background: "#161616", border: "1px solid #222", borderRadius: 12, padding: "18px 24px" }}>
                <span style={{ color: "#444", fontSize: 20, flexShrink: 0 }}>✕</span>
                <span style={{ color: "#aaa", fontSize: 15 }}>{pain}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, padding: "32px", background: "#111f00", border: "1px solid #3a5000", borderRadius: 16, textAlign: "center" }}>
            <p style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#c8ff00", letterSpacing: "-0.5px" }}>
              ShortsAIなら、<br />その時間が<span style={{ textDecoration: "line-through", color: "#556600", marginRight: 4 }}>1時間</span> → <strong>3分</strong>になる
            </p>
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "#c8ff00", fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 24, textAlign: "center" }}>HOW IT WORKS</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 64, textAlign: "center", letterSpacing: "-1px" }}>
            3ステップ。<span style={{ color: "#888" }}>それだけ。</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: "#111", border: "1px solid #222", borderRadius: 16, padding: 32 }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ color: "#c8ff00", fontWeight: 900, fontSize: 11, letterSpacing: 3, marginBottom: 8 }}>STEP {s.num}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12, letterSpacing: "-0.5px" }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "#c8ff00", fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 24, textAlign: "center" }}>COMPARISON</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 48, textAlign: "center", letterSpacing: "-1px" }}>
            他のツールと<span style={{ color: "#888" }}>何が違うか</span>
          </h2>
          <div style={{ background: "#111", border: "1px solid #222", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px 100px", background: "#161616", padding: "12px 24px" }}>
              <div style={{ fontSize: 12, color: "#555" }}> </div>
              <div style={{ textAlign: "center", fontWeight: 900, fontSize: 13, color: "#c8ff00" }}>ShortsAI</div>
              <div style={{ textAlign: "center", fontWeight: 700, fontSize: 13, color: "#555" }}>CapCut</div>
              <div style={{ textAlign: "center", fontWeight: 700, fontSize: 13, color: "#555" }}>Fliki</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px 100px", padding: "14px 24px", borderTop: "1px solid #1a1a1a", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "#aaa" }}>{row.label}</span>
                <span style={{ textAlign: "center", fontSize: 18 }}>{row.us ? "✅" : "❌"}</span>
                <span style={{ textAlign: "center", fontSize: 18 }}>{row.cap ? "🟡" : "❌"}</span>
                <span style={{ textAlign: "center", fontSize: 18 }}>{row.fliki ? "🟡" : "❌"}</span>
              </div>
            ))}
          </div>
          <p style={{ color: "#444", fontSize: 11, textAlign: "center", marginTop: 16 }}>🟡 = 一部対応 / 手動作業が必要</p>
        </div>
      </section>

      {/* 料金 */}
      <section style={{ padding: "100px 24px", borderBottom: "1px solid #1e1e1e" }} id="pricing">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "#c8ff00", fontWeight: 700, fontSize: 13, letterSpacing: 2, marginBottom: 24, textAlign: "center" }}>PRICING</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 16, textAlign: "center", letterSpacing: "-1px" }}>
            シンプルな料金
          </h2>
          <p style={{ color: "#555", fontSize: 14, textAlign: "center", marginBottom: 32 }}>β版期間中は全プラン無料</p>

          {/* 1セットとは？ */}
          <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 16, padding: "24px 28px", marginBottom: 40 }}>
            <p style={{ color: "#c8ff00", fontWeight: 700, fontSize: 12, letterSpacing: 2, marginBottom: 16 }}>1セットとは？</p>
            <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { icon: "📸", label: "写真をまとめて\nアップロード", sub: "これが1セット" },
                { icon: "→", label: "", sub: "" },
                { icon: "🔄", label: "テンプレート・BGMを\n変えて何度でも生成", sub: "追加消費なし" },
                { icon: "→", label: "", sub: "" },
                { icon: "🎬", label: "お気に入りの動画を\nそのまま投稿", sub: "" },
              ].map((item, i) => (
                item.icon === "→"
                  ? <span key={i} style={{ color: "#333", fontSize: 24, margin: "0 8px" }}>→</span>
                  : <div key={i} style={{ textAlign: "center", padding: "0 12px" }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
                      <p style={{ fontSize: 12, color: "#aaa", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.label}</p>
                      {item.sub && <p style={{ fontSize: 11, color: "#c8ff00", fontWeight: 700, marginTop: 4 }}>{item.sub}</p>}
                    </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {plans.map((p) => (
              <div key={p.name} style={{
                background: p.highlight ? "#111f00" : "#111",
                border: p.highlight ? "1px solid #c8ff00" : "1px solid #222",
                borderRadius: 16,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
              }}>
                {p.highlight && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#c8ff00", color: "#0c0c0c", fontSize: 11, fontWeight: 900, padding: "3px 14px", borderRadius: 999, whiteSpace: "nowrap" }}>
                    POPULAR
                  </div>
                )}
                <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: 2, color: p.highlight ? "#c8ff00" : "#555" }}>{p.name}</div>
                <div style={{ fontWeight: 900, fontSize: 36, letterSpacing: "-2px", lineHeight: 1 }}>
                  {p.price}<span style={{ fontSize: 14, fontWeight: 400, color: "#555" }}>{p.period}</span>
                </div>
                <div style={{ fontSize: 13, color: "#555" }}>{p.limit}</div>
                <a href="#waitlist" style={{
                  display: "block",
                  textAlign: "center",
                  fontWeight: 900,
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: 14,
                  background: p.highlight ? "#c8ff00" : "#1e1e1e",
                  color: p.highlight ? "#0c0c0c" : "#aaa",
                  marginTop: 8,
                }}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / ウェイトリスト */}
      <section style={{ padding: "100px 24px", textAlign: "center" }} id="waitlist">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-2px" }}>
            今日撮った写真が、<br /><span style={{ color: "#c8ff00" }}>今夜投稿できる。</span>
          </h2>
          <p style={{ color: "#555", fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
            β版の先行登録で、公開時に真っ先にお知らせします。<br />
            登録者限定で初月無料クーポンをプレゼント予定。
          </p>
          {remaining !== null && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#111", border: "1px solid #2a2a2a", borderRadius: 999, padding: "8px 20px", marginBottom: 32, fontSize: 13 }}>
              <span style={{ color: "#555" }}>先着100名限定</span>
              <span style={{ width: 1, height: 12, background: "#2a2a2a" }} />
              <span style={{ color: "#f0f0f0", fontWeight: 900 }}>残り<span style={{ color: "#c8ff00", fontSize: 18 }}>{remaining}</span>名</span>
            </div>
          )}
          {submitted ? (
            <div style={{ background: "#111f00", border: "1px solid #3a5000", borderRadius: 16, padding: 48 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <p style={{ fontWeight: 900, fontSize: 20, color: "#c8ff00" }}>登録完了！</p>
              <p style={{ color: "#555", fontSize: 14, marginTop: 8 }}>公開時にメールでお知らせします。</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 480, margin: "0 auto" }}>
              <input
                type="email"
                required
                placeholder="メールアドレスを入力"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "18px 24px", background: "#161616", border: "1px solid #2a2a2a", borderRadius: 12, color: "#f0f0f0", fontSize: 15, outline: "none", boxSizing: "border-box" }}
              />
              <button type="submit" disabled={loading} style={{ width: "100%", background: "#c8ff00", color: "#0c0c0c", fontWeight: 900, fontSize: 16, padding: "18px", borderRadius: 12, border: "none", cursor: loading ? "not-allowed" : "pointer", letterSpacing: "-0.3px", opacity: loading ? 0.7 : 1 }}>
                {loading ? "登録中..." : "先行登録する →"}
              </button>
            </form>
          )}
          {error && <p style={{ color: "#ff6b6b", fontSize: 13, marginTop: 12 }}>{error}</p>}
          <p style={{ color: "#333", fontSize: 11, marginTop: 24 }}>スパムメールは送りません。いつでも解除できます。</p>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ padding: "40px 24px", textAlign: "center", borderTop: "1px solid #1e1e1e" }}>
        <p style={{ fontWeight: 900, fontSize: 16, marginBottom: 16 }}>
          <span style={{ color: "#c8ff00" }}>Shorts</span>AI
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 20 }}>
          <a href="/terms" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>利用規約</a>
          <a href="/privacy" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>プライバシーポリシー</a>
          <a href="/tokusho" style={{ color: "#444", fontSize: 12, textDecoration: "none" }}>特定商取引法</a>
        </div>
        <p style={{ color: "#333", fontSize: 12 }}>© 2026 ShortsAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
