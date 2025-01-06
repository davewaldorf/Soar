import React from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar/Avatar";
import { Contact } from "../api/fakeApi";

interface ProfileCardProps extends Contact {
  size?: number;
  isSelected?: boolean; 
  onClick: () => void; 
}

const ProfileCardContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  & > div {
    font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  }
`;

const ProfileName = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

const ProfileRole = styled.div`
  font-size: 12px;
  color: #718ebf;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  image,
  size = 70,
  isSelected = false,
  onClick,
}) => {
  return (
    <ProfileCardContainer isSelected={isSelected} onClick={onClick}>
      <Avatar src={image} size={size} />
      <ProfileName>{name}</ProfileName>
      <ProfileRole>{role}</ProfileRole>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
