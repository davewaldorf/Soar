import React, { useState } from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import { Contact } from "../api/fakeApi";
import icons from "../icons";

const ProfilesContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProfilesWrapper = styled.div<{ translateX: number }>`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ translateX }) => `translateX(-${translateX}px)`};
`;

const ArrowContainer = styled.div<{ left?: boolean; visible: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 0;" : "right: 0;")}
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: ${({ visible }) => (visible ? "pointer" : "default")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  z-index: 1;
`;

interface ProfilesListProps {
  profiles: Contact[];
  selectedProfile: Contact | null;
  onProfileSelect: (profile: Contact) => void;
}

const ProfilesList: React.FC<ProfilesListProps> = ({
  profiles,
  selectedProfile,
  onProfileSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProfiles = 3;
  const end = currentIndex + visibleProfiles;

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < profiles.length - visibleProfiles) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <ProfilesContainer>
      <ArrowContainer
        left
        visible={currentIndex > 0}
        onClick={currentIndex > 0 ? handleScrollLeft : undefined}
      >
        <img src={icons.arrowBack} alt="Scroll left" />
      </ArrowContainer>
      <ProfilesWrapper translateX={currentIndex }>
        {profiles.slice(currentIndex, end).map((profile) => (
          <ProfileCard
            key={profile.id}
            id={profile.id}
            name={profile.name}
            role={profile.role}
            image={profile.image}
            isSelected={selectedProfile?.id === profile.id}
            onClick={() => onProfileSelect(profile)}
          />
        ))}
      </ProfilesWrapper>
      <ArrowContainer
        visible={currentIndex < profiles.length - visibleProfiles}
        onClick={currentIndex < profiles.length - visibleProfiles ? handleScrollRight : undefined}
      >
        <img src={icons.arrowNext} alt="Scroll right" />
      </ArrowContainer>
    </ProfilesContainer>
  );
};

export default ProfilesList;
