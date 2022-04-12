Component({
    properties: {
        data: Object
    },

    data: {
        tags: Array
    },
    //侦听器
    observers: {
        data: function (data) {
            if (!data) {
                return
            }
            if (!data.tags) {
                return
            }
            const tags = data.tags.split('$')
            console.log(tags)
            this.setData({
                tags
            })
        }
    },
// load的事件
// <image bind:load="onImgLoad" style="width:{{w}}rpx;height:{{h}}rpx;" src="{{data.img}}"></image>
    methods: {
        onImgLoad(event) {
            const {width, height} = event.detail
            this.setData({
                w: 340,
                h: 340 * height / width
            })
        },
        onItemTap(event) {
            const pid = event.currentTarget.dataset.pid
            wx.navigateTo({
                url: `/pages/detail/detail?pid=${pid}`
            })
        }
    }
})
