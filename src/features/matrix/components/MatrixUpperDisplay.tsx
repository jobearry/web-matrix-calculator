interface MatrixUpperDisplayProps {
  operationLabel?: string;
}

export const MatrixUpperDisplay = ({ operationLabel }: MatrixUpperDisplayProps) => {
  return (
    <div className="">
      {/* {operationLabel && ( */}
        <p className="text-gray-700 text-xs">
          <span className="font-semibold">Holding:</span> {operationLabel}
        </p>
      {/* )} */}
    </div>
  )
}