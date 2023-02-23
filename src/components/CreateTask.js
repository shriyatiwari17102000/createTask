import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const CreateTask = () => {
  const [tasks, setTasks] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [todo, setTodo] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [done, setDone] = useState([]);

  const createTask = () => {
    if (!tasks) {
      alert("enter task");
      return;
    }
    setBacklog((prev) => [...prev, tasks]);
    setTasks("");
  };

  const deleteData = (name) => {
    let clonedata = backlog;
    let index = clonedata.findIndex((o) => o === name);
    clonedata.splice(index, 1);
    setBacklog([...clonedata]);
  };

  const deleteDataTodo = (name) => {
    let clonedata = todo;
    let index = clonedata.findIndex((o) => o === name);
    clonedata.splice(index, 1);
    setTodo([...clonedata]);
  };
  const deleteDataOng = (name) => {
    let clonedata = ongoing;
    let index = clonedata.findIndex((o) => o === name);
    clonedata.splice(index, 1);
    setOngoing([...clonedata]);
  };
  const deleteDataDone = (name) => {
    let clonedata = done;
    let index = clonedata.findIndex((o) => o === name);
    clonedata.splice(index, 1);
    setDone([...clonedata]);
  };

  const moveRight = (name) => {
    let clonedata = backlog;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setBacklog([...clonedata]);
    setTodo((prev) => [...prev, ck]);
  };
  const moveRight1 = (name) => {
    let clonedata = todo;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setTodo([...clonedata]);
    setOngoing((prev) => [...prev, ck]);
  };
  const moveRight2 = (name) => {
    let clonedata = ongoing;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setOngoing([...clonedata]);
    setDone((prev) => [...prev, ck]);
  };
  const moveleftToOngoing = (name) => {
    let clonedata = done;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setDone([...clonedata]);
    setOngoing((prev) => [ck, ...prev]);
  };
  const moveleftToTodo = (name) => {
    let clonedata = ongoing;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setOngoing([...clonedata]);
    setTodo((prev) => [ck, ...prev]);
  };
  const moveleftToBacklog = (name) => {
    let clonedata = todo;
    let index = clonedata.findIndex((o) => o === name);
    let ck = clonedata.splice(index, 1);
    setTodo([...clonedata]);
    setBacklog((prev) => [ck, ...prev]);
  };

  return (
    <div className="main_div">
      <h1>Come Here, and Create your Task</h1>
      <div className="inn_div">
        <div className="inn_inn_div">
          <input
            type="text"
            onChange={(e) => setTasks(e.target.value)}
            value={tasks}
          />
          <button onClick={createTask} className="create_btn">
            Create task
          </button>{" "}
        </div>
        <div className="card_div1">
          <div className="card_div2">
            <Card>
              <Card.Body>
                <div>
                  {" "}
                  <h4>Backlog</h4>
                  <ul style={{ listStyle: "none" }}>
                    {backlog.map((val) => {
                      return (
                        <div className="div_ul">
                          <div className="div_li">
                            <li>{val}</li>
                          </div>
                          <div className="inn_li">
                            <li>
                              <button>
                                <i class="fa-solid fa-arrow-left"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i
                                  class="fa-sharp fa-solid fa-arrow-right"
                                  onClick={() => moveRight(val)}
                                ></i>
                              </button>
                            </li>
                            <li>
                              <button onClick={() => deleteData(val)}>
                                <i class="fa-solid fa-trash-can"></i>
                              </button>
                            </li>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div>
            <div className="card_div2">
              <Card>
                <Card.Body>
                  <div>
                    {" "}
                    <h4>To do</h4>
                    <ul style={{ listStyle: "none" }}>
                      {todo.map((val) => {
                        return (
                          <div className="div_ul">
                            <div className="div_li">
                              <li>{val}</li>
                            </div>
                            <div className="inn_li">
                              <li>
                                <button onClick={() => moveleftToBacklog(val)}>
                                  <i class="fa-solid fa-arrow-left"></i>
                                </button>
                              </li>
                              <li>
                                <button onClick={() => moveRight1(val)}>
                                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                </button>
                              </li>
                              <li>
                                <button onClick={() => deleteDataTodo(val)}>
                                  <i class="fa-solid fa-trash-can"></i>
                                </button>
                              </li>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div>
            <div className="card_div2">
              <Card>
                <Card.Body>
                  <div>
                    {" "}
                    <h4>Ongoing</h4>
                    <ul style={{ listStyle: "none" }}>
                      {ongoing.map((val) => {
                        return (
                          <div className="div_ul">
                            <div className="div_li">
                              <li>{val}</li>
                            </div>
                            <div className="inn_li">
                              <li>
                                <button onClick={() => moveleftToTodo(val)}>
                                  <i class="fa-solid fa-arrow-left"></i>
                                </button>
                              </li>
                              <li>
                                <button onClick={() => moveRight2(val)}>
                                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                </button>
                              </li>
                              <li>
                                <button onClick={() => deleteDataOng(val)}>
                                  <i class="fa-solid fa-trash-can"></i>
                                </button>
                              </li>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div>
            <div className="card_div2">
              <Card>
                <Card.Body>
                  <div>
                    {" "}
                    <h4>Done</h4>
                    <ul style={{ listStyle: "none" }}>
                      {done.map((val) => {
                        return (
                          <div className="div_ul">
                            <div className="div_li">
                              <li>{val}</li>
                            </div>
                            <div className="inn_li">
                              <li>
                                <button onClick={() => moveleftToOngoing(val)}>
                                  <i class="fa-solid fa-arrow-left"></i>
                                </button>
                              </li>
                              <li>
                                <button>
                                  <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                </button>
                              </li>
                              <li>
                                <button onClick={() => deleteDataDone(val)}>
                                  <i class="fa-solid fa-trash-can"></i>
                                </button>
                              </li>
                            </div>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
