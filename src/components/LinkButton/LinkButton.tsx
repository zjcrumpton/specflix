import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Button, { ButtonProps } from '../Button';

interface IProps extends ButtonProps {
  to: string;
}

const LinkButton: FC<IProps> = ({ to, color, label }) => {
  return (
    <Link to={to}>
      <Button color={color} label={label} />
    </Link>
  );
};

export default LinkButton;
