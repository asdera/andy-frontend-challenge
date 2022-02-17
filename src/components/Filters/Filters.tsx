import {
  Checkbox,
  DatePicker,
  Descriptions,
  Input,
  Select,
} from "antd";
import { FC } from "react";
import styles from "./Filters.module.scss";
const { Option } = Select;
const { RangePicker } = DatePicker;

interface FiltersProps {
  hidePrivate: boolean;
  sortOrder: string;
  changeOrder: Function;
  toggleFilters: string[];
  hideFilters: Function;
  setSearchBar: Function;
}

const Filters: FC<FiltersProps> = ({
  sortOrder,
  changeOrder,
  hidePrivate,
  toggleFilters,
  hideFilters,
  setSearchBar,
}) => {
  const filterChecks = [
    { label: "Workshop", value: "workshop" },
    { label: "Tech Talk", value: "tech_talk" },
    { label: "Activity", value: "activity" },
    { label: "Public", value: "public" },
    { label: "Private", value: "private", disabled: hidePrivate },
  ];

  return (
    <div className={styles.container}>
      <Descriptions bordered size="small">
        <Descriptions.Item
          label={
            <Input.Search
              placeholder="Search for an event"
              onSearch={(value) => setSearchBar(value)}
            />
          }
        >
          <Checkbox.Group
            options={filterChecks}
            defaultValue={
              toggleFilters.length
                ? toggleFilters
                : hidePrivate
                ? ["workshop", "tech_talk", "activity", "public"]
                : ["workshop", "tech_talk", "activity", "public", "private"]
            }
            onChange={(values) => hideFilters(values)}
          />
        </Descriptions.Item>
        <Descriptions.Item
          label={<RangePicker className={styles.datePicker} />}
        >
          <Select
            defaultValue={sortOrder ? sortOrder : "Order by"}
            style={{ width: 100 }}
            onChange={(v) => changeOrder(v)}
          >
            <Option value="earliest">Earliest</Option>
            <Option value="latest">Latest</Option>
            <Option value="event_type">Event Type</Option>
            <Option value="alphabetical">Alphabetical</Option>
          </Select>
        </Descriptions.Item>
      </Descriptions>
      {/* <Space>
        
      </Space> */}
      <br />
    </div>
  );
};

export default Filters;
