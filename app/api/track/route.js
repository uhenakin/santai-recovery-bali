import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'santai_user',
  password: process.env.DB_PASSWORD || 'Santa12026',
  database: process.env.DB_NAME || 'santai_db',
});

export async function POST(request) {
  try {
    const body = await request.json();

    const forwardedFor = request.headers.get('x-forwarded-for');
    const serverIp = forwardedFor ? forwardedFor.split(',')[0] : 'Unknown IP';
    const ip = body.ip || serverIp;
    const action = body.action || 'page_visit';
    const city = body.city || 'Unknown';
    const district = body.district || 'Unknown';
    const country = body.country || 'Unknown';

    const id = Math.random().toString(36).slice(2) + Date.now().toString(36);

    let incrementCol = '';
    if (action === 'KUNJUNGAN WEBSITE')  incrementCol = 'visit';
    else if (action === 'Click WhatsApp') incrementCol = 'click_wa';
    else if (action === 'Click Instagram') incrementCol = 'click_ig';
    else if (action === 'Click Email')    incrementCol = 'click_email';

    if (!incrementCol) {
      return NextResponse.json({ success: true, message: "Action tidak dikenal" });
    }

    await db.execute(
      `INSERT INTO TrackingLog (id, ip, country, city, district, ${incrementCol}, first_seen, last_seen)
       VALUES (?, ?, ?, ?, ?, 1, NOW(), NOW())
       ON DUPLICATE KEY UPDATE
         ${incrementCol} = ${incrementCol} + 1,
         city = VALUES(city),
         district = VALUES(district),
         country = VALUES(country),
         last_seen = NOW()`,
      [id, ip, country, city, district]
    );

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error) {
    console.error("Error tracking:", error);
    return NextResponse.json({ success: false, error: "Gagal menyimpan data" }, { status: 500 });
  }
}