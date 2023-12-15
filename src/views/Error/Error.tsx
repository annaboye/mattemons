import { Link } from "react-router-dom";

export const Error= () => {
    return (
      <>
        <div>Denna sida finns inte tyvärr: <Link to={"/"}>tillbaka till start</Link></div>
      </>
    );
  };