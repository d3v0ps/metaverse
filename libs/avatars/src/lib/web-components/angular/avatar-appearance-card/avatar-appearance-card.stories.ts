// export default {
//   title: 'Molecules/[Obsolete] AppearanceCard',
//   component: AvatarAppearanceCardComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [
//         HttpClientModule,
//         SvgIconModule.forRoot(),

//         CommonModule,
//         BemModule,
//         SvgIconModule,
//         AvatarAppearancePreviewModule,
//       ],
//     }),
//   ],
//   argTypes: {
//     appearance: {
//       control: { type: 'object' },
//     },
//     active: {
//       control: { type: 'boolean' },
//     },
//     showEmptyIcon: {
//       control: { type: 'boolean' },
//     },
//   },
//   parameters: {
//     badges: [BADGE.STABLE],
//   },
// } as Meta<AvatarAppearanceCardComponent>;

// const Template: Story<AvatarAppearanceCardComponent> = (
//   args: AvatarAppearanceCardComponent
// ) => ({
//   props: args,
// });

// export const GLBModel = Template.bind({});
// GLBModel.args = {
//   appearance: glbAppearanceMock,
//   active: false,
//   showEmptyIcon: false,
// };

// export const Image = Template.bind({});
// Image.args = {
//   appearance: imageAppearanceMock,
//   active: false,
//   showEmptyIcon: false,
// };
// Image.parameters = {
//   badges: [BADGE.NEEDS_REVISION],
// };

// export const Active = Template.bind({});
// Active.args = {
//   appearance: glbAppearanceMock,
//   active: true,
//   showEmptyIcon: false,
// };

// export const Empty = Template.bind({});
// Empty.args = {
//   appearance: undefined,
//   active: false,
//   showEmptyIcon: false,
// };
