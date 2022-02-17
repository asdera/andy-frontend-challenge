import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Modal from "antd/lib/modal/Modal";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import { FC, useState } from "react";
import useToken from "../../useToken";
import EventListContainer from "../EventListContainer/EventListContainer";
import Login from "../Login/Login";
import PageLayout from "../PageLayout/PageLayout";
import activityAvatar from "../../images/confetti.png";
import talkAvatar from "../../images/answer.png";
import styles from "./Events.module.scss";

interface EventsProps {}

const Events: FC<EventsProps> = () => {
  const { token, setToken } = useToken();
  const [isLoginShown, setIsLoginShown] = useState(false);

  const showModal = () => {
    setIsLoginShown(true);
  };

  const handleClose = () => {
    setIsLoginShown(false);
  };

  return (
    <PageLayout>
      <Title className={styles.title}>
        <Paragraph type="secondary">
          Welcome to Hackathon Global Events
        </Paragraph>
        <Avatar src={talkAvatar} size={240} className={styles.titleIcon1} />
        <Avatar src={activityAvatar} size={240} className={styles.titleIcon2} />
      </Title>
      {token.viewPrivate ? (
        <Title level={2}>
          <Paragraph type="success">
            You're logged in. Welcome {token.username}!
          </Paragraph>
        </Title>
      ) : (
        <Button
          className={styles.loginButton}
          type="primary"
          onClick={showModal}
        >
          Please login to view private events
        </Button>
      )}
      <Modal
        title="Login to Hackathon Global"
        visible={isLoginShown}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <Login token={token} setToken={setToken} closeLogin={handleClose} />
      </Modal>
      <EventListContainer token={token} />
    </PageLayout>
  );
};
export default Events;
