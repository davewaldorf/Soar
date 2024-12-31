import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  height: auto; 

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: ${({ theme }) => theme.typography.h1.size};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.h2.size};
    text-align: center;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #F5F7FA;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 40px;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
  max-width: 255px;
  height: 50px;
  margin-left: ${({ theme }) => theme.spacing.small};

  input {
    border: none;
    outline: none;
    background: transparent;
    font-family: ${({ theme }) => theme.fonts.inter};
    font-size: ${({ theme }) => theme.typography.b2.size};
    color: ${({ theme }) => theme.colors.black};
    width: 100%;

    ::placeholder {
      color: ${({ theme }) => theme.colors.grayMedium};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 455px;
        height: 40px;
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
    width: 25px;
    height: 25px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const EmptyNode = styled.div`
   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export {
  NavbarContainer,
  TopRow,
  Title,
  SearchBar,
  IconButton,
  SearchIcon,
  EmptyNode,
};
