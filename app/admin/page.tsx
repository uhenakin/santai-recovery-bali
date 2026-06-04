export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#000000] p-6">
      
      <div className="max-w-[1400px] mx-auto mb-6">
        <h1 className="text-3xl font-bold text-[#D4AF37] font-serif">
          Santai Tracker Admin
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Live Analytics Dashboard (Grafana Port 3000)
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto bg-[#111217] rounded-xl overflow-hidden border border-white/10" style={{ height: '80vh' }}>
        <iframe
          // PERHATIKAN: URL sekarang mengarah ke localhost:3000 (Grafana)
          src="http://localhost:3000/d/MASUKKAN-ID-DASHBOARD/santai-tracker?orgId=1&theme=dark&kiosk=tv" 
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ display: 'block' }}
          title="Grafana Dashboard"
        ></iframe>
      </div>

    </div>
  );
}