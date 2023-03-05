const {readFileSync,writeFileSync}=require('fs')

const first =readFileSync('./contents/first.txt','utf8')
const second =readFileSync('./contents/second.txt','utf8')
console.log('start')
console.log(first,second)

writeFileSync(
    './contents/result.txt',
`Here is the Result:${first},${second}`
)
console.log('done')
console.log('next')