import React, { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles/variables";
import Image from "next/image";
import Link from "next/link";
import Button from "../base/Button";
import { useRouter } from "next/router";
import Icon from "../base/Icon";

const links = [
  { id: "trips", href: "/trips", icon: "clock" },
  { id: "futureFeature", href: "/future-feature", icon: "note" },
  { id: "futureSection", href: "/future-section", icon: "globe" },
];

const Navbar: FC = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.pathname.includes(href);

  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Image src="/logo.svg" alt="Cleevio" height={38} width={134} />
        </a>
      </Link>
      <Button icon="add" onClick={() => router.push("/trips/new")}>
        New Trip
      </Button>
      <NavLinks>
        {links.map((link) => (
          <NavLink key={link.id} active={isActive(link.href)}>
            <NavLinkIcon>
              <Icon name={link.icon} />
            </NavLinkIcon>
            <Link key={link.id} href={link.href}>
              <a>{link.id}</a>
            </Link>
          </NavLink>
        ))}
      </NavLinks>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  width: 15rem;
  padding: 2rem;
  background-color: ${colors.secondary};
  overflow-y: auto;

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
`;

const NavLink = styled.li<{ active?: boolean }>`
  display: flex;
  ${({ active }) =>
    !active &&
    css`
      filter: contrast(0);
    `}

  transition: filter 0.2s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  &:hover {
    filter: none;
  }
`;

const NavLinkIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;
