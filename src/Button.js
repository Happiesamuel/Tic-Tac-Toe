function Button({ children, style, onClick, disabled }) {
  return (
    <button disabled={disabled} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
