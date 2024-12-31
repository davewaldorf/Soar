import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  src: string; 
  alt?: string;
  size?: number; 
}

const AvatarContainer = styled.div<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F7FA;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primaryLight};
  overflow: hidden; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
`;

const AvatarImage = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover;
`;

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 50 }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage src={src} alt={alt} />
    </AvatarContainer>
  );
};

export default Avatar;
