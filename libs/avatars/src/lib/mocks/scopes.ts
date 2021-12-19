import { Scope } from '../domain/models/scope';

export const centralFactoryManageCalendarsScopeMock: Scope = {
  integration: 'CF',
  domain: 'Calendars',
  scope: 'manage',
};

export const googleManageCalendarsScopeMock: Scope = {
  integration: 'Google',
  domain: 'Calendars',
  scope: 'manage',
};

export const NFTManageTokensScopeMock: Scope = {
  integration: 'NFT',
  domain: 'Tokens',
  scope: 'manage',
};

export const scopesMocks: Scope[] = [
  centralFactoryManageCalendarsScopeMock,
  googleManageCalendarsScopeMock,
  NFTManageTokensScopeMock,
];
