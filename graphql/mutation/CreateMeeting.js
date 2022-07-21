import { gql } from "@apollo/client";

export const CREATE_MEETING = gql`
  mutation CreateMeeting($meetingInput: MeetingInput) {
    createMeeting(meetingInput: $meetingInput) {
      id
      title
      description
      detail
      tag
      createdAt
      createdBy
    }
  }
`;
