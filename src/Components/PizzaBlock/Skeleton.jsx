import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="3" y="244" rx="10" ry="10" width="271" height="30" /> 
    <rect x="4" y="285" rx="11" ry="11" width="272" height="80" /> 
    <rect x="0" y="391" rx="9" ry="9" width="83" height="30" /> 
    <rect x="162" y="386" rx="17" ry="17" width="113" height="45" /> 
    <circle cx="135" cy="118" r="115" />
  </ContentLoader>
)

export default Skeleton;