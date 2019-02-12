{
  let formatDate = function(date){
    return date<10 ? '0'+date : date
  }
  let app = new Vue({
    el:'#app1',
    data:{
      date:new Date(),
      a: 1,
      message:'ABCDEFG',
      className:'',
      tips:'',
      createBtn:'<span>■■■■■■■■■■■</span>'
    },
    filters:{
      onlyABC(value){
        return value.substring(0,3)
      },
      parseDate(value){
        let year = value.getFullYear()
        let month = formatDate(value.getMonth()+1)
        let day = formatDate(value.getDate())
        let hours = formatDate(value.getHours())
        let minutes = formatDate(value.getMinutes())
        let seconds = formatDate(value.getSeconds())
        return `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`
      }
    },
    methods:{
      toLower(){
        this.message = this.message.toLowerCase()
        this.tips = '蛤蛤蛤'
      },
      toUper(){
        this.message = this.message.toUpperCase()
        this.tips = '略略略'
      },
      addBackground(){
        this.className = 'backgroundColor'
      },
      removeBackground(){
        this.className = ''
      }
    },
    mounted() {
        this.timer = setInterval(() => {
        this.date = new Date()
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
  })
}