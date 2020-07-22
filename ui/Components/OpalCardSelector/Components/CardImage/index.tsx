import React, { FC } from 'react';
import { Image } from 'react-native';

interface CardImageProps {
  type: string
};

const CardImage: FC<CardImageProps> = ({ type }) => {
  if (type === "adult")
    return <Image source={require('./opal-adult.png')} />
  else if (type === "concession")
    return <Image source={require('./opal-concession.png')} />
  else
    return null;
}

export default CardImage;