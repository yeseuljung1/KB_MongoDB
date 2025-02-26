//numbers 컬렉션에 20,000개의 문서를 생성하세요.
//num:key , i:value 인 문서 20000개 생성
for(let i=0;i<20000;i++){
    db.numbers.insert({num:i})
}

//numbers 컬렉션의 문서 개수를 출력하세요
//count()로 갯수 출력 가능
db.numbers.count()

//numbers 컬렉션에서 num의 값이 20이상 25이하인 문서를 출력하세요.
//$gte : 이상(=>) , $gt :초과
//$lte: 이하(<=) , $lt :미만
//, 로 두가지 조건을 and처럼 사용한다
db.numbers.find({num:{"$gte":20,"$lte":25}})

//위 쿼리의 실행 통계를 출력하세요.
//explain() : 쿼리 수행 성능 통계 자료 출력
db.numbers.find({num:{"$gte":20,"$lte":25}}).explain("executionStats")

//numbers 컬렉션의 num 키에 대해서 인덱스를 생성하세요.
//createIndex() :지정한 키로 오름차순 정렬한 인데그 생성, -1이면 내림차순
db.numbers.ensureIndex({num: 1})

//위에서 생성한 인덱스 정보를 출력하세요.
db.numbers.getIndexs()

//앞에서 작성한 범위 연산 쿼리의 실행 통계를 출력하고, 인덱스가 없을 때와 비교해보세요.
//인덱스를 만들면서 문서 검색 버위가 줄어들었다, 수행 속도가 개선됨
db.numbers.find({num: {"$gt": 199995 }}).explain("executionStats")

