import { gql } from "@apollo/client";

export const QUERY_EVENT_PROFILE = gql`
  query EventProfile($id: Float!) {
    sampleEvent(id: $id) {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
    }
  }
`;
