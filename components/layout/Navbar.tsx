import React, { FC, useRef } from "react";
import styled, { css } from "styled-components";
import { colors, sizes } from "../../styles/variables";
import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router";
import Icon from "../common/Icon";
import { useStore } from "../../utils/store";
import { useClickAway } from "react-use";

const links = [
  { id: "trips", href: "/trips", label: "Your trips", icon: "clock" },
  {
    id: "futureFeature",
    label: "Future feature",
    href: "/future-feature",
    icon: "note",
  },
  {
    id: "futureSection",
    label: "Future section",
    href: "/future-section",
    icon: "globe",
  },
];

const Navbar: FC = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useStore((store) => [
    store.navbar,
    store.setNavbar,
  ]);
  const ref = useRef(null);

  const isActive = (href: string): boolean => router.pathname.includes(href);

  useClickAway(ref, () => {
    if (navbar) setNavbar(false);
  });

  return (
    <Container open={navbar} ref={ref}>
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
              <a>{link.label}</a>
            </Link>
          </NavLink>
        ))}
      </NavLinks>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav<{ open: boolean }>`
  flex-flow: column;
  align-items: flex-start;

  position: absolute;
  z-index: 99;
  height: 100vh;
  left: ${({ open }) => (open ? "0" : "-15rem")};
  top: 0;

  width: 15rem;
  padding: 2rem;
  background-color: ${colors.secondary};
  overflow-y: auto;

  transition: all 0.4s ease-in-out;

  a {
    display: inline-block;
  }

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: ${sizes.tablet}) {
    display: flex;
    position: initial;
    height: initial;
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
  margin-right: 0.75rem;
`;
