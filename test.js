fetch('http://localhost:1337/auth',{
    headers: {
        Authorization: 'Bearere eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmFyQG1haWwuY29tIiwiaWF0IjoxNjA0NDA0MzE4LCJleHAiOjE2MDQ0MDc5MTh9.-Cxwj49tJHtHTEo-G7cuQlI0xn2viBRP4fWdHmkxhnI'
    }
}).then(resp=>{
    console.log(resp);
}).catch(err => console.log(err) );