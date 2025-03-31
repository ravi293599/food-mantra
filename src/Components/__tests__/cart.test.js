import { render } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../Mocks/resDataMocks.json"
import { act } from "react-dom/test-utils"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should load restaurant menu card", async()=>{
    await act(async() => render(<RestaurantMenu />))
})