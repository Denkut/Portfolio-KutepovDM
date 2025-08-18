/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect, useCallback } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaHeart,
} from "react-icons/fa";
import { tracks, eventBus } from "../constants";
import { Track } from "../types";

const STORAGE_KEY = "likedTrackSrcs";

export const AudioPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showVolumeBubble, setShowVolumeBubble] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const track = tracks[currentTrackIndex] as Track;
  const isLiked = !!likedMap[track.src];
  const displayLikes = track.likes + (isLiked ? 1 : 0);

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const notifyBackground = (playing: boolean) => {
    eventBus.dispatchEvent(
      new CustomEvent("playlist-play", { detail: playing })
    );
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    const next = !isPlaying;
    setIsPlaying(next);
    if (next) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    notifyBackground(next);
  };

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
    notifyBackground(true);
  }, []);

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
    notifyBackground(true);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const updateProgress = () => {
      setProgress(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("ended", nextTrack);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("ended", nextTrack);
    };
  }, [currentTrackIndex, nextTrack, volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.volume = volume;
      if (isPlaying) audioRef.current.play().catch(() => {});
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setLikedMap(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedMap));
  }, [likedMap]);

  const toggleLike = () => {
    setLikedMap((prev) => {
      const next = { ...prev, [track.src]: !prev[track.src] };
      if (!next[track.src]) delete next[track.src];
      return next;
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-6 text-center">
      <audio
        ref={audioRef}
        src={import.meta.env.BASE_URL + track.src}
        preload="metadata"
      />

      <img
        src={import.meta.env.BASE_URL + track.cover}
        alt={track.title}
        className="w-full h-52 object-contain rounded-lg transform scale-95"
      />

      <div className="space-y-1">
        <h3 className="text-xl font-semibold">{track.title}</h3>
        <p className="text-sm text-muted-foreground">{track.artist}</p>
      </div>

      <div
        className="h-2 bg-gray-300 dark:bg-zinc-600 rounded-full cursor-pointer relative"
        onClick={handleProgressClick}
      >
        <div
          className="h-2 bg-primary rounded-full"
          style={{ width: `${(progress / duration) * 100}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="flex justify-center items-center gap-6 mt-4">
        <button
          onClick={prevTrack}
          className="text-primary hover:text-primary/80 transition"
          aria-label="Previous Track"
        >
          <FaStepBackward size={24} />
        </button>

        <button
          onClick={togglePlay}
          className="bg-primary text-white dark:text-black p-4 rounded-full shadow hover:scale-105 transition"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>

        <button
          onClick={nextTrack}
          className="text-primary hover:text-primary/80 transition"
          aria-label="Next Track"
        >
          <FaStepForward size={24} />
        </button>
      </div>

      <div className="flex justify-center items-center gap-2">
        <button
          onClick={toggleLike}
          className={`
            ${isLiked ? "text-red-500" : "text-muted-foreground"}
            hover:text-red-500 transition text-2xl
          `}
          aria-label={isLiked ? "Unlike" : "Like"}
        >
          <FaHeart />
        </button>
        <span className="text-sm text-muted-foreground">
          {displayLikes} {displayLikes === 1 ? "Like" : "Likes"}
        </span>
      </div>

      <div className="hidden md:flex items-center justify-center gap-2 relative group">
        <label htmlFor="volume" className="text-sm">
          Vol
        </label>

        <div className="relative w-32 md:w-40">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            onMouseDown={() => setShowVolumeBubble(true)}
            onMouseUp={() => setShowVolumeBubble(false)}
            onTouchStart={() => setShowVolumeBubble(true)}
            onTouchEnd={() => setShowVolumeBubble(false)}
            className="w-full appearance-none cursor-pointer bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:shadow-md"
            style={
              {
                "--vol": volume.toString(),
              } as React.CSSProperties
            }
          />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full pointer-events-none" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full pointer-events-none"
            style={{ width: `${volume * 100}%` }}
          />
          {showVolumeBubble && (
            <div className="absolute -top-7 left-[calc(var(--vol)*100%)] transform -translate-x-1/2 bg-primary text-white text-xs rounded px-2 py-1 transition-all">
              {Math.round(volume * 100)}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
