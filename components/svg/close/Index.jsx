export default function Close({ color }) {
    return (
        <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 100'
            preserveAspectRatio='false'
        >
            <polyline points='0,0 100,100' stroke={color} strokeWidth='15' />
            <polyline points='0,100 100,0' stroke={color} strokeWidth='15' />
        </svg>
    );
}
