import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";
import styled from "styled-components";

export const Site = () => {

    //const [burger, setBurger] = useState(true)

    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //return windowSize;

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {
                    windowSize > 1000
                        ? <div className={styles.nav}>
                            <NewWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></NewWrapper>
                            <NewWrapper><NavLink to={'/page/1'}>PAGE 2</NavLink></NewWrapper>
                            <NewWrapper><NavLink to={'/page/2'}>PAGE 3</NavLink></NewWrapper>
                        </div>
                        : <div></div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const NewWrapper = styled.div`

  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff
  }

  & > a:hover {
    color: steelblue;
  }

`

