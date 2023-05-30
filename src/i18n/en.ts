import { TranslationMessages } from 'react-admin'

const englishMessages = require('ra-language-english')

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  welcome: 'Welcome to bike store',
  menu: {
    posts: 'Posts',
    welcome: 'Welcome to Rental Bike',
    edit: 'Edit',
    user_management: 'User management',
    bike_management: 'Bike management',
    rental_management: 'Rental management',
    rental_list: 'Rental List',
    bike_list: 'Bike List',
    user_list: 'User List',
    dashboard: 'Dashboard',
    Status: 'Status',
    en: 'English',
    vi: 'Vietnamese',
  },
  ra: {
    page: {
      edit: 'Edit',
      list: 'List',
      empty: 'Empty',
      invite: 'Invite',
    },
    notification: {
      item_doesnt_exist: 'Item does not exist',
    },
    input: {
      image: {
        upload_single: 'Select image',
        upload_several: 'Select images',
      },
    },
    action: {
      add_filter: 'Add filter',
      add: 'Add',
      back: 'Go Back',
      bulk_actions: '1 item selected |||| %{smart_count} items selected',
      cancel: 'Cancel',
      clear_input_value: 'Clear value',
      clone: 'Clone',
      confirm: 'Confirm',
      create: 'Create',
      create_item: 'Create %{item}',
      delete: 'Delete',
      edit: 'Edit',
      export: 'Export',
      list: 'List',
      refresh: 'Refresh',
      remove_filter: 'Remove this filter',
      remove: 'Remove',
      save: 'Save',
      search: 'Search',
      show: 'Show',
      sort: 'Sort',
      undo: 'Undo',
      unselect: 'Unselect',
      expand: 'Expand',
      close: 'Close',
      open_menu: 'Open menu',
      close_menu: 'Close menu',
      update: 'Update',
      sendMessage: 'Send message',
      sendEmail: 'Send email',
      sendOTT: 'Send OTT',
      phoneNumber: 'Phone number',
      contentMessage: 'Content message',
      emailReceived: 'Email Received',
      emailSubject: 'Email subject',
      content: 'Content',
      send: 'Send',
      deviceID: 'DeviceID',
      channelOrder: 'Channel order',
    },
    navigation: {
      no_results: 'No results found',
      no_more_results: 'The page number %{page} is out of boundaries. Try the previous page.',
      page_out_of_boundaries: 'Page number %{page} out of boundaries',
      page_out_from_end: 'Cannot go after last page',
      page_out_from_begin: 'Cannot go before page 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
      page_rows_per_page: 'Rows per page:',
      next: 'Next',
      prev: 'Prev',
      skip_nav: 'Skip to content',
    },
  },
  resources: {
    edit: {
      name: 'Update',
    },
    create: {
      name: 'Create',
    },
    detail: {
      name: 'Details',
    },
    show: {
      name: 'Detail',
    },
    supplier_management: {
      name: 'Supplier management',
    },
    service_management: {
      name: 'Service management',
    },
    race: {
      name: 'Race',
    },
    configUser: {
      name: 'Config user',
    },
    permissionManagement: {
      name: 'Permission management',
    },
    userManagement: {
      name: 'User management',
    },
    ottConfig: {
      name: 'OTT management',
    },
    emailConfig: {
      name: 'Email management',
    },
    smsConfig: {
      name: 'SMS management',
    },
    cmsConfig: {
      name: 'CMS management',
    },
    entertainment: {
      name: 'Amusement park',
    },
    football: {
      name: 'Football',
    },
    ticket_type: {
      name: 'Ticket type',
    },
    posts: {
      name: 'Posts management',
      fields: {
        id: 'Id',
        userId: 'UserId',
        title: 'Title',
        body: 'Body',
        content: 'Content',
        status: 'Status',
        assets: 'Image',
      },
    },
  },
}

export default customEnglishMessages
