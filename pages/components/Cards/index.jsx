import React, { useState } from "react";
import s from "../syle.module.scss";
import Image from "next/image";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  useToast,
} from "@chakra-ui/react";
const Cads = ({ data }) => {
  let [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(() => false);
  }, 100);
  const toast = useToast()

  return (

    <>{loading ? (
      <>
        loading...
      </>
    ) : (
      <>
      <div className={s.block}>
      <div className={s.img}>
        <div className={s.image}>
          <p>{data.data}</p>
          <Image className={s.image} alt="/" src={data.img} width={200} height={1} />
        </div>

        <div className={s.info}>
          <div className={s.info_block}>
            <h4 className={s.h4}>{data.name}</h4>
            <p>{data.type}</p>
            <p>
              {data.city},{data.data}
            </p>
            <p>{data.Main}</p>
          </div>
          <div className={s.price}>
            <div className={s.price_ps} >
              <p className={s.price_p}>Цена</p>
              <p  className={s.price_p}>{data.price} c</p>
            </div>
            <Button isDisabled
              className={s.btn}
              onClick={() =>
                toast({
                  title: 'Account created.',
                  description: "We've created your account for you.",
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Купить
            </Button>

          </div>
        </div>
      </div>
    </div>

    <hr className={s.hr} />
      </>
      
    )}

   
    </>
  );
};

export default Cads;
