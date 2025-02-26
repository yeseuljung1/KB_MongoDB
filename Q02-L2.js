//데이터베이스를 tutorial로 선정하세요.
use tutorial;

//users 컬렉션에 {username: "smith"} 문서를 추가하세요.
db.users.insert({username:"smith"})

//위의 문서를 다음과 같이 되도록 수정하세요.
db.users.update({username:"smith"},
{
    $set:{
        favorites:{
            cities:["Chocago","Cheyenne"],
            movies:["Casablanca", "For a Few Dollars More", "The Sting"]
        }
    }
})


//users 컬렉션에 {username: "jones"} 문서를 추가하세요.
db.users.insert({username:"jones"})

//위의 문서를 다음과 같이 되도록 수정하세요.
db.users.update({username:"jones"},
{
   $set: {
      favorites: {
         movies: ["Casablanca", "Rocky"]
       }
    }
})


//users 컬렉션의 "Casablanca" 영화를 좋아하는 사용자들을 출력하세요
//favorites.movies : 부모키.자식키 , 문자열 표시 ㅍ필수
//pretty() :코드를 보기 좋게 들여쓰기 해줌
db.users.find({"favorites.movies":"Casablanca"}).pretty()  


//users 컬렉션의 "Casablanca" 영화를 좋아하는 사용자들에 대해서 좋아하는 영화 목록에 "The Maltese Falcon"을 중복 없이 추가하세요. 단, 해당 항목이 없는 경우는 무시하고, 여러 사람이 일치 한다면 모두 업데이트 하세요.
//여러개를 동시에 업데이트 할 경우에는 updateMany()를 권장
db.users.updateMany({"favorites.movies":"Casablanca"},
{$addToSet:{"favorites.movies":"The Maltese"}},
false,
true)
   