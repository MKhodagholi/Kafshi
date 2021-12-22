import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import classes from "./Home.module.css";

const Home = () => {
  const context = useContext(ThemeContext);

  const { theme } = context;

  return (
    <div
      className={`${classes["component-home"]} ${
        theme === "DARK" ? "component-dark" : "component-light"
      } `}
    >
      <div className={classes.description}>
        <span className={classes.name}>فروشگاه اینترنتی کفشی</span> یکی از بزرگ
        ترین و جامع ترین مراکز آنلاین عرضه کیف و کفش با کیفیت است. <br /> در
        فروشگاه کفشی تمامی کالاهای مرتبط با پوشش، با کیفیتی مطلوب و کم نظیر و با
        قیمتی مناسب ارائه می شود. تیم مدیریت کفشی تمام تلاش خود را کرده است تا
        محصولاتی را که به مشتریان عرضه می کند،
      </div>
    </div>
  );
};

export default Home;
