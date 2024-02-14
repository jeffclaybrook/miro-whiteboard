import { createClient, LiveList, LiveMap, LiveObject } from "@liveblocks/client"
import { createRoomContext } from "@liveblocks/react"
import { Layer, Color } from "./types/canvas"
  
const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblocks-auth"
})

type Presence = {
  cursor: { x: number, y: number } | null,
  selection: string[]
  pencilDraft: [x: number, y: number, pressure: number][] | null
  penColor: Color | null
}

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>
  layerIds: LiveList<string>
  
}

type UserMeta = {
  id?: string, 
  info?: {
    name?: string
    picture?: string
  }
};

type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

export type ThreadMetadata = {
  // resolved: boolean;
  // quote: string;
  // time: number;
}

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client, {
  async resolveUsers({ userIds }) {
    return []
  },
  async resolveMentionSuggestions({ text, roomId }) {
    return []
  }
})