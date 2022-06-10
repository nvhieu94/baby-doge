import React, { useEffect, useState, WheelEvent } from "react";
import { Box, style } from "@mui/system";
import { Button } from "@mui/material";
// import {useAppDispatch,useAppSelector} from '@/app/hooks';
// import {selectVoucher, getVoucherByRatio} from '@/features/voucher-slice';
// import {Voucher} from '@/models/voucher'

const WheelComponent = ({
  segments,
  segColors,
  //winningSegment,
  onFinished,
  primaryColor,
  contrastColor,
  buttonText,
  isOnlyOnce,
}: any) => {
  let currentSegment:string = '';
  let isStarted = false;
  const [isFinished, setFinished] = useState(false);
  let timerHandle: number = 0;
  const timerDelay: number = segments.length;
  let angleCurrent: number = 0;
  let angleDelta: number = 0;
  const size: number = 200;
  let canvasContext: CanvasRenderingContext2D;
  let maxSpeed = Math.PI / segments.length;
  const upTime = segments.length * 100;
  const downTime = segments.length * 1000;
  let spinStart = 0;
  let frames = 0;
  const centerX = 250;
  const centerY = 220;
  let winningSegment:string = '';
  // const dispatch = useAppDispatch()

  useEffect(() => {
    wheelInit();
    //  dispatch(getVoucherByRatio()).then( (res:any)=> {
    //    if(res.payload && res.payload.code === 200) {
    //     winningSegment =  new Voucher( res.payload.message).name;
    //    }
    //   })
    setTimeout(() => {
      // window.scrollTo(0, 1);
    }, 0);
  },[]);


  const wheelInit = () => {
    initCanvas();
    wheelDraw();
  };

  const initCanvas = () => {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (navigator.appVersion.indexOf("MSIE") !== -1) {
      canvas = document.createElement("canvas");
      canvas.setAttribute("width", "500px");
      canvas.setAttribute("height", "500px");
      canvas.setAttribute("id", "canvas");
      let wheelElement = document.getElementById("wheel") as HTMLElement;
      wheelElement.appendChild(canvas);
    }
    canvas.addEventListener("click", spin, false);
    canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;
  };
  const spin = () => {
    isStarted = true;
    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      // maxSpeed = Math.PI / ((segments.length*2) + Math.random())
      maxSpeed = Math.PI / segments.length;
      frames = 0;
      timerHandle = Number(setInterval(onTimerTick, timerDelay));
    }
  };
  const onTimerTick = () => {
    frames++;
    draw();
    const duration = new Date().getTime() - spinStart;
    let progress = 0;
    let finished = false;
    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
    } else {
      if (winningSegment) {
        if (currentSegment === winningSegment && frames > segments.length) {
          progress = duration / upTime;
          angleDelta =  maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
          progress = 1;
        } else {
          progress = duration / downTime;
          angleDelta =  maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
        }
      } else {
        progress = duration / downTime;
        angleDelta =  maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
      }
      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
    if (finished) {
      setFinished(true);
      // dispatch(getVoucherByRatio()).then( (res:any)=> {
      //   if(res.payload && res.payload.code === 200) {
      //    winningSegment =  new Voucher( res.payload.message).name;
      //   }
      //  })
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
    }
  };

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const draw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key: any, lastAngle: any, angle: any) => {
    const ctx = canvasContext;
    const value = segments[key];
    if (ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, size, lastAngle, angle, false);
      ctx.lineTo(centerX, centerY);
      ctx.closePath();
      ctx.fillStyle = segColors[key];
      ctx.fill();
      // ctx.stroke();
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((lastAngle + angle) / 2);
      ctx.fillStyle = contrastColor || "white";
      ctx.font = "12px proxima-nova";
      ctx.fillText(value.name.substr(0, 21), size / 2 + 20, 0);
      ctx.restore();
    }
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    let lastAngle = angleCurrent;
    const len = segments.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor || "black";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em proxima-nova";
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor || "black";
    ctx.lineWidth = 8;
    ctx.strokeStyle = contrastColor || "white";
    ctx.fill();
    ctx.font = "14px serif";
    ctx.fillStyle = contrastColor || "white";
    ctx.textAlign = "center";
    ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
    ctx.stroke();

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();

    // ctx.lineWidth = 1;
    // ctx.strokeStyle = primaryColor || "black";
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = canvasContext || {};
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor || "white";
    // ctx.fileStyle = contrastColor || "white";
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX - 20, centerY - 50);
    ctx.lineTo(centerX, centerY - 70);
    ctx.closePath();
    ctx.fill();
    const change = angleCurrent + Math.PI / 2;
    let i =
      segments.length -
      Math.floor((change / (Math.PI * 2)) * segments.length) -
      1;
    if (i < 0) i = i + segments.length;
    // ctx.textAlign = "center";
    // ctx.textBaseline = "middle";
    // ctx.fillStyle = primaryColor || "black";
    ctx.font = "14px serif";
    ///currentSegment = new Voucher(segments[i]).name;
    currentSegment = segments[i].name;

    // isFinished && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
  };
  const clear = () => {
    const ctx = canvasContext;
    if (ctx) ctx.clearRect(0, 0, 1000, 500);
  };

  return (
    <Box id="wheel" sx={{ textAlign: "center" }}>
      <canvas
        id="canvas"
        width="500"
        height="440"
        style={{
          pointerEvents: isFinished && !isOnlyOnce ? "none" : "auto",
        }}
      />
      {/* <Button sx={{backgroundColor:'#610BEF',borderRadius:'12px', width:'336px'}} onClick={spin} variant="contained">Bắt đầu</Button> */}
    </Box>
  );
};
export default WheelComponent;
