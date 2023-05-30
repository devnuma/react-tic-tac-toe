export function Moves(props: IMoves) {
  const { history, jumpTo } = props;
  const moves = history.map((_, move) => {
    let description: string;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return <>{moves}</>;
}

export interface IMoves {
  history: unknown[];
  jumpTo: (value: number) => void;
}
