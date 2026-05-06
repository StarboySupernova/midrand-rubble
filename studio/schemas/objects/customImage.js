import React from 'react';
import { MdImage } from 'react-icons/md';

export default {
  name: 'customImage',
  title: 'Image',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      alt: 'alt',
    },
    prepare(selection) {
      const { imageUrl, alt } = selection;
      return {
        imageUrl,
        alt,
        media: () => <img src={imageUrl} alt={alt} className="custom-image" />, // added a prepare function to the preview object. This function returns a modified media property, which renders an image with the specified src, alt, and a CSS class of "custom-image", essentially ensuring that the generated HTML for the image includes that class name. Once the HTML is rendered in your frontend application, the CSS styles targeting that class name will apply to the images
      };
    },
  },
};
