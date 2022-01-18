import React from 'react';
import styled from '@emotion/styled';
import { Heading } from '../../emotion/Typography';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <HeaderElement>
    <Heading>{title}</Heading>
  </HeaderElement>
);

export default Header;

const HeaderElement = styled.header`
  text-align: center;
`;
