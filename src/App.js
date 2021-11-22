import React, { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const refContainer = useRef();
  const ref = useRef();
  const refLeft = useRef();
  const refRight = useRef();
  const refBottom = useRef();
  const refTop = useRef();
  // ----
  const refLeftTop = useRef();
  const refTopRight = useRef();
  const refRightBottom = useRef();
  const refBottomLeft = useRef();
  const refDragger = useRef();

  useEffect(() => {
    const resizeMeEle = ref.current;
    const styles = window.getComputedStyle(resizeMeEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    resizeMeEle.style.top = "50px";
    resizeMeEle.style.left = "50px";

    // Right ------------
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      if (refContainer.current.offsetWidth >= event.clientX) { 
        resizeMeEle.style.width = `${width}px`;
      }
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeMeEle.style.left = styles.left;
      resizeMeEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top ------
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      if (refContainer.current.offsetTop <= event.clientY) {
        resizeMeEle.style.height = `${height}px`;
      }
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeMeEle);

      resizeMeEle.style.bottom = styles.bottom;
      resizeMeEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Left ------
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - x;
      width = width - dx;
      x = event.clientX;
      if (refContainer.current.offsetLeft <= event.clientX) {
        resizeMeEle.style.width = `${width}px`;
      }
    };

    const onMouseUpLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.right = styles.right;
      resizeMeEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Bottom ------
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      if (refContainer.current.offsetHeight >= event.clientY) {
        resizeMeEle.style.height = `${height}px`;
      }
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.top = styles.top;
      resizeMeEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // ---------------------------------------
    // Left top ------
    const onMouseMoveLeftTopResize = (event) => {
      const dy = event.clientY - y;
      const dx = event.clientX - x;
      height = height - dy;
      width = width - dx;
      y = event.clientY;
      x = event.clientX;
      resizeMeEle.style.height = `${height}px`;
      resizeMeEle.style.width = `${width}px`;
    };

    const onMouseUpLeftTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveLeftTopResize);
    };

    const onMouseDownLeftTopResize = (event) => {
      y = event.clientY;
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.bottom = styles.bottom;
      resizeMeEle.style.right = styles.right;
      resizeMeEle.style.left = null;
      resizeMeEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveLeftTopResize);
      document.addEventListener("mouseup", onMouseUpLeftTopResize);
    };

    // Top right ------
    const onMouseMoveTopRightResize = (event) => {
      const dy = event.clientY - y;
      const dx = event.clientX - x;
      height = height - dy;
      width = width + dx;
      y = event.clientY;
      x = event.clientX;
      resizeMeEle.style.height = `${height}px`;
      resizeMeEle.style.width = `${width}px`;
    };

    const onMouseUpTopRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopRightResize);
    };

    const onMouseDownTopRightResize = (event) => {
      y = event.clientY;
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.bottom = styles.bottom;
      resizeMeEle.style.left = styles.left;
      resizeMeEle.style.right = null;
      resizeMeEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopRightResize);
      document.addEventListener("mouseup", onMouseUpTopRightResize);
    };

    // Right Bottom ------
    const onMouseMoveRightBottomResize = (event) => {
      const dy = event.clientY - y;
      const dx = event.clientX - x;
      height = height + dy;
      width = width + dx;
      y = event.clientY;
      x = event.clientX;
      resizeMeEle.style.height = `${height}px`;
      resizeMeEle.style.width = `${width}px`;
    };

    const onMouseUpRightBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightBottomResize);
    };

    const onMouseDownRightBottomResize = (event) => {
      y = event.clientY;
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.top = styles.top;
      resizeMeEle.style.left = styles.left;
      resizeMeEle.style.right = null;
      resizeMeEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveRightBottomResize);
      document.addEventListener("mouseup", onMouseUpRightBottomResize);
    };

    // Bottom Left ------
    const onMouseMoveBottomLeftResize = (event) => {
      const dy = event.clientY - y;
      const dx = event.clientX - x;
      height = height + dy;
      width = width - dx;
      y = event.clientY;
      x = event.clientX;
      resizeMeEle.style.height = `${height}px`;
      resizeMeEle.style.width = `${width}px`;
    };

    const onMouseUpBottomLeftResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomLeftResize);
    };

    const onMouseDownBottomLeftResize = (event) => {
      y = event.clientY;
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.top = styles.top;
      resizeMeEle.style.right = styles.right;
      resizeMeEle.style.left = null;
      resizeMeEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomLeftResize);
      document.addEventListener("mouseup", onMouseUpBottomLeftResize);
    };

    // Dragger -----
    const onMouseMoveDraggerResize = (event) => {
      const dy = event.clientY - y;
      const dx = event.clientX - x;
      const styles = window.getComputedStyle(resizeMeEle);
      const newTop = parseInt(styles.top) + dy;
      const newLeft = parseInt(styles.left) + dx;
      y = event.clientY;
      x = event.clientX;
      resizeMeEle.style.top = `${newTop}px`;
      resizeMeEle.style.left = `${newLeft}px`;
    };

    const onMouseUpDraggerResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveDraggerResize);
    };

    const onMouseDownDraggerResize = (event) => {
      y = event.clientY;
      x = event.clientX;
      const styles = window.getComputedStyle(resizeMeEle);
      resizeMeEle.style.top = styles.top;
      resizeMeEle.style.left = styles.left;
      resizeMeEle.style.right = null;
      resizeMeEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveDraggerResize);
      document.addEventListener("mouseup", onMouseUpDraggerResize);
    };

    const resizersRight = refRight.current;
    const resizersTop = refTop.current;
    const resizersLeft = refLeft.current;
    const resizersBottom = refBottom.current;
    resizersRight.addEventListener("mousedown", onMouseDownRightResize);
    resizersTop.addEventListener("mousedown", onMouseDownTopResize);
    resizersLeft.addEventListener("mousedown", onMouseDownLeftResize);
    resizersBottom.addEventListener("mousedown", onMouseDownBottomResize);
    // ---
    const resizersLeftTop = refLeftTop.current;
    const resizersTopRight = refTopRight.current;
    const resizersRightBottom = refRightBottom.current;
    const resizersBottomLeft = refBottomLeft.current;
    resizersLeftTop.addEventListener("mousedown", onMouseDownLeftTopResize);
    resizersTopRight.addEventListener("mousedown", onMouseDownTopRightResize);
    resizersRightBottom.addEventListener(
      "mousedown",
      onMouseDownRightBottomResize
    );
    resizersBottomLeft.addEventListener(
      "mousedown",
      onMouseDownBottomLeftResize
    );
    // ---
    const dragger = refDragger.current;
    dragger.addEventListener("mousedown", onMouseDownDraggerResize);

    return () => {
      resizersRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizersTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizersLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizersBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      //
      resizersLeftTop.removeEventListener(
        "mousedown",
        onMouseDownLeftTopResize
      );
      resizersTopRight.removeEventListener(
        "mousedown",
        onMouseDownTopRightResize
      );
      resizersRightBottom.removeEventListener(
        "mousedown",
        onMouseDownRightBottomResize
      );
      resizersBottomLeft.removeEventListener(
        "mousedown",
        onMouseDownBottomLeftResize
      );
      dragger.removeEventListener("mousedown", onMouseDownDraggerResize);
    };
  }, []);

  return (
    <div
      id="container"
      ref={refContainer}
      style={{
        borderRadius: "5px",
        width: "800px",
        height: "800px",
        background: "#FFBC97",
        position: "relative",
      }}
    >
      <div ref={ref} className="resizable">
        <div
          ref={refDragger}
          className="dragger"
        ></div>
        <div ref={refTop} className="resizer resizer-t"></div>
        <div ref={refRight} className="resizer resizer-r"></div>
        <div ref={refBottom} className="resizer resizer-b"></div>
        <div ref={refLeft} className="resizer resizer-l"></div>
        {/* ---------- */}
        <div ref={refLeftTop} className="resizer-angle resizer-lt"></div>
        <div ref={refTopRight} className="resizer-angle resizer-tr"></div>
        <div ref={refRightBottom} className="resizer-angle resizer-rb"></div>
        <div ref={refBottomLeft} className="resizer-angle resizer-bl"></div>
        <div className="children"></div>
      </div>
    </div>
  );
}
