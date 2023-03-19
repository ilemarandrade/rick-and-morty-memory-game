import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../../__test__/utils/customRender";
import Card from "./index";

const propsToCard = {
  img: "https://placekitten.com/200/200",
  name: "Beth Smith",
  origin: "Alive - Human",
  open: false,
  id: 1,
  position: 1,
  onClick: jest.fn(),
};

describe("<Card />", () => {
  it("Should show the card closed", () => {
    render(<Card {...{ ...propsToCard }} />);

    expect(screen.queryByText(propsToCard.name)).not.toBeInTheDocument();
    expect(screen.queryByText(propsToCard.origin)).not.toBeInTheDocument();
    expect(screen.getByRole("img")).not.toHaveAttribute("src", propsToCard.img);
    expect(screen.getByRole("img")).toHaveAttribute("src", "ricky_morty.png");

    fireEvent.click(screen.getByRole("button"));

    expect(propsToCard.onClick).toBeCalled();
  });

  it("Should show the card open", () => {
    render(<Card {...{ ...propsToCard, open: true }} />);

    expect(screen.getByText(propsToCard.name)).toBeInTheDocument();
    expect(screen.getByText(propsToCard.origin)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", propsToCard.img);
    expect(screen.getByRole("img")).not.toHaveAttribute(
      "src",
      "ricky_morty.png"
    );

    fireEvent.click(screen.getByRole("button"));

    expect(propsToCard.onClick).not.toBeCalled();
  });
});
