export default function Close({ color }) {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 100'
            preserveAspectRatio='xMidYMid meet'
            style={{ overflow: 'visible ' }}
        >
            <polyline
                points='0,0 100,100'
                stroke={color}
                strokeWidth='20'
                strokeLinecap='round'
            />
            <polyline
                points='0,100 100,0'
                stroke={color}
                strokeWidth='20'
                strokeLinecap='round'
            />
        </svg>
    );
}
