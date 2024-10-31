import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useRef, useState, useEffect } from "react";
import {
  Button,
  ChatBubble,
  Checkbox,
  Dropdown,
  Hero,
  Loading,
  Modal,
  Navbar,
} from "react-daisyui";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const ReactDaisyUI = () => {
  const [randomTheme, setRandomTheme] = useState();
  const modalRef = useRef(null);

  const handleShow = useCallback(() => {
    modalRef.current?.showModal();
  }, [modalRef]);

  const handleTheme = () => {
    const random = themes[Math.floor(Math.random() * themes.length)];
    setRandomTheme(random);

    document.documentElement.setAttribute("data-theme", random);
  };

  useEffect(() => {
    handleTheme();
  }, []);

  return (
    <div className="m-4 border-purple-500 border-solid border-4 rounded-2xl p-7 ">
      <h1 className="text-4xl animate-bounce font-bold text-secondary mt-3">
        React DaisyUI
      </h1>

      <Button size="lg" color="accent">
        <FontAwesomeIcon icon={faHeart} />
        React DaisyUI Button
      </Button>

      <div className="flex justify-center gap-2 flex-wrap my-4 max-w-72 mx-auto">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="accent">Accent</Button>
        <Button color="neutral">Neutral</Button>
      </div>

      <Navbar className="mt-10 px-2 bg-primary rounded-box z-30 relative">
        <Navbar.Start className="px-2">
          <Button color="ghost">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <span className="text-lg font-bold">My Nav</span>
          </Button>
        </Navbar.Start>

        <h1 className="mx-auto">Current Theme: {randomTheme}</h1>

        <Navbar.End>
          <Button color="ghost">Button</Button>
          <Dropdown>
            <Dropdown.Toggle className="btn btn-ghost rounded-btn">
              Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-52 mt-4">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>

      <Hero
        className="mb-4"
        style={{
          height: "40em",
          marginTop: "-1em",
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <Hero.Overlay />
        <Hero.Content className="text-center">
          <div className="max-w-md flex flex-col item-center gap-2">
            <h1 className="text-5xl font-bold">Hello There</h1>
            <p className="py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              esse praesentium illum ab, ex repellat,
            </p>

            <Button color="secondary" onClick={handleTheme}>
              Change Theme
            </Button>

            <Checkbox size="sm" color="primary" />
            <Checkbox size="lg" color="secondary" />
            <div>
              <Loading size="lg" color="primary" />
              <Loading size="lg" color="secondary" variant="dots" />
              <Loading size="lg" color="accent" variant="infinity" />
            </div>
          </div>
        </Hero.Content>
      </Hero>

      <Button onClick={handleShow}>Open Modal</Button>

      <Modal ref={modalRef} backdrop={true}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>

        <Modal.Body>Press ESC or click outside to close</Modal.Body>
      </Modal>

      <div className="bg-slate-800 p-5 rounded-md mt-5">
        <ChatBubble>
          <ChatBubble.Message color="primary">
            It&apos;s over Anakin, <br />I have the high ground.
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble end>
          <ChatBubble.Message color="secondary">
            You underestimate my power!
          </ChatBubble.Message>
        </ChatBubble>

        <ChatBubble>
          <ChatBubble.Message color="primary">Please anakin</ChatBubble.Message>
        </ChatBubble>
      </div>
    </div>
  );
};

export default ReactDaisyUI;
