import {Controller, Get} from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/geturl')
  async home(): Promise<string> {
// npm i cheerio -S 安装html 解析html非常方便，就像在浏览器中使用jquery一样
    const http = require("http")
    const cheerio = require("cheerio")
    const url = 'http://www.baidu.com/'


    let getUrl = (url) => {
      let data = ''
      http.get(url, (result) => {

        result.on('data', (chunk) => {
          data += chunk
        })
        result.on('end', () => {
          let myurl = filterData(data)
          console.log(myurl)
        })
        return result
      })
    }




    let filterData = (data) => {
      const $ = cheerio.load(data)
      let imgUrl = $('img', '#lg').attr('src')
      if (imgUrl.startsWith('//')) {
        imgUrl = 'http:' + imgUrl
      }
      return imgUrl
    }

    getUrl(url)

    return 'Hello Midwayjs!';
  }
}
