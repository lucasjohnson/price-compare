import React from 'react';
import { IconType } from '../../enums/Index';
import { FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { ImCross, ImPlus } from 'react-icons/im';

interface IconProps {
  type:
    | string
    | IconType.TWITTER
    | IconType.GITHUB
    | IconType.CROSS
    | IconType.PLUS;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  switch (type) {
    case IconType.TWITTER:
      return <FaTwitter />;
    case IconType.GITHUB:
      return <GoMarkGithub />;
    case IconType.CROSS:
      return <ImCross />;
    case IconType.PLUS:
      return <ImPlus />;
    default:
      return null;
  }
};

export default Icon;
