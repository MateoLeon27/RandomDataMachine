import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #19cdd8;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 200ms ease-in-out;

  &:hover {
    border-top: 2px solid #19cdd8;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks() {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="a">About us</Link>
        </LinkItem>
        <LinkItem>
          <Link href="a">Events</Link>
        </LinkItem>
        <LinkItem>
          <Link href="a">Profile</Link>
        </LinkItem>
        <LinkItem>
          <Link href="a">Contact</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
