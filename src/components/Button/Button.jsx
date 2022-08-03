import "./button.css"

const Button = ({ operator, operand, onClick }) => {
    return (
        <button onClick={onClick}>
            {operator}{operand}
        </button>
    )
}

export default Button
