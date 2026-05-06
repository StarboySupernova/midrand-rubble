import { FcComboChart } from 'react-icons/fc';

export default {
  name: 'objective',
  title: 'Objective',
  type: 'document',
  icon: FcComboChart,
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
        subtitle: 'objectives',
      };
    },
  },
};
