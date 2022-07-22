import styled from "styled-components";
import { Button } from "@material-ui/core";

const buttonAccess = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  // background: transparent;
`;

export function ButtonAccess() {
  return (
    <div>
      <buttonAccess>
        {" "}
        <Button
          href="https://unitedmasters.com/me/releases"
          variant="outlined"
          size="lg"
          rel="noopener"
          color="primary"
          type="button"
          style={{
            marginRight: 10,
            background: "transparent",
          }}
        >
          Profile
        </Button>
        <Button
          href="/docs"
          target="_blank"
          rel="noopener"
          variant="outlined"
          size="large"
          color="primary"
          type="button"
        >
          Story
        </Button>
      </buttonAccess>
    </div>
  );
}
export default ButtonAccess;
