// routing
import { useRouteError } from "react-router-dom";

// implement link return

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{error.message || error.statusText}</i>
      </p>
    </div>
  );
}
