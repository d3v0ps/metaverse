// export default {
//   title: 'Molecules/[Obsolete] AppearancePreview',
//   component: AvatarAppearancePreviewComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [
//         HttpClientModule,
//         SvgIconModule.forRoot(),

//         CommonModule,

//         AvatarAppearancePreviewModelViewerModule,
//         AvatarAppearancePreviewImageModule,
//       ],
//     }),
//   ],
//   argTypes: {
//     appearance: {
//       control: { type: 'object' },
//       height: { type: 'string' },
//       width: { type: 'string' },
//     },
//   },
//   parameters: {
//     badges: [BADGE.STABLE],
//   },
// } as Meta<AvatarAppearancePreviewComponent>;

// const Template: Story<AvatarAppearancePreviewComponent> = (
//   args: AvatarAppearancePreviewComponent
// ) => ({
//   props: args,
// });

// export const GLBModel = Template.bind({});
// GLBModel.args = {
//   appearance: glbAppearanceMock,
//   width: '200px',
// };

// export const Image = Template.bind({});
// Image.args = {
//   appearance: imageAppearanceMock,
//   width: '200px',
// };
// Image.parameters = {
//   badges: [BADGE.NEEDS_REVISION],
// };
