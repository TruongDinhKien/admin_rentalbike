export class Statuses {
  static readonly ACTIVATED = '100_ACTIVATED'
  static readonly DEACTIVATED = '101_DEACTIVATED'
  static readonly BLOCKED = '102_BLOCKED'
  static readonly DRAFT = '103_DRAFT'
  static readonly ARCHIVE = '104_ARCHIVE'
  static readonly OTHER = '200_OTHER'
}

export class StatusNames {
  static readonly ACTIVATED = 'Activated'
  static readonly DEACTIVATED = 'Deactivated'
  static readonly BLOCKED = 'Blocked'
  static readonly DRAFT = 'Draft'
  static readonly ARCHIVE = 'Archive'
}

export class StatusFieldMetadata {
  static readonly MAPPING: Record<string, any> = {
    [Statuses.ACTIVATED]: {
      name: StatusNames.ACTIVATED,
      color: 'success',
    },
    [Statuses.DEACTIVATED]: {
      name: StatusNames.DEACTIVATED,
      color: 'warning',
    },
    [Statuses.ARCHIVE]: {
      name: StatusNames.ARCHIVE,
      color: 'error',
    },
  }
}

export class ProjectStatuses {
  static readonly ACTIVATED = Statuses.ACTIVATED
  static readonly DEACTIVATED = Statuses.DEACTIVATED
  static readonly DRAFT = Statuses.DRAFT
  static readonly ARCHIVE = Statuses.ARCHIVE

  static readonly ARRAY = [
    {
      id: this.ACTIVATED,
      name: StatusNames.ACTIVATED,
    },
    {
      id: this.DEACTIVATED,
      name: StatusNames.DEACTIVATED,
    },
  ]
}

export class ConfigurationDataType {
  static readonly NUMBER = 'NUMBER'
  static readonly TEXT = 'TEXT'
  static readonly BYTE = 'BYTE'
  static readonly JSON = 'JSON'
}

export class ProjectTypes {
  static readonly COMPANY = 'COMPANY'
  static readonly BRANCH = 'BRANCH'
  static readonly DEPARTMENT = 'DEPARTMENT'
  static readonly GROUP = 'GROUP'
  static readonly TYPE_SET = new Set([this.COMPANY, this.BRANCH, this.DEPARTMENT, this.GROUP])

  static isValid(orgType: string): boolean {
    return this.TYPE_SET.has(orgType)
  }
}

export class MetaLinkTypes {
  static readonly COMMON_LINK = 'common_link'
  static readonly ASSET_IMAGE = 'asset_image'
  static readonly ASSET_FILE = 'asset_file'
  static readonly THUMBNAIL = 'thumbnail'
  static readonly USER_AVATAR = 'user_avatar'
}
