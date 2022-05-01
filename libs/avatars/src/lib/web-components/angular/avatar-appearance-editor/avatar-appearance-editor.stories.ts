// export default {
//   title: 'Molecules/[Obsolete] AppearanceEditor',
//   component: AvatarAppearanceEditorComponent,
//   decorators: [
//     moduleMetadata({
//       imports: [
//         HttpClientModule,
//         SvgIconModule.forRoot(),

//         CommonModule,
//         BemModule,
//         SvgIconModule,
//         TabsetModule,
//         PopoverModule,
//         ColorPickerSelectModule,
//         FormsModule,
//         ReactiveFormsModule,
//         AvatarAppearanceCardModule,
//         AvatarAppearancePortraitModule,
//       ],
//       declarations: [
//         AvatarAppearanceInfoFormComponent,
//         AvatarAppearanceModelFormComponent,
//         AvatarAppearancePortraitFormComponent,
//       ],
//     }),
//   ],
//   argTypes: {
//     appearance: {
//       control: { type: 'object' },
//     },
//   },
//   parameters: {
//     badges: [BADGE.STABLE],
//   },
// } as Meta<AvatarAppearanceEditorComponent>;

// const Template: Story<AvatarAppearanceEditorComponent> = (
//   args: AvatarAppearanceEditorComponent
// ) => ({
//   props: args,
// });

// export const GLBModel = Template.bind({});
// GLBModel.args = {
//   appearance: glbAppearanceMock,
// };

// export const Image = Template.bind({});
// Image.args = {
//   appearance: imageAppearanceMock,
// };
// Image.parameters = {
//   badges: [BADGE.NEEDS_REVISION],
// };

// export const Empty = Template.bind({});
