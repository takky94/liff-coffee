import { useState, useEffect } from "react";
import styles from "../styles/Progress.module.css";
import CoffeeCup from "../components/CoffeeCup";
import { useRouter } from "next/router";

const Progress = () => {
  const router = useRouter();
  const [sec, setSec] = useState<number>(15);
  useEffect(() => {
    if (sec === 0) {
      router.replace("/history");
    }

    setInterval(() => {
      setSec(sec - 1);
    }, 1000);
    return;
  }, [sec]);

  return (
    <div className={styles.wrap}>
      <p>{sec}秒</p>
      <CoffeeCup />
    </div>
  );
};

export default Progress;
