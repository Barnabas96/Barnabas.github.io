import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";

interface VideoPlayerProps {
  playbackUrl: string;
  onPlaybackStatusUpdate?: (status: AVPlaybackStatus) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ playbackUrl, onPlaybackStatusUpdate }) => {
  return (
    <Video
      source={{ uri: playbackUrl }}
      style={{ width: '100%', aspectRatio: 16 / 9 }}
      useNativeControls
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
};

export default VideoPlayer;
