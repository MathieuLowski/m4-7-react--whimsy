import React from "react";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = false;
  const isLikedByCurrentUser = false;
  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
