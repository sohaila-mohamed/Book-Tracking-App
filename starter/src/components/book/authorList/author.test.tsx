// componets/Greetings.test.tsx

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import AuthorList  from "./authorList";

describe("when rendered with a `authors List` prop", () => {
  it("should paste it into the list of div elements ", () => {
    render(<AuthorList authors={["author1"]} />); 
    expect(
      screen.getByText(/author1/)
    ).toBeInTheDocument();
  });
});
export default{};