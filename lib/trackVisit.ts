export const trackSiteVisit = async () => {
  try {
    const THIRTY_MINUTES = 30 * 60 * 1000;
    const storageKey = `santai_last_visit_website`;
    const lastVisit = localStorage.getItem(storageKey);
    const now = Date.now();

    if (!lastVisit || now - parseInt(lastVisit) > THIRTY_MINUTES) {
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
          action: 'KUNJUNGAN WEBSITE',
          ip: loc.ip,
          city: loc.city,
          district: district,
          country: loc.country,
        }),
      });
    }
  } catch (error) {
    console.error("Gagal melacak kunjungan:", error);
  }
};
