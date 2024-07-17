interface ButtonProps {
    handleClickProps: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ handleClickProps }: ButtonProps) => {
  return (
    <div>
        <button onClick={handleClickProps}>Click Me</button>
    </div>
  )
}
export default Button