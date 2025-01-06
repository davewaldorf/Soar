import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfilesList from "./components/ProfileList";
import { Contact, fetchRecentTransactions } from "./api/fakeApi";
import InputSection from "./components/Input";

const TransferWrapper = styled.div`
  background: #ffffff;
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #343c6a;
  margin-bottom: 20px;
`;

const QuickTransfer: React.FC = () => {
  const [profiles, setProfiles] = useState<Contact[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<Contact | null>(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchRecentTransactions().then((data) => {
      setProfiles(data);
    });
  }, []);

  const handleSendClick = () => {
    if (selectedProfile && amount) {
      alert(`Sending ${amount} to ${selectedProfile.name}`);
    } else {
      alert("Please select a profile and enter an amount.");
    }
  };

  return (
    <TransferWrapper>
      <Title>Quick Transfer</Title>
      <ProfilesList
        profiles={profiles}
        selectedProfile={selectedProfile}
        onProfileSelect={(profile) => setSelectedProfile(profile)}
      />
      <InputSection
        amount={amount}
        setAmount={setAmount}
        onSendClick={handleSendClick}
      />
    </TransferWrapper>
  );
};

export default QuickTransfer;
