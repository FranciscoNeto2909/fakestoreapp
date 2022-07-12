import cartSlice, { showMessage, hideMessage,setMessage } from "./slice"

describe("cart slice test", () => {
    describe("initialState test", () => {
        test("if initialstate is ok", () => {
            expect(cartSlice(undefined, {})).toEqual({ cart: [], isMessage: false, message: "" })
        })
    })
    describe("showMessage test", () => {
        test("if isMessage change to true", () => {
            expect(cartSlice(undefined, showMessage())).toEqual({ cart: [], isMessage: true, message: ""})
        })
    })
    describe("hideMessage test", () => {
        test("if isMessage change to false", () => {
            expect(cartSlice(undefined, hideMessage())).toEqual({ cart: [], isMessage: false, message: ""})
        })
    })
    describe("setMessage test", () => {
        test("if the message changes to written text", () => {
            expect(cartSlice(undefined, setMessage("test"))).toEqual({ cart: [], isMessage: false, message:"test"})
        })
    })
})