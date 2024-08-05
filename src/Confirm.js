import Button from "./Button";

function Confirm({ children, butOne, butTwo, p, close, onClick }) {
  return (
    <div className="confirm">
      {p && <p className="p">{p}</p>}
      {children}

      <div className="confirmButtons">
        <Button
          onClick={close}
          style={{
            background: "#a9bec9",
            padding: "5px 20px",
          }}
        >
          {butOne}
        </Button>
        <Button
          onClick={onClick}
          style={{
            background: "#f1b038",
            padding: "5px 20px",
          }}
        >
          {butTwo}
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
