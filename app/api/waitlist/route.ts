import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const AUDIENCE_ID = '02f95d86-7821-4425-9f35-356041327e3a';
export const WAITLIST_LIMIT = 100;

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const result = await resend.contacts.list({ audienceId: AUDIENCE_ID });
    const count = result.data?.data?.length ?? 0;
    return NextResponse.json({ count, limit: WAITLIST_LIMIT, remaining: Math.max(0, WAITLIST_LIMIT - count) });
  } catch {
    return NextResponse.json({ count: 0, limit: WAITLIST_LIMIT, remaining: WAITLIST_LIMIT });
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Audienceに追加
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    // 登録確認メールを送信（ドメイン認証後に有効になる）
    await resend.emails.send({
      from: 'ShortsAI <noreply@shortsai.net>',
      to: email,
      subject: '【ShortsAI】先行登録を受け付けました',
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0c0c0c;color:#f0f0f0;border-radius:12px;">
          <h1 style="font-size:24px;font-weight:900;margin-bottom:8px;">
            <span style="color:#c8ff00">Shorts</span>AI
          </h1>
          <p style="color:#888;font-size:14px;margin-bottom:24px;">先行登録ありがとうございます</p>
          <p style="font-size:16px;line-height:1.7;margin-bottom:24px;">
            β版の公開時に、このメールアドレスにお知らせします。<br>
            登録者限定で<strong style="color:#c8ff00">初月無料クーポン</strong>をプレゼント予定です。
          </p>
          <p style="color:#555;font-size:12px;">このメールに心当たりがない場合は無視してください。</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
