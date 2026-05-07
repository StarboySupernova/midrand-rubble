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
    name: "call-sbusiso",
    url: "tel:+27810786434",
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: "call-tshiamo",
    url: "tel:+27836512596",
    icon: <FaPhoneSquareAlt />,
  },
  {
    name: "whatsapp",
    url: `https://wa.me/27786112695?text=${encodeURIComponent(
      "Hi Midrand Rubble Removal, I am interested in your services and I would like a quick quote",
    )}`,
    icon: <FaWhatsappSquare />,
  },
  {
    name: "mail",
    url: "mailto:midrandrubbleremoval1@gmail.com",
    icon: <IoIosMailUnread />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/midrandrubble",
    icon: <FaFacebook />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/midrandrubble",
    icon: <FaTwitter />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/midrandrubble",
    icon: <FaLinkedin />,
  },
];
