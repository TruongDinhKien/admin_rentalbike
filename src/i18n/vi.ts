import { TranslationMessages } from 'react-admin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vietnameseMessages = require('ra-language-vietnamese')
const customVietnameseMessages: TranslationMessages = {
  ...vietnameseMessages,
  welcome: 'Chào mừng đến với trang quản lí xe',
  menu: {
    welcome: 'Chào mừng đến với trang quản lí xe',
    posts: 'Bài viết',
    edit: 'Chỉnh sửa',
    user_management: 'Quản lí người dùng',
    bike_management: 'Quản lí xe',
    rental_management: 'Quản lí cho thuê',
    rental_list: 'Danh sách cho thuê',
    bike_list: 'Danh sách xe',
    user_list: 'Danh sách người dùng',
    bill_list: 'Danh sách đơn hàng',
    dashboard: 'Bảng điều khiển',
    Status: 'Trạng thái',
    en: 'Tiếng Anh',
    vi: 'Tiếng Việt',
    create: 'Tạo mới',
    bike_status: 'Trạng thái xe đạp',
  },
  ra: {
    page: {
      edit: 'Chỉnh sửa',
      list: 'Danh sách',
      empty: 'Trống',
      invite: 'Mời',
      create: 'Tạo mới',
    },
    notification: {
      item_doesnt_exist: 'Dữ liệu không tồn tại',
      updated: 'Cập nhật thành công',
      created: 'Tạo thành công',
    },
    input: {
      image: {
        upload_single: 'Chọn ảnh',
        upload_several: 'Chọn ảnh',
      },
    },
    action: {
      add_filter: 'Thêm bộ lọc',
      add: 'Thêm',
      back: 'Trở về',
      bulk_actions: '%{smart_count} đã chọn',
      cancel: 'Hủy bỏ',
      clear_input_value: 'Xóa giá trị',
      clone: 'Nhân bản',
      confirm: 'Xác nhận',
      create: 'Thêm mới',
      delete: 'Xóa',
      edit: 'Sửa',
      export: 'Xuất',
      list: 'Danh sách',
      refresh: 'Làm mới',
      remove_filter: 'Bỏ bộ lọc',
      remove: 'Xóa bỏ',
      save: 'Lưu',
      search: 'Tìm kiếm',
      show: 'Hiển thị',
      sort: 'Sắp xếp',
      undo: 'Hoàn tác',
      unselect: 'Huỷ chọn',
      expand: 'Mở rộng',
      close: 'Đóng',
      open_menu: 'Mở menu',
      close_menu: 'Đóng menu',
      sendMessage: 'Gửi tin nhắn',
      sendEmail: 'Gửi email',
      sendOTT: 'Gửi OTT',
      phoneNumber: 'Số điện thoại',
      contentMessage: 'Nội dung tin nhắn',
      emailReceived: 'Email nhận',
      emailSubject: 'Email subject',
      content: 'Nội dung',
      send: 'gửi',
      deviceID: 'DeviceID',
      channelOrder: 'Kênh đặt',
      tags: 'Nhãn',
      published: 'Trạng thái',
    },
    navigation: {
      no_results: 'Không tìm thấy kết quả nào',
      no_more_results: 'Trang số %{page} đã vượt giới hạn. Vui lòng trở lại trang trước.',
      page_out_of_boundaries: 'Trang số %{page} đã vượt giới hạn',
      page_out_from_end: 'Không thể đi tiếp sau trang cuối',
      page_out_from_begin: 'Không thể trở lại trước trang 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
      page_rows_per_page: 'Số hàng trên mỗi trang:',
      next: 'Tiếp',
      prev: 'Trước',
      skip_nav: 'Bỏ qua nội dung',
    },
  },
  resources: {
    user: {
      email: 'Email',
      phone: 'Số điện thoại',
      firstName: 'Tên',
      lastName: 'Họ',
      uploadAvatar: 'Thay đổi ảnh đại diện',
    },
    edit: {
      name: 'Cập nhật',
    },
    create: {
      name: 'Thêm mới',
    },
    detail: {
      name: 'Chi tiết',
    },
    show: {
      name: 'Chi tiết',
    },
    supplier_management: {
      name: 'Quản lý nhà cung cấp',
    },
    service_management: {
      name: 'Quản lý dịch vụ',
    },
    race: {
      name: 'Giải chạy',
    },
    configUser: {
      name: 'Thông tin tài khoản',
    },
    permissionManagement: {
      name: 'Quản lý nhóm quyền',
    },
    userManagement: {
      name: 'Quản lý người dùng',
    },
    ottConfig: {
      name: 'Quản lý OTT',
    },
    emailConfig: {
      name: 'Quản lý Email',
    },
    smsConfig: {
      name: 'Quản lý SMS',
    },
    cmsConfig: {
      name: 'Quản lý CMS',
    },
    entertainment: {
      name: 'Khu vui chơi',
    },
    football: {
      name: 'Bóng đá',
    },
    ticket_type: {
      name: 'Loại vé',
    },
    posts: {
      name: 'Quản lý bài viết',
      fields: {
        id: 'Mã bài viết',
        userId: 'Mã người dùng',
        title: 'Tiêu đề',
        body: 'Nội dung',
        tags: 'Nhãn',
        content: 'Sự kiện',
        status: 'Trạng thái',
        assets: 'Hình ảnh',
      },
    },
    rental: {
      userName: 'Tên người dùng',
      bikeName: 'Tên xe đạp',
      startTime: 'Thời gian bắt đầu thuê',
      endTime: 'Thời gian trả xe',
      status: 'Trạng thái hoạt động',
      amount: 'Giá',
    },
    bike: {
      id: 'Id',
      name: 'Tên xe',
      description: 'Mô tả',
      price: 'Giá thuê',
      status: 'Trạng thái xe',
      statusName: 'Tên trạng thái',
      active: 'Hoạt động',
      inActive: 'Không hoạt động',
      quantity: 'Số lượng',
    },
    profile: {
      name: 'Thông tin',
      welcome: 'Chào',
      viewProfile: 'Xem thông tin',
      logout: 'Đăng xuất',
    },
    revenue: {
      amount: 'Giá',
      date: 'Ngày thuê',
    },
  },
}

export default customVietnameseMessages
