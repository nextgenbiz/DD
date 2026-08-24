export default function DotPattern({ className = "" }: { className?: string }) {
  const dots = [];
  const cols = 6;
  const rows = 6;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push(
        <circle key={`${x}-${y}`} cx={x * 12 + 4} cy={y * 12 + 4} r="2" />
      );
    }
  }
  return (
    <svg
      className={className}
      width={cols * 12}
      height={rows * 12}
      fill="currentColor"
      aria-hidden
    >
      {dots}
    </svg>
  );
}
