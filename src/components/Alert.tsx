import { ReactNode } from "react";

interface Props {
    onclick: () => void;
}

const Alert = ({onclick}: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {/* {children} */}
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button 
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert" 
        aria-label="Close"
        onClick={onclick}
        ></button>
      </div>
    </>
  )
}

export default Alert