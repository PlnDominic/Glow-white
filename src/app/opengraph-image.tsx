import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #003f87, #0056b3)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: 'white',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#003f87',
              fontWeight: 'bold',
              fontSize: 48,
            }}
          >
            GW
          </div>
          <div style={{ fontWeight: 700 }}>GloWhite</div>
        </div>
        <div style={{ fontSize: 32, marginTop: 20, fontWeight: 400 }}>
          Dental Clinic
        </div>
        <div style={{ fontSize: 24, marginTop: 40, opacity: 0.9 }}>
          Precision Care, Tranquil Experience
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}