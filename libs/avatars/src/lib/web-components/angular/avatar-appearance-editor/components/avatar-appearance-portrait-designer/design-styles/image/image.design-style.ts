
import { DesignStyle } from '../models/design-style';

export const imageDesignStyle: DesignStyle = {
  id: 'image',
  license: { type: 'MIT' },
  name: 'Image',
  description: `Accepted types: .png, .jpg, .jpeg, .gif, .svg`,
  hasViewer: true,
  properties: [
    {
      id: 'value',
      type: 'file',
      label: 'Upload file',
      options: [
        {
          id: '.jpg',
          label: 'JPG',
        }
      ]
    }
  ]

}
