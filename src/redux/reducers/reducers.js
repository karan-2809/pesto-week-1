import {combineReducers} from 'redux'

const test = {
    "results": [{
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Gordon",
            "last": "Adams"
        },
        "location": {
            "street": {
                "number": 8135,
                "name": "Crockett St"
            },
            "city": "Edgewood",
            "state": "Maine",
            "country": "United States",
            "postcode": 39437,
            "coordinates": {
                "latitude": "89.7192",
                "longitude": "-166.8857"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "gordon.adams@example.com",
        "login": {
            "uuid": "60fd2455-8934-479c-9814-cbff1f14b9a9",
            "username": "bigelephant795",
            "password": "lenny",
            "salt": "HKprEKUe",
            "md5": "074c5dbca3e48a1c7dda2233e7b2a69e",
            "sha1": "f8c47d72ee8f92b409fa8ac00bf7ab76c37d224a",
            "sha256": "33c9966782e1b8f839826bbf754196f358390d17c481e4943bdd43f4a5f37d94"
        },
        "dob": {
            "date": "1982-02-08T01:13:43.614Z",
            "age": 39
        },
        "registered": {
            "date": "2019-08-12T01:40:20.276Z",
            "age": 2
        },
        "phone": "(090)-275-6673",
        "cell": "(416)-528-0194",
        "id": {
            "name": "SSN",
            "value": "326-77-2659"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/97.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
        },
        "nat": "US"
    }],
    "info": {
        "seed": "909f744ca404d733",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
};

function dataReducers(state = test.results[0], action) {
    console.log(state);
    switch (action.type) {
        case 'UPDATE_DATA': {
            return action.payload;
        }
        default:
            return state
    }
}

export default combineReducers({data: dataReducers});