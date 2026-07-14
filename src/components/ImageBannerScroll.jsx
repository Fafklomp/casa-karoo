const images = [
  '/banner/banner-1.jpg',
  '/banner/banner-2.jpg',
  '/banner/banner-3.jpg',
  '/banner/banner-4.jpg',
  '/banner/banner-5.jpg',
  '/banner/banner-6.jpg',
  '/banner/banner-7.jpg',
  '/banner/banner-8.jpg',
  '/banner/banner-9.jpg',
  '/banner/banner-10.jpg',
  '/banner/banner-11.jpg',
  '/banner/banner-12.jpg',
  '/banner/banner-13.jpg',
  '/banner/banner-14.jpg',
  '/banner/banner-15.jpg',
  '/banner/banner-16.jpg',
  '/banner/banner-17.jpg',
  '/banner/banner-18.jpg',
  '/banner/banner-19.jpg',
]

export default function ImageBannerScroll() {
  const doubled = [...images, ...images]

  return (
    <div className="w-full overflow-hidden py-3">
      <div
        className="flex gap-4"
        style={{
          animation: 'scroll-banner 50s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="h-48 md:h-64 w-auto shrink-0 overflow-hidden rounded-sm">
            <img src={src} alt="" className="h-full w-auto object-cover" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-banner {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
