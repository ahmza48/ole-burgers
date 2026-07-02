import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

// Generated app icon / favicon — a bold brand mark.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #d62828 0%, #b41d1d 100%)',
          borderRadius: 96,
          fontSize: 300,
        }}
      >
        🍔
      </div>
    ),
    { ...size },
  );
}
