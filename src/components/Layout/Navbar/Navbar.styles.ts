import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.small};
    flex-wrap: wrap;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: ${({ theme }) => theme.typography.h1.size};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-left: 10px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #F5F7FA;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 40px;
  gap: ${({ theme }) => theme.spacing.small};

  input {
    border: none;
    outline: none;
    background: transparent;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: ${({ theme }) => theme.typography.b2.size};
    color: ${({ theme }) => theme.colors.black};
    width: 255px;
    height: 50px

    ::placeholder {
      color: ${({ theme }) => theme.colors.grayMedium};
    }
  }
`;

const IconButton = styled.button`
  background-color: #F5F7FA; 
  border: none;
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px; 
  border-radius: 50%; 
  padding: 0;

  img {
    width: 25px; /* Icon size */
    height: 25px; /* Icon size */
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLight}; /* Optional hover effect */
  }
`;

export {
  NavbarContainer,
  Title,
  Container,
  SearchBar,
  IconButton,
};