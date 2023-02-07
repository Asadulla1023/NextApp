import Head from "next/head";
import { COURSE_LIST_DATA, COURSE_LIST_DATA_S, COURSE_LIST_DATA_T } from "../constant";
import Link from "next/link";
import styles from "../styles/course.module.css";
import Header from "../components/pages/Header";

const course = () => {
  return (
    <>
      <Head>
        <title>Главная | YtYt - понятные уроки программирования</title>
        <link rel="shortcut icon" href="/title.png" type="image/x-icon" />
      </Head>
      <div className={styles.course}>
        <Header />
        <div className={styles.lessons}>
          <div className={styles.container}>
            <div className={styles.lessonWrapper}>
              <div className={styles.first}>
                <div className={styles.lessonsTitle}>
                  <h2 className={styles.title}>Основы основ</h2>
                  <div className={styles.lessonsStats}>
                    <span>7 уроков</span>
                  </div>
                </div>
                <div className={styles.list}>
                  {COURSE_LIST_DATA.map((e) => {
                    return (
                      <div key={e.id} className={styles.listRow}>
                        <Link href={e.url} className={styles.lessonsCard}>
                          <div className={styles.cardNum}>{e.id}</div>
                          <div className={styles.cardDesc}>
                            <div className={styles.cardTitle}>{e.text}</div>
                          </div>
                          <div className={styles.cardStatus}>
                            <div className={styles.isCompleted}>
                              <span>{e.status[0]}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.first}>
                <div className={styles.lessonsTitle}>
                  <h2 className={styles.title}>Управляющие конструкции</h2>
                  <div className={styles.lessonsStats}>
                    <span>5 уроков</span>
                  </div>
                </div>
                <div className={styles.list}>
                  {COURSE_LIST_DATA_S.map((e) => {
                    return (
                      <div key={e.id} className={styles.listRow}>
                        <Link href={e.url} className={styles.lessonsCard}>
                          <div className={styles.cardNum}>{e.id}</div>
                          <div className={styles.cardDesc}>
                            <div className={styles.cardTitle}>{e.text}</div>
                          </div>
                          <div className={styles.cardStatus}>
                            <div className={styles.isCompleted}>
                              <span>{e.status[0]}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.first}>
                <div className={styles.lessonsTitle}>
                  <h2 className={styles.title}>Финальный проект</h2>
                  <div className={styles.lessonsStats}>
                    <span>2 уроков</span>
                  </div>
                </div>
                <div className={styles.list}>
                  {COURSE_LIST_DATA_T.map((e) => {
                    return (
                      <div key={e.id} className={styles.listRow}>
                        <Link href={e.url} className={styles.lessonsCard}>
                          <div className={styles.cardNum}>{e.id}</div>
                          <div className={styles.cardDesc}>
                            <div className={styles.cardTitle}>{e.text}</div>
                          </div>
                          <div className={styles.cardStatus}>
                            <div className={styles.isCompleted}>
                              <span>{e.status[0]}</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default course;
