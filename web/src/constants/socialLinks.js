import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
  FaLinkedin,
} from 'react-icons/fa';

import { IoIosMailUnread } from 'react-icons/io';

export const socialLinks = [
  {
    name: 'telephone',
    url: 'tel:+27739775953',
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: 'mail',
    url: 'mailto:moorosiholdings@gmail.com',
    icon: <IoIosMailUnread />,
  },
  {
    name: 'whatsapp',
    url: `https://wa.me/27739775953?text=${encodeURIComponent(
      "Hello Moorosi Holdings, I am interested in your logistics and facility management capabilities. Please contact me."
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/moorosiholdings',
    icon: <FaFacebook />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/moorosiholdings_za',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/moorosiholdings',
    icon: <FaLinkedin />,
  },
];
