/* global global */
/* global process */

import { MongoClient } from "mongodb"; 

const URI = process.env.MONGO_URI
const options = {}
//객체 수정하고 원하는 옵션을 추가하거나 조정할 수 있다.
/*  주로쓰는옵션
    1. appname - 이름지정
    2. auth - 몽고디비 인증정보 제공
    3. ssl - ssl 연결 사용할지 여부 설정
    4. replicaSet : replicaSet 이름지정
    5. connectTimeoutMS : 연결타임아웃 설정
    6. socketTimeoutMS : 소켓 타임아웃 설정
*/

if(!URI) throw new Error('Please add your Mongo URI')

let client = new MongoClient(URI, options)
let clientPromise

if(process.env.NODE_ENV !== 'production') {
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise
