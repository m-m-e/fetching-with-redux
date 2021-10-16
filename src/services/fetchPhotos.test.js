const fetchPhotos = require("./fetchPhotos")
// @ponicode
describe("fetchPhotos.fetchPhotos", () => {
    test("0", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos("network/dns_host")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos("/api/v1/remotes/push/register")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos("v1/accounts")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos("v1/candles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos("/login")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fetchPhotos.fetchPhotos(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
