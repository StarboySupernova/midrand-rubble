import { FcIdea } from 'react-icons/fc';

export default {
  name: 'value',
  title: 'Value',
  type: 'document',
  icon: FcIdea,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'values',
      };
    },
  },
};
