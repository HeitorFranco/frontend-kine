import styled from "styled-components";
import { FiCoffee } from "react-icons/fi";

import { IoCloseSharp } from "react-icons/io5";

interface ContainerProps {
  open: boolean;
}

interface MenuItemsProps {
  active?: boolean;
}

interface Indicador {
  index: number;
}

export const Container = styled.div<ContainerProps>`
  background-color: #c3cfd9;
  position: fixed;
  left: ${({ open }) => (open ? 0 : "-300px")};
  width: 300px;
  height: 100%;
  z-index: 1;

  transition: left 0.5s;

  border-right: 3px solid #788896;
  border-bottom: 3px solid #788896;
  padding-top: 120px;
`;

export const CloseSidebar = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;
export const CloseIcon = styled(IoCloseSharp)`
  color: #4b5c6b;
  font-size: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 60%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.span`
  color: #293845;
  font-weight: 600;
  font-size: 20px;
  margin-top: 10px;
`;

export const Menu = styled.div`
  margin-top: 30px;
  position: relative;
`;
export const Indicator = styled.div<Indicador>`
  width: 5px;
  height: 45px;
  background-color: #6558f5;

  position: absolute;
  margin-top: ${({ index }) => index * 25}%;
  margin-left: -10px;

  transition: margin-top 0.1s;
`;
export const MenuItem = styled.a<MenuItemsProps>`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 10px;
  color: ${({ active }) => (active ? "#6558f5" : "#293845")};
  cursor: pointer;
  font-weight: 500;
`;

export const Icon = styled(FiCoffee)<MenuItemsProps>`
  font-size: 25px;
  margin-right: 10px;
  color: ${({ active }) => (active ? "#6558f5" : "#4b5c6b")};
`;