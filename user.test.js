const {fetchData} = require("./fetchData");

describe(`Testing User`,  () => {
    it ("should return 10 users", async () => {
        const users = await fetchData("users");
        expect(users.length).toBe(10);
    })

    it ("should contain user with ID 9", async () => {
   const users = await fetchData("users");
   expect(users).toContainEqual({
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }


    });
    })
})
