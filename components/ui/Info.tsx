import React from "react";
import { MdInfo } from 'react-icons/md';

interface InfoProps {}

const Info = ({}: InfoProps) => {
  return (
    <div>
      <MdInfo size={25} />
    </div>
  )
};

export default Info;
