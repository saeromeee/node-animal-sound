//node index.js 서버시작
//npm run start:dev 서버시작 및 서버변화 자동감지 

const express = require('express')
var cors =require('cors')
const app = express()
const port = 3000

app.use(cors()) //app은 서버를 의미 ()안에 조건을 설정해 어디서 요청하는지에 따라 허용해주거나 차단

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const q = req.params //아이디라는 키를 가진 파라미터 값을 담는다.
    console.log(q.id); //=>lykeion

    //const q = req.query
    //console.log(q);
    res.send({'sound':q.id})
    //{"sound":"lykeion"}
  })
app.get('/sound/:name', (req, res) => {
    const {name} = req.params // {name : dog} 생성    
    console.log("서버쪽 콘솔 :" ,name); // => name에 중괄호 없을시 서버쪽 콘솔 : { name: 'asdf' }
                                       // => 서버쪽 콘솔 : asdf 

    if(name=="dog"){res.send({"sound":"멍멍"})}
    else if(name=="cat"){res.send({"sound":"에오웅"})}
    else if(name=="cow"){res.send({"sound":"음무어어어"})}
    else if(name=="hyunjun"){res.send({"sound":"멍멍"})}
    else {res.send({"sound":"그게뭔데 씹덕아"})}
  })
  
app.get('/suck', (req, res) => {
    res.send({'sound':'써글'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})