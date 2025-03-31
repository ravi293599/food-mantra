import {render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/dataMocks.json";
import RestaurantCard from "../RestaurantCard"
import '@testing-library/jest-dom'
it("should render the restaurant card with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});