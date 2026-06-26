// lon/lat → % position on equirectangular map
function toPercent(lon, lat) {
  return {
    x: ((lon + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  }
}

const BADGES = [
  { platform: 'Furnished Finder', color: '#1A56DB', lon: -104.9, lat: 39.7, delay: '0s' },
  { platform: 'Airbnb',           color: '#FF5A5F', lon: -80.2,  lat: 25.8, delay: '0.4s' },
  { platform: 'Airbnb',           color: '#FF5A5F', lon: 2.3,    lat: 48.9, delay: '0.8s' },
  { platform: 'Booking.com',      color: '#003B95', lon: 4.9,    lat: 52.4, delay: '0.2s' },
  { platform: 'Booking.com',      color: '#003B95', lon: 55.3,   lat: 25.2, delay: '0.6s' },
  { platform: 'Airbnb',           color: '#FF5A5F', lon: 115.2,  lat: -8.4, delay: '1s' },
]

export default function WorldMap() {
  return (
    <div className="w-full px-6 md:px-16 py-12 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-6">
        Listed on major platforms worldwide
      </p>

      <div
        className="relative w-full rounded-lg overflow-hidden border border-stone/10"
        style={{ paddingBottom: '50%' }}
      >
        {/* Detailed SVG world map */}
        <img
          src="/world-map.svg"
          alt="World map"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'fill' }}
        />

        {/* Platform badges */}
        {BADGES.map((badge, i) => {
          const { x, y } = toPercent(badge.lon, badge.lat)
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            >
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ animationDelay: badge.delay, backgroundColor: badge.color }}
              />
              <span
                className="relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-tight whitespace-nowrap shadow-sm"
                style={{
                  background: 'white',
                  color: badge.color,
                  border: `1.5px solid ${badge.color}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: badge.color }}
                />
                {badge.platform}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
