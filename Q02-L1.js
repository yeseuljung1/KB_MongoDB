//데이터베이스를 tutorial로 선정하세요.
use tutorial;

//users 컬렉션에 username이 smith인 문서를 저장하세요.
// db는 현재 사용중인 데이터베이슬를 설정한 전역변수
//insert(): 문서 삽입
db.users.insert({username:"smith"});

//users 컬렉션에 username이 jones인 문서를 저장하세요.
db.users.insert({username:"jones"});

//앞에서 저장한 모든 문서를 출력하세요
//find():문서 추출
//파라미터 없을 시엔 전체 출력, mysql이 select문과 비슷
db.users.find();

//앞에서 저장한 문서 중 하나 만 출력하세요
//findOne() :해당하는 문서 중 하나만 출력
db.users.findOne();

//users 컬렉션에서 username이 "jones"인 문서를 찾아서 출력하세요.
//find() 내에 조건을 넣어주면 해당 조건문의 문서만 플력한다
db.users.find({username:"jones"})

//users 컬렉션에서 username이 "jones" 또는 "smith"인 문서를 찾아서 출력하세요
db.users.find({$or:[
    {username:"smith"},
    {username:"jones"}
    ]});
    
//    users 컬렉션에서 username이 smith인 문서에 country 키가 Canada 가 되도록 수정하세요.
//$set 은 문서의 한 부분만 수정
//이외의 파라미터는 생략가능, 생략하면 defalut값이 들어간다.
db.users.update({username:"smith"},{$set:{country:"Canada"}});

//앞의 문서가 올바르게 수정되었는지 확인하세요.
db.users.find({username:"smith"});

//users 컬렉션에서 username이 smith인 문서를 {country: "Canada"}로 대체하고 확인하세요.
//$set이 없으면 문사 전체를 변경할 문서로 덮어씌운다
//MongoInvalidArgumentError :업데이트연산자 필요.
//db.users.update({username:"smith"},{country:"Canada"});  ->에러남

//users 컬렉션에서 username이 smith인 문서를 {username: "smith", country: "Canada"}로대체하고 확인하세요
//db.users.update({country: "Canada"}, {username: "smith", country: "Canada"})->error


//users 컬렉션에서 username이 smith인 문서에서 country 키를 삭제하고,삭제 여부를 확인하세요.
db.users.update({username:"smith"},{$unset:{country:1}})
db.users.find({username:"smith"})

//데이터베이스 전체 목록을 출력하세요.
show dbs;

//현재 사용 중인 데이터베이스의 컬렉션 목록을 출력하세요.
show collections;

//현재 사용 중인 데이터베이스와 users 컬렉션의 상태를 출력하세요
//stats(): 상태 보는 메소드 
db.stats();

//users 컬렉션에서 username이 smith인 문서를 삭제하고, 삭제여부를 확인하세요.
//remove(): 조건에 해당하는 문서를 삭제
//기본적으로 해당하는 문서를 모두 삭제해줌
db.users.remove({username:"smith"})

//smith가 남아있는지 다시 한번 확인해보기 아무것도 안나오는게 정상
db.users.find({username:"smith"})  

//users 컬렉션의 모든 문서를 삭제하고, 삭제 여부를 확인하세요.
//remove() 내에 아무런 조건도 넣지 않으면 모든 문서가 삭제된다
db.users.remove({})
db.users.find({})

//users 컬렉션을 삭제하세요.
//drop() :컬렉션 삭제 
db.users.drop()


