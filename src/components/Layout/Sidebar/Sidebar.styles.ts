import { NavLink } from "react-router";
import styled from "styled-components";

const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  border-right: 1px solid ${(props) => props.theme.colors.grayLight};
  display: flex;
  flex-direction: column;
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 75vw;
    position: fixed;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    transition: left 0.3s ease-in-out;
  }
`;

const SidebarOverlay = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s;
  z-index: 999;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const HamburgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  background: none;
  align-self: flex-start;
  margin: ${(props) => props.theme.spacing.small};
  border: none;
  cursor: pointer;
  z-index: 1100;

  img {
    display: ${(props) => (props.isOpen ? "none" : "block")};
    visibility: ${(props) => (props.isOpen ? "hidden" : "visible")};
    width: 30px;
    height: 30px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: ${(props) => props.theme.spacing.medium};
  margin-bottom: ${(props) => props.theme.spacing.small};
  gap: ${(props) => props.theme.spacing.small};
`;

const SidebarTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.h2.size};
  font-weight: ${(props) => props.theme.typography.h2.weight};
  color: ${(props) => props.theme.colors.primaryDark};
  margin: 0;
`;

const SidebarLogo = styled.img`
  width: 24px;
  height: auto;
`;

const SidebarList = styled.ul`
  list-style: none;
`;

const SidebarItem = styled.li`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarBorder = styled.div`
  position: absolute;
  left: 0px;
  top: 0;
  bottom: 0;
  width: 6px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out;
`;

const SidebarLink = styled(NavLink)`
  position: relative; /* To position the border */
  width: 100%;
  color: ${(props) => props.theme.colors.grayMedium}; 
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${(props) => props.theme.spacing.small} 0; 
  font-size: ${(props) => props.theme.typography.b1.size};
  font-weight: ${(props) => props.theme.typography.b1.weight};
  transition: background 0.3s, color 0.3s, filter 0.3s;
  overflow: hidden;

  img {
    width: 25px;
    margin-right: ${(props) => props.theme.spacing.xl};
    margin-left: ${(props) => props.theme.spacing.xxl};
    filter: grayscale(1) brightness(1) sepia(1) hue-rotate(0deg) saturate(0);
    transition: filter 0.3s;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.black};

    img {
      filter: grayscale(0) brightness(0) sepia(0) hue-rotate(0deg) saturate(1);
    }
  }

  &.active {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};

    ${SidebarBorder} {
      background-color: ${(props) => props.theme.colors.black}; 
    }

    img {
      filter: grayscale(0) brightness(0) sepia(0) hue-rotate(0deg) saturate(1);
    }
  }
`;

export {
  SidebarContainer,
  SidebarHeader,
  SidebarLogo,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  SidebarBorder,
  SidebarLink,
  SidebarOverlay,
  HamburgerButton
};