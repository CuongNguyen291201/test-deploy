import { PropsWithoutRef } from "react";

const ErrorView = (props: PropsWithoutRef<{ message?: string }>) => {
  const { message = 'Internal Server Error' } = props;
  return (<div role="alert">
    <p>An Error occurred:</p>
    <pre>{message}</pre>
  </div>)
};

export default ErrorView;