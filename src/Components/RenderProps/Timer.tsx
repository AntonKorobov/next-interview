export function Timer({ time }: { time: number }) {
  return <div>{time.toString().length < 2 ? '0' + time : time}</div>;
}
