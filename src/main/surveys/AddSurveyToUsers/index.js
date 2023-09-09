import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./AddSurveyToUsers.module.css";
import Sidebar from "../../../main/shared-components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import ChooseSurvey from "../ChooseSurvey";
import ChooseUsers from "../ChooseUsers";
// import BackdropGroup from "..//BackdropGroup";

function AddSurveyToUsers() {
 
  const [poruka, setPoruka] = useState("");
  const [message, setMessage] = useState("");
  const [questionnaires, setQuestionnaires] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [checkedUsersIds, setCheckedUsersIds] = useState([]);
  const [checkedQuestionIds, setCheckedQuestionIds] = useState([]);
  const [query, setQuery] = useState("");
  const [questionCritirea, setQuestionCritirea] = useState("");
  const [selected, setSelected] = useState("");
  const [openModalPoll, setOpenModalPoll] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsApprove, setModalIsApprove] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    readCookie();
    allUsers();
    allPolls();
  }, []);

 

  const allUsers = () => {
    // socket?.emit("all_all_users", { admin: window.name }, function (dataFromServer) {
    //   // console.log(JSON.stringify(dataFromServer));
    //   setMailman(window.name);
    //   setUsers(dataFromServer);
    // });
  };
  const allPolls = () => {
    console.log("all_questionnaires");
    // socket?.emit(
    //   "all_questionnaires",
    //   { user_id: window.name },
    //   function (dataFromServer) {
    //     // socket?.emit("all_questionnaires", { user_id: window.name }, function (dataFromServer) {
    //     console.log(JSON.stringify(dataFromServer));
    //     setQuestionnaires(dataFromServer);
    //   }
    // );
  };

  const inputChangeHandlerPoruka = (event) => {
    setPoruka(event.target.value);
  };

  const submitHandler2 = (event) => {
    event.preventDefault();
    if (serverData.length > 0 && selected.length > 0) {
      console.log("serverData");
      console.log(serverData);
      console.log("selected");
      console.log(selected);

      const userData = {
        to_users: serverData,
        to_poll: selected,
      };

      console.log(userData);
      console.log("add_poll_users");

      //   ?.emit(
      //     "add_poll_users",
      //     { to_users: serverData, to_poll: selected },
      //     function (data) {
      //       console.log(data);
      //       if (data === "ok") {
      //         setModalIsApprove(true);
      //         setUsers([]);
      //         setSesocketrverData([]);
      //         setCheckedUsersIds([]);
      //         setSelected("");
      //       }
      //     }
      //   );
    } else {
      console.log(1);
      setModalIsOpen(true);
    }
  };
 

  const checkQuestions = (e) => {
    var permissions_array = [...questionData];
    if (e.target.checked) {
      let checkedQuestion = questionnaires.find(
        (questionnaire) => questionnaire.name === e.target.name
      );
      // setCheckedUsersIds([...checkedUsersIds, checkedUser.name]);
      setCheckedQuestionIds([...checkedQuestionIds, checkedQuestion.name]);
      permissions_array = [...questionData, e.target.id];
    } else {
      setCheckedQuestionIds(
        checkedQuestionIds.filter(
          (questionnaire) => questionnaire !== e.target.name
        )
      );
      permissions_array.splice(questionData.indexOf(e.target.id), 1);
    }
    console.log(permissions_array);

    setQuestionData(permissions_array);
  };

  const clearHandlerSurvey = () => {
    document.querySelector("#anketa").value = "";
    setQuestionCritirea("");
    setShow(false);
  };
  const clearHandlerGroup = () => {
    document.querySelector("#grupa").value = "";
    setQuery("");
    setShow2(false);
  };
  const closeHandler = () => {
    setOpenModalPoll(true);
    setMessage("");

    allUsers();
    allPolls();
    setCheckedUsersIds([""]);
    setSelected("");
    console.log(123);
  };

  const modalFormHandler = () => {
    setModalIsOpen(false);
  };
  const modalFormApproveHandler = () => {
    setModalIsApprove(false);
  };
  const approvedFormHandler = (approve) => {
    setModalIsOpen(false);
  };
  return (
    <Sidebar>
      {message ? (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="modalrow">
              <div className="modaltitle col-sm-12">
                <h1>Uspešno dodata anketa</h1>
              </div>
            </div>
            <div className="modalrow modalmarginbtn">
              <div className="col-sm-12 modalfooter">
                <button className="modalyesbtn" onClick={closeHandler}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentaddpost}>
          <div className={styles.boxaddpost}>
            <div className={styles.containeraddpost}>
              <form action="#" method="post">
                <div className={styles.titleaddpost}>
                  <h3>Surveys</h3>
                </div>
                <input
                  type="text"
                  className={styles.searchUsers}
                  id="anketa"
                  name="anketa"
                  placeholder="Unesite anketu..."
                  autoComplete="off"
                  onChange={(e) =>
                    setQuestionCritirea(e.target.value) ||
                    e.target.value.length >= 3
                      ? setShow(true)
                      : setShow(false)
                  }
                />
                <button
                  className={`${
                    show === true ? styles.clearinput : styles.clearinputhide
                  }`}
                  type="button"
                  onClick={clearHandlerSurvey}
                ></button>
                <ChooseSurvey criteria={questionCritirea} />
                <ChooseUsers />
                <button
                  className={styles["btn-addpost"]}
                  onClick={submitHandler2}
                >
                  Add survey
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* {modalIsOpen && (
            <BackdropGroup
            onConfirm={modalFormHandler}
            onApprove={approvedFormHandler}
            check={false}
            title="Podaci nisu validni" 
            />
          )}
          {modalIsApprove && (
            <BackdropGroup
            onConfirm={modalFormApproveHandler}
            onApprove={approvedFormHandler}
            check={false}
            title="Uspešno ste dodali anketu" 
            />
          )} */}
    </Sidebar>
  );
}

export default AddSurveyToUsers;
