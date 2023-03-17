import "@testing-library/jest-dom";
import Button from "./index";
import { Link } from "react-router-dom";
import { render, screen, fireEvent } from "../../__test__/utils/customRender";

const propsAsAnchor = {
  label: "Label",
  href: "/iAmHref",
  component: "a",
};

const propsAsLink = {
  label: "Label With Link",
  to: "/iAmTo",
  component: Link,
};

const propsAsButton = {
  label: "Label to Button",
  onClick: jest.fn(() => {}),
};

describe("<Button />", () => {
  describe("Should show variants buttons", () => {
    it("Should show button primary", () => {
      render(<Button {...{ ...propsAsAnchor, color: "primary" }} />);
      const button = screen.getByText(propsAsAnchor.label);
      expect(button).toHaveAttribute("color", "primary");
    });

    it("Should show button secondary", () => {
      render(<Button {...{ ...propsAsAnchor, color: "secondary" }} />);
      const button = screen.getByText(propsAsAnchor.label);
      expect(button).toHaveAttribute("color", "secondary");
    });
  });

  it("Should show the component as <a />", () => {
    render(<Button {...{ ...propsAsAnchor }} />);
    expect(screen.getByText(propsAsAnchor.label)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent(propsAsAnchor.label);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      propsAsAnchor.href
    );
  });

  it("Should show the component as <Link />", () => {
    render(<Button {...{ ...propsAsLink }} />);
    expect(screen.getByText(propsAsLink.label)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent(propsAsLink.label);
    expect(screen.getByRole("link")).toHaveAttribute("href", propsAsLink.to);
  });

  it("Should show the component as <button />", () => {
    render(<Button {...{ ...propsAsButton }} />);
    expect(screen.getByText(propsAsButton.label)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(propsAsButton.label);
    fireEvent.click(screen.getByRole("button"));
    expect(propsAsButton.onClick).toHaveBeenCalledTimes(1);
  });
});
