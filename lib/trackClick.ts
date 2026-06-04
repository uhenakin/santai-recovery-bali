export const trackAndRedirect = async (platform: string, url: string) => {
  // Buka URL dulu agar tidak diblok browser mobile
  if (url.startsWith('http') || url.startsWith('https')) {
    window.open(url, '_blank');
  } else {
    window.location.href = url;
  }

  try {
    // Cooldown 30 menit per action per browser
    const THIRTY_MINUTES = 30 * 60 * 1000;
    const storageKey = `santai_last_click_${platform}`;
    const lastClick = localStorage.getItem(storageKey);
    const now = Date.now();

    if (lastClick && now - parseInt(lastClick) < THIRTY_MINUTES) {
      return; // Masih dalam cooldown, skip tracking
    }

    localStorage.setItem(storageKey, now.toString());

    const res = await fetch('https://ipwho.is/');
    const loc = await res.json();

    let district = 'Unknown';
    if (loc.latitude && loc.longitude) {
      const geoRes = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${loc.latitude}&longitude=${loc.longitude}&localityLanguage=en`
      );
      const geoData = await geoRes.json();
      district = geoData.locality || 'Unknown';
    }

    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: platform,
        ip: loc.ip,
        city: loc.city,
        district: district,
        country: loc.country,
      }),
    });
  } catch (error) {
    console.error("Gagal melacak klik:", error);
  }
};