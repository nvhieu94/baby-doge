import React, {useEffect,useState} from 'react';
import { Stack, Container, Grid, Button, Typography } from '@mui/material'
import { Box, style } from '@mui/system'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import WheelComponent from "./weel";
// import "react-wheel-of-prizes/dist/index.css";
import {ModalLuckyResult} from './modal-lucky-result';
// import {useAppDispatch,useAppSelector} from '@/app/hooks';
// import {selectVoucher, getVoucherByWheelSpiner,insertVoucherHistory,updatePointByUser} from '@/features/voucher-slice'
// import {selectUser} from '@/features/user-slice'
// import { Voucher } from '@/models/voucher';
// import moment from 'moment'
export interface IModalLucky {
  open: boolean;
  onClose: () => void;
}
export const ModalLucky = (props: IModalLucky) => {
  // const dispatch = useAppDispatch();
  const [segColors, setSegColors] = useState<any[]>([])
  const [segments, setSegments] = useState<any[]>([
    {
      name: 'Voucher 100k',
      id:1
    },
    {
      name: 'Voucher 50k',
      id:2
    },
    {
      name: 'Voucher 500K',
      id:3
    },
    {
      name: 'Wish luck next time',
      id:4
    },
    {
      name: 'Voucher 10 Tk',
      id:5
    },
    {
      name: 'Voucher 10 Point',
      id:6
    }, {
      name: 'Voucher 20 Point',
      id:7
    },
    {
      name: 'Voucher 100 Point',
      id:8
    },
    {
      name: 'Voucher 500 Point',
      id:9
    },
    {
      name: 'Voucher 1000 Point',
      id:10
    }
  ])
  const [openModalResult, setOpenModalResult] = useState<boolean>(false)
   const [winnerItem, setWinnerItem] = useState<any>()
  // const {userInfo} = useAppSelector(selectUser)
  const weelColors = () => {
    let arr: any[] = [];
    let colors: string[] = ["#6FCF97", "#27AE60", "#BB6BD9", "#9B51E0", "#56CCF2", "#2D9CDB", "#2F80ED", "#F2C94C", "#F2994A", "#EB5757", "#6FCF97"];
    segments.forEach((el) => {
      let color = colors.shift();
      arr.push(color);
      if (color) colors.push(color);
    });

    return arr;
  };


  useEffect(() => {
    // dispatch(getVoucherByWheelSpiner()).then((res:any) => {
    //  if(res.payload && res.payload.code === 200) {
    //    let data = res.payload.message || [];
 
    //    let arr: any[] = [];
    //    let colors: string[] = ["#6FCF97", "#27AE60", "#BB6BD9", "#9B51E0", "#56CCF2", "#2D9CDB", "#2F80ED", "#F2C94C", "#F2994A", "#EB5757", "#6FCF97"];
    //    data.forEach((el:any) => {
    //     let color = colors.shift();
    //     arr.push(color);
    //     if (color) colors.push(color);
    //   });
    //   setSegColors(arr)
    //   setSegments(data)
    //  }
    // })
  },[])

  const rand = () => {
    return setTimeout(() => {
      // return    segments[Math.floor(Math.random() * segments.length)];
     return segments.find((item:string) => item === 'item 4')
    }, 5000);
  };
  const onFinished = (winner: any) => {
    //  let item = segments.find((a:Voucher) => a.name === winner);
     setWinnerItem(winner);
     setTimeout(function() {
      setOpenModalResult(true)
    }, 500);

    // let customer_code = userInfo.name.split('@')[0];
    // let payload:any ={
    //   customer: customer_code,
    //   draw_date: moment().format('YYYY-MM-DD'),
    //   status: 'Còn hiệu lực',
    //   voucher_code: winner
    // }
    // dispatch(insertVoucherHistory(payload))
   
    // if(item && item.type === 'Điểm') {
    //   let params = {
    //     voucher_point: item.points
    //   }
    //   dispatch(updatePointByUser(params))
    // }
  };
  const { open, onClose } = props;


  // const getRandomInt=(min:number, max: number)=> {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  return (
    <>
    <Dialog open={open} fullScreen={true} >
      <Box py={1}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Box>
      <DialogContent sx={{
        // width: 600,
        color: '#1A43E9',
        fontWeight: '500, Medium',
        fontSize: '40px'
      }}>
        <Box sx={{
          textAlign: 'center'
        }}>Lucky wheel</Box>
    
        <WheelComponent
          segments={segments}
          segColors={weelColors()}
          // winningSegment={"item 4"}
          onFinished={(winner: any) => onFinished(winner)}
          primaryColor="#610BEF"
          contrastColor="white"
          buttonText="Quay"
          isOnlyOnce={true}
          // size={150}
          upDuration={250}
        />
      </DialogContent>
    </Dialog>
        <ModalLuckyResult text={winnerItem}  open={openModalResult}    onClose={() => setOpenModalResult(false)} />
        </>
  )

}