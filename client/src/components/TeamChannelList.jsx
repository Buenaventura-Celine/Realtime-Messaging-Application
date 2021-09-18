import React from 'react'

import { AddChannel } from '../assets'

const TeamChannelList = (children, error=false, loading, type) => {
    if(error){
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-cahnnel-list__message">
                    Connection error, please wait a momment and try again
                </p>
            </div>
        ): null
    }

    if (loading){
        return(
            <div className="team-channel-list">
                <p className="team-cahnnel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Message'} loading...
                </p>
            </div>
        )
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'} loading...
                </p>
                {/* Button to add a channel */}
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList
