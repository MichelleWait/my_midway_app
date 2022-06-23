import {Controller, Get} from '@midwayjs/decorator';


@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
// npm i cheerio -S 安装html 解析html非常方便，就像在浏览器中使用jquery一样
    const http = require("http")
    const cheerio = require("cheerio")
    const url = 'http://www.baidu.com/'

    let getUrl = (url) => {
      let data = ''
      return new Promise(function (resolve, reject) {
        let req = http.get(url, function (result) {
          result.on('data', (chunk) => {
            data += chunk
          })
          result.on('end', () => {
            const $ = cheerio.load(data)
            let imgUrl = $('img', '#lg').attr('src')
            resolve(imgUrl);
            console.log("data" + imgUrl)
          })
          req.on('error',()=> {
            reject()
          });
        })

      })
    }

    let res
    try {
      res = await getUrl(url)
    } catch (e) {

    }

    return res.toString()
  }
}
