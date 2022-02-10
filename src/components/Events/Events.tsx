import { List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Item from "antd/lib/list/Item";
import React, { FC } from "react";
import EventList from "../EventList/EventList";
import PageLayout from "../PageLayout/PageLayout";
import data from "./../../data.json";
import styles from "./Events.module.scss";

interface EventsProps {}

const Events: FC<EventsProps> = () => (
  <PageLayout>
    <EventList />
  </PageLayout>
);

export default Events;