import { FunctionComponent, useEffect, useState } from "react";
import SoundSection from "./sections/sound";
import CreatedBySection from "./sections/created-by";
import Contents from "./sections/contents";
import GetStartedSection from "./sections/get started";
import SynopsisSection from "./sections/synopsis";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Expandable from "../expandable";
import TimerSection from "./sections/timer";
import Button from "../buttons/inside-button";
import HintsSection from "./sections/hints";
import { useContext } from "react";
import { AppContext } from "contexts/app";
import Border from "assets/Border-bg.png";
import ResetGameSection from "./sections/reset-game";
import { link } from "fs";
import { useNavigate } from "react-router-dom";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  const {
    menu,
    setMenu,
    menuSection,
    setMenuSection,
    setPaused,
    furthestVisitedStep,
  } = useContext(AppContext);
  const [menuIndex, setMenuIndex] = useState(1); //used to clear menu state on close
  const navigate = useNavigate();
  const sections = [
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="m.001,15l.067.56c.01.084,1.116,8.44,10.051,8.44h3.716c8.932,0,10.094-8.353,10.104-8.438l.071-.562H.001Zm13.834,8h-3.716c-6.83,0-8.566-5.238-8.957-7h21.679c-.403,1.766-2.178,7-9.006,7ZM12.009.058l-.009,12.942h11.99L12.009.058Zm.998,2.551l8.693,9.392h-8.7l.007-9.392Zm-3.007-.728L.062,13h9.938V1.881Zm-1,10.119H2.297l6.703-7.5v7.5Z" />
          </svg>
          Synopsis
        </div>
      ),
      content: <SynopsisSection></SynopsisSection>,
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="m24,12C24,5.383,18.617,0,12,0c-3.03,0-5.896,1.131-8.116,3.176L.754.046.047.753l23.199,23.2.707-.707-3.129-3.129c2.045-2.221,3.176-5.088,3.176-8.117ZM12,1c6.065,0,11,4.935,11,11,0,2.763-1.027,5.377-2.884,7.409l-5.354-5.354,4.305-9.147-8.968,4.484L4.591,3.884c2.031-1.856,4.645-2.884,7.409-2.884Zm-1.156,9.137l6.089-3.045-2.923,6.211-3.167-3.167Zm6.957,11.2l.726.726c-1.925,1.255-4.168,1.937-6.527,1.937C5.383,24,0,18.617,0,12c0-2.36.682-4.602,1.937-6.528l.726.726c-1.077,1.724-1.664,3.711-1.664,5.801,0,6.065,4.935,11,11,11,2.09,0,4.077-.587,5.801-1.663Zm-8.607-8.607l-2.13,4.259,4.444-1.944.759.759-7.332,3.208,3.513-7.027.745.745Z" />
          </svg>
          Get Started
        </div>
      ),
      content: <GetStartedSection></GetStartedSection>,
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="m23.731,23.024l-6.321-6.321c1.607-1.775,2.596-4.12,2.596-6.698C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.577,0,4.922-.988,6.697-2.595l6.321,6.321c.098.098.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512,0-.707ZM1.006,10.006C1.006,5.043,5.043,1.006,10.006,1.006s9,4.038,9,9-4.037,9-9,9S1.006,14.968,1.006,10.006Zm9.994,4.994c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2-7c0,1.125-.621,2.146-1.621,2.665-.534.277-.879.913-.879,1.621v.214c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-.214c0-1.094.544-2.055,1.418-2.509.668-.346,1.082-1.027,1.082-1.777,0-1.103-.897-2-2-2s-2,.897-2,2c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-1.654,1.346-3,3-3s3,1.346,3,3Z" />
          </svg>
          Hints
        </div>
      ),
      content: <HintsSection></HintsSection>,
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm1,11.671V5h-1v7.329l-3.395,4.365,.789,.613,3.605-4.635Z" />
          </svg>
          Timer
        </div>
      ),
      content: <TimerSection></TimerSection>,
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="m20,12c0,1.721-.783,3.49-2.146,4.854-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707,1.177-1.178,1.853-2.689,1.854-4.146,0-1.457-.675-2.968-1.854-4.146-.195-.195-.195-.512,0-.707s.512-.195.707,0c1.365,1.365,2.147,3.134,2.146,4.854ZM15.001,1.715v20.585c0,.557-.272,1.079-.729,1.398-.289.202-.629.306-.973.306-.197,0-.395-.034-.584-.104-2.163-.794-4.59-2.677-6.04-4.684l-.15-.208-2.025-.003C2.02,19.002,0,16.98,0,14.5v-4.994C0,8.303.47,7.171,1.321,6.321c.85-.849,1.979-1.315,3.179-1.315h.007l2.018.003.149-.207C8.172,2.729,10.561.883,12.761.102c.512-.182,1.064-.104,1.513.212.456.322.728.846.728,1.401Zm-1,0c0-.231-.114-.45-.304-.584-.181-.127-.4-.159-.601-.087-2.022.718-4.224,2.423-5.61,4.343l-.299.415c-.094.131-.232.186-.407.208l-2.274-.003h-.005c-.934,0-1.812.363-2.473,1.023-.662.662-1.027,1.541-1.027,2.477v4.994c0,1.93,1.57,3.503,3.501,3.506l2.28.003c.16,0,.311.077.404.208l.299.415c1.322,1.83,3.614,3.611,5.574,4.331.218.079.451.048.64-.083.191-.134.301-.344.301-.578V1.715Z" />
          </svg>
          Sound
        </div>
      ),
      content: <SoundSection></SoundSection>,
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="m16.862,9c.312,0,.605-.122.822-.339l3.456-3.399-.701-.713-3.459,3.402c-.082.082-.144.092-.241-.006l-1.856-1.799-.695.718,1.851,1.793c.22.221.513.342.824.342Z" />
            <path d="m20,14.625c-.325.1-.66.174-1,.235v3.14h-9v3c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-1.308-.78-2-.78-2h5.806c.306-.36.641-.695,1.003-1H3C1.346,0,0,1.346,0,3v3h5v15c0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3v-3h-4v-3.375ZM5,5H1v-2c0-1.103.897-2,2-2l.623.109c.797.263,1.377,1.007,1.377,1.891v2Zm18,14v2c0,1.103-.897,2-2,2h-10.766c.476-.531.766-1.232.766-2v-2h12Z" />
            <path d="m17.5,13c3.584,0,6.5-2.916,6.5-6.5S21.084,0,17.5,0s-6.5,2.916-6.5,6.5,2.916,6.5,6.5,6.5Zm0-12c3.032,0,5.5,2.467,5.5,5.5s-2.468,5.5-5.5,5.5-5.5-2.467-5.5-5.5,2.468-5.5,5.5-5.5Z" />
          </svg>
          Historicity
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={20}
            className="ml-2"
          >
            <path d="M21.5,2H7.5c-1.38,0-2.5,1.12-2.5,2.5v13.5H24V4.5c0-1.38-1.12-2.5-2.5-2.5ZM7.5,3h14c.83,0,1.5,.67,1.5,1.5v1.5H6v-1.5c0-.83,.67-1.5,1.5-1.5Zm-1.5,14V7H23v10H6ZM1,21H19v1H0V8.5c0-1.38,1.12-2.5,2.5-2.5h.5v1h-.5c-.83,0-1.5,.67-1.5,1.5v12.5Z" />
          </svg>
        </div>
      ),
      link: "https://www.theescapemail.com/pages/shackleton-ep4-historicity",
    },
    {
      button: (
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={30}
            className="mr-4"
          >
            <path d="M21,9C21,4.04,16.96,0,12,0S3,4.04,3,9H.04l1.84,12.85c.17,1.22,1.24,2.15,2.47,2.15h15.27c1.24,0,2.3-.92,2.48-2.15l1.84-12.85h-2.94ZM12,1c4.41,0,8,3.59,8,8H4C4,4.59,7.59,1,12,1Zm9.11,20.71c-.1,.73-.74,1.29-1.49,1.29H4.35c-.74,0-1.38-.55-1.48-1.29L1.19,10H22.78l-1.67,11.71Z" />
          </svg>
          Shop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            fill="white"
            width={20}
            className="ml-2"
          >
            <path d="M21.5,2H7.5c-1.38,0-2.5,1.12-2.5,2.5v13.5H24V4.5c0-1.38-1.12-2.5-2.5-2.5ZM7.5,3h14c.83,0,1.5,.67,1.5,1.5v1.5H6v-1.5c0-.83,.67-1.5,1.5-1.5Zm-1.5,14V7H23v10H6ZM1,21H19v1H0V8.5c0-1.38,1.12-2.5,2.5-2.5h.5v1h-.5c-.83,0-1.5,.67-1.5,1.5v12.5Z" />
          </svg>
        </div>
      ),
      link: "http://www.theescapemail.com",
    },
  ];

  useEffect(() => {
    if (!menu) {
      setTimeout(() => {
        setMenuSection(undefined);
        setMenuIndex((prev) => prev + 1);
        if (furthestVisitedStep < 6 && furthestVisitedStep > 2)
          setPaused(false);
      }, 300);
    }
  }, [menu]);

  return (
    <div
      key={`menu-${menuIndex}`}
      className={classNames(
        "absolute z-40 left-2 top-2 h-[98%] w-[90%] max-w-[440px] flex flex-col transform transition duration-300 ",
        {
          "-translate-x-[103%] ": !menu,
          "translate-x-0 ": menu,
        }
      )}
    >
      <div
        className={classNames(
          "fixed -top-2 -left-2 w-[150vw] h-[100vh]  bg-black transition duration-500",
          menu ? "opacity-80" : "opacity-0 invisible"
        )}
        onClick={() => setMenu(false)}
      ></div>
      <div className="h-[90px] flex-shrink-0"></div>
      <div className="relative flex-grow h-0 flex flex-col z-40 ">
        <img
          src={Border}
          className="absolute max-w-[90vw] w-[96%] h-[98%] top-0 left-0 m-2"
        />
        <div
          className={classNames(
            "flex-grow h-0 w-full relative   transition duration-300 py-8"
          )}
        >
          <SimpleBar style={{ height: "100%" }}>
            <style>{`.simplebar-visible::before{background: white !important; opacity: 0.2 !important;}`}</style>
            <h2 className="text-white text-7xl font-kingEdwards text-center ">
              Menu
            </h2>
            <br />
            <div className="pb-7 px-6 scale-95">
              <Button
                className="w-full cursor-pointer mb-2"
                onClick={() => {
                  navigate("/contents-page");
                  setMenu(false);
                }}
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="white"
                    width={30}
                    className="mr-4"
                  >
                    <path d="m12,12h3.537l7.645-7.732c.975-.975.975-2.561,0-3.535-.941-.944-2.586-.947-3.537.002l-7.645,7.732v3.533Zm1-3.123l7.354-7.438c.566-.566,1.555-.566,2.121,0,.585.585.585,1.536-.002,2.123l-7.354,7.438h-2.119v-2.123Zm7,9.123v-7.67l-1,1.012v6.658h-9v3c0,1.103-.897,2-2,2s-2-.897-2-2V3c0-.771-.301-1.468-.78-2h11.35l.938-.949c-.166-.029-.334-.051-.508-.051H3C1.346,0,0,1.346,0,3v3h5v15c0,1.654,1.346,3,3,3h13c1.654,0,3-1.346,3-3v-3h-4ZM5,5H1v-2c0-1.103.897-2,2-2s2,.897,2,2v2Zm18,16c0,1.103-.897,2-2,2h-10.766c.476-.531.766-1.232.766-2v-2h12v2Z" />
                  </svg>
                  Contents
                </div>
              </Button>
              <Button
                className="w-full cursor-pointer mb-2"
                onClick={() => {
                  navigate("/recap");
                  setMenu(false);
                }}
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    fill="white"
                    width={30}
                    className="mr-4"
                  >
                    <path d="M24,12.5c0,4.136-3.364,7.5-7.5,7.5H1.293l3.146,3.146c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146L.439,20.561c-.585-.585-.585-1.536,0-2.121l3.293-3.293c.195-.195,.512-.195,.707,0s.195,.512,0,.707l-3.146,3.146h15.207c3.584,0,6.5-2.916,6.5-6.5,0-.276,.224-.5,.5-.5s.5,.224,.5,.5ZM.5,12c.276,0,.5-.224,.5-.5,0-3.584,2.916-6.5,6.5-6.5h15.207l-3.146,3.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l3.293-3.293c.585-.585,.585-1.536,0-2.121L20.268,.146c-.195-.195-.512-.195-.707,0s-.195,.512,0,.707l3.146,3.146H7.5C3.364,4,0,7.364,0,11.5c0,.276,.224,.5,.5,.5Z" />
                  </svg>
                  Recap
                </div>
              </Button>
              {menuSection != null ? (
                <div>
                  <Button className="w-full cursor-pointer mb-1"></Button>
                  {sections[menuSection].content}
                </div>
              ) : (
                sections.map((x, i) => (
                  <Expandable
                    className="mb-2"
                    key={`section-${i}`}
                    header={
                      <Button className="w-full cursor-pointer">
                        {" "}
                        {x.button}
                      </Button>
                    }
                    content={
                      <div className="px-2 ">
                        <div className=" border-white border-x border-b">
                          {x.content}
                        </div>
                      </div>
                    }
                    link={x.link ? x.link : ""}
                  ></Expandable>
                ))
              )}
              <div></div>
              <Expandable
                className=" mt-28 w-full cursor-pointer"
                key={`resetGame`}
                header={
                  <Button className="w-full cursor-pointer">
                    <div className="flex text-red-400 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        fill="red"
                        width={30}
                        className="mr-4"
                      >
                        <path d="M19.5,2H4.5C2.019,2,0,4.019,0,6.5v11c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,15.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v11Zm-7.146-8.646l-3.146,3.146,3.146,3.146c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195,.707,0l3.146,3.146,3.146-3.146c.195-.195,.512-.195,.707,0s.195,.512,0,.707Z" />
                      </svg>
                      Reset Game
                    </div>
                  </Button>
                }
                content={
                  <div className="px-2 ">
                    <div className=" border-white border-x border-b ">
                      <ResetGameSection />
                    </div>
                  </div>
                }
                link={""}
              ></Expandable>
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
};

export default Menu;
