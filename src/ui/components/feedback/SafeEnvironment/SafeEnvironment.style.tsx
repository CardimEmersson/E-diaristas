import { experimentalStyled as styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: white;
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  background: ${({ theme }) => theme.palette.text.secondary};
  font-size: 12px;
`;
