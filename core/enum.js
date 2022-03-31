/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-10-29 05:48
 */

const CellStatus = {
    FORBIDDEN: 'forbidden',
    SELECTED: 'selected',
    WAITING: 'waiting'
}

const ShoppingWay = {
    CART: 'cart',
    BUY: 'buy'
}

const CouponCenterType = {
    ACTIVITY: 'activity',
    SPU_CATEGORY: 'spu_category'
}

const SpuListType = {
    THEME: 'theme',
    ROOT_CATEGORY: 'root_category',
    SUB_CATEGORY: 'sub_category',
    LATEST: 'latest'
}

const CouponType = {
    FULL_MINUS: 1,
    FULL_OFF: 2,
    NO_THRESHOLD_MINUS: 3
}

const AuthAddress = {
    DENY: 'deny',
    NOT_AUTH: 'not_auth',
    AUTHORIZED: 'authorized'
}

const CouponOperate = {
    PICK: 'pick',
    UNPICK: 'unpick'
}


const OrderStatus = {
    ALL: 0,
    UNPAID: 1,
    PAID: 2,
    DELIVERED: 3,
    FINISHED: 4,
    CANCELED: 5,
}

const BannerItemType = {
  SPU: 1,
  THEME: 2,
  SPU_LIST: 3
}

const OrderExceptionType = {
    BEYOND_STOCK: 'beyond_stock',
    BEYOND_SKU_MAX_COUNT: 'beyond_sku_max_count',
    BEYOND_ITEM_MAX_COUNT: 'beyond_item_max_count',
    SOLD_OUT: 'sold_out',
    NOT_ON_SALE: 'not_on_sale',
    EMPTY: 'empty'
}

const CouponStatus = {
    CAN_COLLECT: 0,
    AVAILABLE: 1,
    USED: 2,
    EXPIRED: 3
}

export {
    CellStatus,
    ShoppingWay,
    SpuListType,
    AuthAddress,
    OrderExceptionType,
    CouponCenterType,
    CouponStatus,
    CouponType,
    CouponOperate,
    OrderStatus,
  BannerItemType
}