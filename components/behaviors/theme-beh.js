/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2019-08-09 04:23
 */

const themeBehavior = Behavior({
    behaviors: [],

    properties: {
        theme: Object,
    },

    /**
     * 组件的初始数据
     */
    data: {
        spuList: Array,
        topImg: String,
        randoms: Array
    },

    observers: {
        'theme': function (theme) {
            console.log(theme)
            if (!theme) {
                return
            }
            this.setData({
                spuList: theme.spu_list,
                topImg: theme.internal_top_img,
                descriptions: this.splitDescription(theme.description)
            })
        }
    },

    methods: {
        onGoToSpu(event) {
            const pid = event.currentTarget.dataset.spuId
            wx.navigateTo({
                url: `/pages/detail/detail?pid=${pid}`
            })
        },

        splitDescription(description) {
            if (!description) {
                return []
            }
            console.log(description.split('#'))
            return description.split('#');
        }
    }


})

export {
    themeBehavior
}

