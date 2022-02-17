import React, { FC } from "react";
import styles from "./EventRelatedView.module.scss";
import {
  useEventListQuery as getEventListQuery,
  TEvent,
  useEventProfileQuery as getEventProfileQuery,
} from "../../generated/graphql";
import { Skeleton, Typography } from "antd";
import EventProfile from "../EventProfile/EventProfile";
import { BlankEvent } from "../EventListContainer/EventListContainer";
const { Title } = Typography;

interface EventRelatedViewProps {
  id: number;
  oldId: number;
}

const EventRelatedView: FC<EventRelatedViewProps> = ({ id, oldId }) => {
  // const { data, error, loading } = getEventProfileQuery({ variables: {id: id}});
  const { data, error, loading } = getEventListQuery();
  if (loading) {
    return <Skeleton></Skeleton>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  let sampleEvent;
  if (data) {
    sampleEvent = data.sampleEvents.find((obj) => {
      return id == obj.id;
    });
    // if (sampleEvent) {
    //   sampleEvent.id = oldId*10000+1;
    // }
  }

  return (
    <div className={styles.relatedCards}>
      <EventProfile
        nested
        item={sampleEvent || BlankEvent}
        loading={loading}
      ></EventProfile>
    </div>
  );
};

export default EventRelatedView;
