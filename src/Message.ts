export type Message = {
  content: string | SystemEvent;
  id?: string;
  participantId?: string;
  timestamp: string;
  type: MessageType;
};

export type MessageType = "EVENT" | "MESSAGE";

export type SystemEvent =
  | "system:Connected"
  | "system:Disconnected"
  | "system:Typing";

export type SystemMessage = {
  content: SystemEvent;
  timestamp: string;
  type: "EVENT";
};
