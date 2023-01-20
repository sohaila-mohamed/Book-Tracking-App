import { getByTestId, render, screen } from "@testing-library/react";
import  '@testing-library/jest-dom'
import Thumbnail  from "./thumbnail";

describe("when rendered with a `image url` prop", () => {
  it("should paste it into the div elements and apply image as background image ", () => {
  const{container}=  render(<Thumbnail img={"img1"} />); 
    expect(
      getByTestId(container,/bookCover/).style.backgroundImage
    ).toEqual('url(img1)');
  });
});
export default{};