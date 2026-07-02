import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generated OpenGraph / Twitter card image.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#161616',
          backgroundImage:
            'radial-gradient(60% 80% at 85% 20%, rgba(214,40,40,0.35) 0%, rgba(22,22,22,0) 60%)',
          color: '#ffffff',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 84,
              height: 84,
              borderRadius: 24,
              background: '#d62828',
              fontSize: 48,
            }}
          >
            🍔
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              textTransform: 'uppercase',
              color: '#c6a15b',
            }}
          >
            Premium Grill
          </div>
        </div>

        <div style={{ fontSize: 96, lineHeight: 1.05, fontWeight: 700 }}>
          Not just a burger.
        </div>
        <div style={{ fontSize: 96, lineHeight: 1.05, color: '#f76565' }}>
          An obsession.
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 34,
            color: '#d1d1d1',
            fontFamily: 'sans-serif',
          }}
        >
          {`${site.name} · ${site.tagline}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
