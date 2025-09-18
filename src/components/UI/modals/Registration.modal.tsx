"use client";

import RegistrationForm from "@/app/forms/Registration.form";
import CustomModal from "@/components/common/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Registration">
      <RegistrationForm onClose={onClose} />
    </CustomModal>
  );
};

export default RegistrationModal;
