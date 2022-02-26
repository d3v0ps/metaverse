
import { DesignStyle } from '../models/design-style';

export const dim3FileDesignSystem: DesignStyle = {
  id: 'dim3-file',
  license: { type: 'MIT' },
  name: '3D Model',
  description: 'The URL to the 3D model. Only glTF/GLB models are supported',
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
