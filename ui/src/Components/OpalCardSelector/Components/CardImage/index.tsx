import React, { FC } from 'react';

import OpalAdultIcon from "_images/opal-adult.svg";
import OpalConcessionIcon from "_images/opal-concession.svg";

interface CardImageProps {
  type: string
};

const CardImage: FC<CardImageProps> = ({ type }) => {
  if (type === "adult")
    return <OpalAdultIcon />
  else if (type === "concession")
    return <OpalConcessionIcon />
  else
    return null;
}

export default CardImage;