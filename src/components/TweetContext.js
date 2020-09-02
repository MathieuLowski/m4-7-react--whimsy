import React, { useState } from "react";
import moment from "moment";
import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

const TweetProvider = ({ children }) => {
  const date = moment().format("h:mm a | MMM Do YYYY");
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  //  const tweetContents: "Where in the world am I?";
  //  const displayName: "Carmen Sandiego ✨";
  //  const username: "carmen-sandiego";
  //  const avatarSrc: avatar;
  //  const isRetweetedByCurrentUser: isRetweeted;
  //  const isLikedByCurrentUser: isLiked;

  const handleToggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setNumOfLikes(numOfLikes + 1);
    } else {
      setIsLiked(false);
      setNumOfLikes(numOfLikes - 1);
    }
  };

  const handleToggleRetweet = () => {
    if (!isRetweeted) {
      setIsRetweeted(true);
      setNumOfRetweets(numOfRetweets + 1);
    } else {
      setIsRetweeted(false);
      setNumOfRetweets(numOfRetweets - 1);
    }
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        date: date,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        isRetweeted: isRetweeted,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
