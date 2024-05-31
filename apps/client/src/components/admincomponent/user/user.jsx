import styles from "./style.module.css";

export default function User(props) {
  return (
    <div
      className={
        props.id % 2 === 0
          ? `${styles.users_information_contatiner_light}`
          : `${styles.users_information_contatiner_dark}`
      }
    >
      <p className="small">{props.id}</p>
      <p>{props.username}</p>
      <p>{props.fullname}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.totalspending}</p>
      <div className={styles.btn_users_info}>
        <button className={styles.delete}>DELETE</button>
      </div>
    </div>
  );
}
