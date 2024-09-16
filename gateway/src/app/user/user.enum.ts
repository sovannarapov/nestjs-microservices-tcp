export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum UserStatus {
  INVALID = '0',
  VALID = '1',
}

export enum VerifyMethod {
  URL = 'URL',
  CODE = 'CODE',
}

export enum UserErrorCode {
  DISABLED = 100,
  UNEXPECTED_ROLE,
  NO_DEVICE_SETTING,
  FACILITIES_DO_NOT_MATCH,
}
