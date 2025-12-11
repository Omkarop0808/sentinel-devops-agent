export function SentinelLogo({
    size = 32,
    className = ""
}: {
    size?: number;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Gradient Definitions */}
            <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="innerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Shield Outline */}
            <path
                d="M32 4L8 14V30C8 44.36 18.04 57.44 32 60C45.96 57.44 56 44.36 56 30V14L32 4Z"
                stroke="url(#shieldGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="url(#innerGradient)"
            />

            {/* Inner Signal Waves (Radar/Monitoring indicator) */}
            <path
                d="M32 20C26.48 20 22 24.48 22 30C22 35.52 26.48 40 32 40"
                stroke="url(#shieldGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
            />
            <path
                d="M32 26C29.79 26 28 27.79 28 30C28 32.21 29.79 34 32 34"
                stroke="url(#shieldGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
            />

            {/* Center Dot */}
            <circle
                cx="32"
                cy="30"
                r="3"
                fill="url(#shieldGradient)"
            />

            {/* Checkmark (representing verified/secure) */}
            <path
                d="M26 46L30 50L38 42"
                stroke="url(#shieldGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}

// Simple version for very small sizes (favicon)
export function SentinelLogoMark({
    size = 24,
    className = ""
}: {
    size?: number;
    className?: string;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="shieldGradientMark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>

            {/* Solid Shield */}
            <path
                d="M32 4L8 14V30C8 44.36 18.04 57.44 32 60C45.96 57.44 56 44.36 56 30V14L32 4Z"
                fill="url(#shieldGradientMark)"
            />

            {/* White/Light inner detail */}
            <path
                d="M32 20C26.48 20 22 24.48 22 30C22 35.52 26.48 40 32 40"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
            />
            <circle
                cx="32"
                cy="30"
                r="3"
                fill="white"
                opacity="0.9"
            />
        </svg>
    );
}
