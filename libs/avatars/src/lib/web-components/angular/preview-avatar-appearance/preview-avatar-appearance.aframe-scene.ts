import { Appearance } from '../../../domain/models/appearance';

export const previewAvatarAppearanceAframeScene = (
  appearance: Appearance,
  width: string,
  height: string
) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        html, body, a-scene {
          width: ${width};
          height: ${height};
        }
      </style>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/1.2.0/aframe.min.js" integrity="sha512-/gO16YMp20RIqCZXZyvMlzALQqEoiDU0akshw25wFiXCRGl+0p/HPWkOd8HWFn6bnatGhxakGLfYhWaPPVQIyA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </head>
    <body>


      <a-scene
          id="${appearance.src}"
          style="width: ${width}; height: ${height};"
          embedded
          #scene
        >
          <!-- Skybox -->
          <!-- a-sky color="#9fbfff"></a-sky -->

          <!-- Camera -->
          <a-entity
            camera
            id="camera-${appearance.src}"
            position="${appearance.previewCamera?.position || '0 1.5 0.7'}"
            rotation="${appearance.previewCamera?.rotation || '-5 0 0'}"
            scale="${appearance.previewCamera?.scale || '0.4 0.4 0.4'}"
          ></a-entity>

          <!-- Lights -->
          <a-entity
            light="type: ambient; color: #EEE"
            id="light-${appearance.src}"
          ></a-entity>
          <a-entity
            light="type: point; intensity: 0.35; distance: 50; decay: 2"
            position="0 10 0"
            id="light2-${appearance.src}"
          ></a-entity>
          <a-entity
            light="type: directional; color: #FFF; intensity: 0.4"
            position="-0.5 1 1"
            id="light3-${appearance.src}"
          ></a-entity>

          <a-entity
            [attr.id]="'avatar-' + src"
            position="0 0 0"
            scale="1 1 1"
            rotation="0 0 0"
            gltf-model="url(${appearance.src})"
          ></a-entity>
        </a-scene>

    </BODY>
`;
