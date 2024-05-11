// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  NextButton,
  PrevButton,
  Bulb,
  Sound,
  Reload,
  Fullscreen,
} from "../assets/index";
import reportData from "../json/sums.json";

const ReportDialog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(1);
  const [quizReload, setQuizReload] = useState(false); // State to trigger quiz data reload
  const [isFullScreen, setIsFullScreen] = useState(false); // State to track fullscreen mode

  const totalReports = reportData.length;
  const totalPages = Math.ceil(totalReports / reportsPerPage);

  const startIndex = (currentPage - 1) * reportsPerPage;
  const endIndex = Math.min(startIndex + reportsPerPage, totalReports);
  const currentReports = reportData.slice(startIndex, endIndex);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (quizReload) {
      // Reset states related to quiz data
      setCurrentPage(1);
      setIsAnswerShown(false);
      setAnswer("");
      setQuizReload(false);
    }
  }, [quizReload]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle button click
  const handleButtonClick = (ans) => {
    setIsAnswerShown(true);
    setAnswer(ans);
  };

  const handleReload = () => {
    setQuizReload(true); // Trigger quiz data reload
  };

  const toggleFullScreen = () => {
    const dialog = document.querySelector(".dialog");
    if (!isFullScreen) {
      if (dialog.requestFullscreen) {
        dialog.requestFullscreen();
      } else if (dialog.webkitRequestFullscreen) {
        /* Safari */
        dialog.webkitRequestFullscreen();
      } else if (dialog.msRequestFullscreen) {
        /* IE11 */
        dialog.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={`dialog ${isFullScreen ? "fullscreen" : ""} flex flex-col items-center justify-center bg-white rounded-[42px] w-auto h-auto mt-8`}
    >
      {currentReports.map((report, index) => (
        <div
          key={index}
          className="lg:w-[712px] lg:h-[393px] w-[320px] bg-gradient-to-bl from-blue-900 via-blue-600 to-blue-500 rounded-[42px] px-5"
        >
          {/* header */}
          <div className="flex flex-row justify-between m-4">
            <div className="flex flex-row ">
              <button onClick={() => handleButtonClick(report.ans)}>
                <img src={Bulb} alt="bulb" />
              </button>
              {isAnswerShown && (
                <div className="text-xl font-semibold text-white">
                  {" "}
                  {answer}
                </div>
              )}
            </div>
            <div>
              <img src={Sound} alt="volume" />
            </div>
          </div>

          <div className="flex justify-center items-center lg:mt-[20%] my-[100px] lg:text-3xl text-2xl font-semibold text-white">
            {report.sum}
          </div>
        </div>
      ))}
      <div className="paginator flex flex-row  items-center justify-between mt-8 mx-3">
        <button
          onClick={handleReload}
          className="mt-4 mx-auto py-2 px-4 rounded"
        >
          <img src={Reload} alt="" />
        </button>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex flex-row"
        >
          <img src={PrevButton} alt="previous button" />
        </button>
        <div className="m-2 text-xl font-semibold">{`${currentPage}/${totalPages}`}</div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex flex-row"
        >
          <img src={NextButton} alt="Next button" />
        </button>
        <button
          onClick={toggleFullScreen}
          className="mt-4 mx-auto py-2 px-4 rounded"
        >
          {isFullScreen ? (
            "Exit Fullscreen"
          ) : (
            <img src={Fullscreen} alt="fullscreen" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportDialog;
