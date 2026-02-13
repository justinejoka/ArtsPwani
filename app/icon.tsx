import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NGO Website';
export const size = {
    width: 32,
    height: 32,
};

export const contentType = 'image/png';

export default async function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                N
            </div>
        ),
        {
            ...size,
        }
    );
} 