import React, { useState, useEffect, FC } from "react";
import {
  useEventListQuery as getEventListQuery,
  TEvent
} from "../../generated/graphql";
import EventList from "../EventList/EventList";
import Filters from "../Filters/Filters";
import _ from "lodash";
import qs from "query-string";
import { createBrowserHistory } from "history";
import { loginToken } from "../../useToken";

export const BlankEvent: TEvent = {
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

interface EventListContainerProps {
  token: loginToken;
}

const EventListContainer: FC<EventListContainerProps> = ({ token }) => {
  const { data, error, loading } = getEventListQuery();
  const [sortOrder, setSortOrder] = useState("");
  const [toggleFilters, setToggleFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const history = createBrowserHistory();

  useEffect(() => {
    const filterParams = history.location.search.substr(1);
    const filtersFromParams = qs.parse(filterParams);
    if (filtersFromParams.sortOrder) {
      setSortOrder(String(filtersFromParams.sortOrder));
    }
    if (
      filtersFromParams.toggleFilters &&
      JSON.parse(filtersFromParams.toggleFilters as string).length
    ) {
      setToggleFilters(JSON.parse(filtersFromParams.toggleFilters as string));
    }
  }, []);

  useEffect(() => {
    let pushed = 0;
    let params = "";
    if (sortOrder) {
      params += `?sortOrder=${sortOrder}`;
      pushed = 1;
    }
    if (toggleFilters.length) {
      if (pushed) {
        params += `&toggleFilters=${JSON.stringify(toggleFilters)}`;
      } else {
        params += `?toggleFilters=${JSON.stringify(toggleFilters)}`;
      }
      pushed = 1;
    }
    if (search.length) {
      if (pushed) {
        params += `&search=${JSON.stringify(search)}`;
      } else {
        params += `?search=${JSON.stringify(search)}`;
      }
    }
    if (params) history.push(params);
  }, [sortOrder, toggleFilters, search]);

  if (loading) {
    return (
      <EventList
        data={[
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
          BlankEvent,
        ]}
        loading={loading}
      />
    );
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  let filteredData = data.sampleEvents;
  let oppositeFilters;

  if (search) {
    filteredData = _.filter(filteredData, function (event) {
      return (event.description + event.name)
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }
  if (toggleFilters.length) {
    oppositeFilters = [
      "workshop",
      "tech_talk",
      "activity",
      "public",
      "private",
    ].filter((x) => !toggleFilters.includes(x));
  } else {
    oppositeFilters = ["private"];
  }
  oppositeFilters.forEach((filter) => {
    filteredData = _.filter(filteredData, function (event) {
      return event.event_type !== filter;
    });
    filteredData = _.filter(filteredData, function (event) {
      return event.permission !== filter;
    });
  });
  if (sortOrder === "latest") {
    filteredData = _.orderBy(
      filteredData,
      ["start_time", "end_time"],
      ["desc", "desc"]
    );
  } else if (sortOrder === "event_type") {
    filteredData = _.orderBy(
      filteredData,
      ["event_type", "start_time"],
      ["desc", "asc"]
    );
  } else if (sortOrder === "alphabetical") {
    filteredData = _.sortBy(filteredData, ["name", "start_time"]);
  } else {
    filteredData = _.sortBy(filteredData, ["start_time", "end_time"]);
  }

  return (
    <>
      <Filters
        hidePrivate={!token.viewPrivate}
        sortOrder={sortOrder}
        changeOrder={setSortOrder}
        toggleFilters={toggleFilters}
        hideFilters={setToggleFilters}
        setSearchBar={setSearch}
      />
      {/* <Button onClick={increasesortOrder}>CLICK</Button> */}
      <EventList data={filteredData} loading={loading} />
    </>
  );
};

export default EventListContainer;
