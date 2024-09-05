import React from "react";
import classes from "./HomeMiddleTop.module.css";

const HomeMiddleTop = () => {
  const datas = [
    {
      image: "src/assets/liveOrder.png",
    heading: "Paiement à la Livraison",
    para: "Payez directement à la livraison pour plus de flexibilité et de sécurité lors de vos achats en ligne."
    },
    {
      image: "src/assets/noMinOrder.png",
     heading: "Aucun minimum d'achat",
     para: "Commandez pour vous-même ou pour vos proches, sans aucune restriction de valeur d'achat."
    },
    {
      image: "src/assets/superFastDelivery.png",
     heading: "Livraison Rapide",
      para: "Profitez de notre service de livraison rapide pour recevoir vos vêtements à temps, toujours frais et impeccables."
    },
  ];
  return (
    <div className={classes.box}>
      <div className={classes.row}>
        {datas.map((data, index) => {
          return (
            <div className={classes.item} key={index}>
              <div className={classes.image}>
                <img src={data.image} alt="" />
              </div>
              <div className={classes.heading}>{data.heading}</div>
              <div className={classes.para}> {data.para}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMiddleTop;
