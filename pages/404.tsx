import { Container } from "@mui/material";
import ErrorView from "../features/error/ErrorView"

const ErrorNotFound = () => {
  return <Container maxWidth="xxl">
    <ErrorView message="Not Found" />
  </Container>
}

export default ErrorNotFound;