import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt =
  'Vehicle Analyse UK vehicle checks for cars, SUVs, motorcycles, vans, trucks, caravans, campervans, and motorhomes';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'linear-gradient(125deg, #111827 0%, #17191a 58%, #29231f 100%)',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -270,
            width: 720,
            height: 720,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(163,78,39,0.38) 0%, rgba(163,78,39,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 140,
            bottom: -240,
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '1px solid rgba(213,138,96,0.22)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: 8,
            background: 'linear-gradient(90deg, #a34e27, #d58a60, #a34e27)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 710,
            padding: '56px 0 56px 72px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 52,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 58,
                height: 58,
                borderRadius: 16,
                border: '1px solid rgba(213,138,96,0.8)',
                background: '#111827',
                color: '#d58a60',
                fontSize: 23,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              VA
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: -1.2,
                }}
              >
                <span>Vehicle </span>
                <span style={{ color: '#d58a60' }}>Analyse</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: 5,
                  color: '#e5c4b1',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2.4,
                }}
              >
                VEHICLE CHECKS · UK
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              color: '#e5a984',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 2.6,
              marginBottom: 18,
            }}
          >
            INDEPENDENT UK VEHICLE CHECKS
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 620,
              fontSize: 53,
              lineHeight: 1.08,
              letterSpacing: -1.8,
              fontWeight: 800,
            }}
          >
            Confidence for every journey.
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 600,
              marginTop: 22,
              color: '#d1d5db',
              fontSize: 19,
              lineHeight: 1.5,
            }}
          >
            Cars, SUVs, motorcycles, vans, trucks, caravans, campervans and motorhomes.
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              marginTop: 30,
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#e5a984', fontSize: 23 }}>✓</span>
            Clear findings in a Digital PDF Report
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            right: 62,
            top: 150,
            display: 'flex',
            flexDirection: 'column',
            width: 350,
            padding: 27,
            borderRadius: 24,
            border: '1px solid rgba(255,255,255,0.16)',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045))',
            boxShadow: '0 26px 80px rgba(0,0,0,0.28)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 22,
              color: '#f3e7df',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: 1.4,
            }}
          >
            YOUR VEHICLE CHECK
            <span
              style={{
                display: 'flex',
                width: 10,
                height: 10,
                borderRadius: 10,
                background: '#d58a60',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
              marginBottom: 23,
              borderRadius: 17,
              border: '1px solid rgba(213,138,96,0.18)',
              background:
                'linear-gradient(145deg, rgba(163,78,39,0.32), rgba(255,255,255,0.035))',
            }}
          >
            <svg width="210" height="96" viewBox="0 0 210 96" fill="none">
              <path
                d="M22 59h14l14-25c3-5 7-8 13-8h66c6 0 10 3 14 8l16 25h17c5 0 9 4 9 9v9h-18a15 15 0 0 0-30 0H72a15 15 0 0 0-30 0H22V59Z"
                stroke="#f3e7df"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M55 29h37v29H39l16-29Zm46 0h25l18 29h-43V29Z"
                stroke="#f3e7df"
                strokeWidth="3"
              />
              <circle cx="57" cy="77" r="9" fill="#17191a" stroke="#d58a60" strokeWidth="4" />
              <circle cx="152" cy="77" r="9" fill="#17191a" stroke="#d58a60" strokeWidth="4" />
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              color: '#ffffff',
              fontSize: 21,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            Digital PDF Report
          </div>
          {['Vehicle-specific findings', 'Clear photos and details', 'Help with your next decision'].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  marginTop: 11,
                  color: '#e5e7eb',
                  fontSize: 15,
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 21,
                    height: 21,
                    borderRadius: 20,
                    background: 'rgba(163,78,39,0.42)',
                    color: '#f3c6aa',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
