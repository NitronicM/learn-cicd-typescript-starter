import {expect, test} from "vitest"
import { getAPIKey } from "../api/auth"
import { IncomingHttpHeaders } from "http"

const mapCorrect: IncomingHttpHeaders = {
    authorization: "ApiKey Secret"
}

const mapWrong: IncomingHttpHeaders = {
    authorization: "OnlyValue"
}

test("Correct http header", ()=>{
    expect(
        getAPIKey(mapCorrect)
    ).toBe("Secret")
})

test("Wrong http header", ()=>{
    expect(
        getAPIKey(mapWrong)
    ).toBe("null")
})