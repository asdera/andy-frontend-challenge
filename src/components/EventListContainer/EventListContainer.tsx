import React, { useState, useEffect, FC } from "react";
import {
  useEventListQuery as getEventListQuery,
  TEvent,
  useEventProfileQuery as getEventProfileQuery,
} from "../../generated/graphql";
import EventList from "../EventList/EventList";
import { List, message, Avatar, Select, Skeleton } from "antd";
import VirtualList from "rc-virtual-list";
import { Option } from "antd/lib/mentions";

const blankEvent: TEvent = {
  id: 0,
  name: "",
  event_type: "",
  permission: "",
  start_time: 0,
  end_time: 0,
  description: "",
  speakers: [],
  public_url: "",
  private_url: "",
  related_events: [],
};

const EventListContainer = () => {
  const { data, error, loading } = getEventListQuery();

  if (loading) {
    return (
      <EventList
        data={{
          sampleEvents: [
            blankEvent,
            blankEvent,
            blankEvent,
            blankEvent,
            blankEvent,
            blankEvent,
          ],
        }}
        loading={loading}
      />
    );
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <EventList data={data} loading={loading} />;
};

export default EventListContainer;
