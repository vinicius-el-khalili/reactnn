import { useRef } from "react";

import "./styles.scss";

export default function App() {
  // ======================USING useRef===========================
  // Check div 1 and div 5 to see how to use ref={} in elements
  const divOne = useRef<HTMLInputElement | null>(null);
  const divFive = useRef<HTMLInputElement | null>(null);

  const scrolLWithUseRef = () => {
    divFive.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  // ======================USING useRef===========================

  // ======================USING querySelector===========================
  const scrollFun = (id: string) => {
    document
      .querySelector(`#id${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
    // You can do this way
    // const elId = "#id" + id;
    // const element = document.querySelector(elId);
    // element.scrollIntoView({ behavior: "smooth" });
  };
  // ======================USING querySelector===========================

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          background: "white",
          padding: "1rem",
          borderRadius: "3px",
          boxShadow: "0 3px 13px 1px #888888"
        }}
      >
        {["1", "2", "3", "4", "5"].map((id) => (
          <button key={id} onClick={() => scrollFun(id)}>
            Scroll to id {id}
          </button>
        ))}
        <br />
        <br />
        <button
          onClick={scrolLWithUseRef}
          style={{ background: "green", color: "white" }}
        >
          Scroll using useRef
        </button>
      </div>

      <div className="box" id="id1" ref={divOne}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
      </div>

      <div className="box" id="id2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
      </div>

      <div className="box" id="id3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
      </div>

      <div className="box" id="id4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
      </div>

      <div className="box" id="id5" ref={divFive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rerum
          fugit tenetur quam repellat corrupti. Ex, veritatis quo et blanditiis
          magni itaque velit, ipsa, accusamus fugit modi reiciendis asperiores
          vitae?{" "}
        </p>
      </div>
    </div>
  );
}
