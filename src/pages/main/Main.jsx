import "../../scss/_buttons.scss";
import styles from "./style.module.scss";

export default function Main() {

  return (
    <div className={styles.section}>
      <div className={styles.title}>
        서비스 타이틀
      </div>
      <div className={styles.wrapbtn}>
        <input type="button" className="btn" value="로그인" />
        <input type="button" className="btn" value="회원가입" />
      </div>
    </div>
  );
}
