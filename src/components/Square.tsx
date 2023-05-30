export function Square(props: ISquare) {
  const { value, onSquareClick } = props;
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export type TSquare = string | null;

export interface ISquare {
  value?: TSquare;
  onSquareClick: React.MouseEventHandler;
}
