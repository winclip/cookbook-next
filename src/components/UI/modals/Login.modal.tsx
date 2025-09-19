"use client";

import LoginForm from "@/forms/Login.form";
import CustomModal from "@/components/common/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: IProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Authentication">
      <LoginForm onClose={onClose} />
    </CustomModal>
  );
};

export default LoginModal;
